// const API_URL = (
//   import.meta.env.VITE_SAAVN_API_URL ||
//   "https://saavn.bycomsolutions.com/api"
// ).replace(/\/$/, "");

// // Extract array from different API response formats
// function getArray(data) {
//   if (Array.isArray(data)) return data;

//   if (Array.isArray(data?.data)) return data.data;
//   if (Array.isArray(data?.results)) return data.results;
//   if (Array.isArray(data?.songs)) return data.songs;

//   if (Array.isArray(data?.data?.results)) return data.data.results;
//   if (Array.isArray(data?.data?.songs)) return data.data.songs;

//   return [];
// }

// // Convert API song into app's standard format
// function normalizeSong(song) {
//   const artists =
//     song.artists?.primary ||
//     song.artists?.all ||
//     song.artist ||
//     song.artists ||
//     [];

//   const artistName = Array.isArray(artists)
//     ? artists.map((artist) => artist.name || artist).join(", ")
//     : typeof artists === "string"
//       ? artists
//       : artists?.name || "Unknown Artist";

//   const image =
//     Array.isArray(song.image)
//       ? song.image[song.image.length - 1]?.url
//       : song.image;

//   const downloadUrl =
//     Array.isArray(song.downloadUrl)
//       ? song.downloadUrl[song.downloadUrl.length - 1]?.url
//       : song.downloadUrl;

//   return {
//     id: String(song.id || song.songId || song.pid || ""),
//     title: song.name || song.title || song.song || "Unknown Song",
//     artist: artistName,
//     album: song.album?.name || song.album || "Unknown Album",
//     image: image || song.thumbnail || "",
//     audio:
//       downloadUrl ||
//       song.url ||
//       song.media_url ||
//       song.audio ||
//       "",
//     duration: Number(song.duration || 0),
//     source: "saavn",
//   };
// }

// // Fetch helper
// async function fetchAPI(endpoint, signal) {
//   const response = await fetch(`${API_URL}${endpoint}`, {
//     signal,
//   });

//   if (!response.ok) {
//     throw new Error(`Saavn API error: ${response.status}`);
//   }

//   return response.json();
// }

// // Search songs
// export async function searchSongs(query, signal) {
//   if (!query?.trim()) return [];

//   const params = new URLSearchParams({
//     query: query.trim(),
//     page: "0",
//     limit: "20",
//   });

//   const data = await fetchAPI(
//     `/search/songs?${params.toString()}`,
//     signal
//   );

//   return getArray(data)
//     .map(normalizeSong)
//     .filter((song) => song.id && song.audio);
// }

// // Trending songs
// export async function getTrending(signal) {
//   try {
//     const data = await fetchAPI(
//       "/trending?language=hindi",
//       signal
//     );

//     const songs = getArray(data)
//       .map(normalizeSong)
//       .filter((song) => song.id && song.audio);

//     if (songs.length) return songs;
//   } catch (error) {
//     if (error.name === "AbortError") throw error;
//   }

//   // Fallback: popular Hindi songs
//   return searchSongs("Arijit Singh", signal);
// }




const API_URL = (
  import.meta.env.VITE_SAAVN_API_URL ||
  "https://saavn.bycomsolutions.com/api"
).replace(/\/+$/, "");

const DEFAULT_LIMIT = 20;

/* =========================================
   Helpers
========================================= */

function getArray(data) {
  if (Array.isArray(data)) return data;

  const possibleArrays = [
    data?.data,
    data?.results,
    data?.songs,
    data?.data?.results,
    data?.data?.songs,
    data?.data?.data,
    data?.data?.data?.results,
  ];

  return possibleArrays.find(Array.isArray) || [];
}

function getUrl(value) {
  if (!value) return "";

  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return getUrl(value[value.length - 1]);
  }

  return value.url || value.link || value.downloadUrl || "";
}

function getArtistName(song) {
  const artists =
    song.artists?.primary ||
    song.artists?.all ||
    song.artist ||
    song.artists;

  if (!artists) return "Unknown Artist";

  if (typeof artists === "string") {
    return artists;
  }

  if (Array.isArray(artists)) {
    return artists
      .map((artist) =>
        typeof artist === "string"
          ? artist
          : artist?.name || artist?.title
      )
      .filter(Boolean)
      .join(", ") || "Unknown Artist";
  }

  return artists.name || artists.title || "Unknown Artist";
}

function getAlbumName(song) {
  if (typeof song.album === "string") {
    return song.album;
  }

  return song.album?.name || song.album?.title || "Unknown Album";
}

/* =========================================
   Normalize Song
========================================= */

function normalizeSong(song) {
  if (!song || typeof song !== "object") {
    return null;
  }

  const id = String(
    song.id ||
    song.songId ||
    song.pid ||
    song.perma_url ||
    ""
  );

  const title =
    song.name ||
    song.title ||
    song.song ||
    "Unknown Song";

  const image = getUrl(
    song.image ||
    song.images ||
    song.thumbnail
  );

  const audio = getUrl(
    song.downloadUrl ||
    song.download_url ||
    song.url ||
    song.media_url ||
    song.audio
  );

  const duration = Number(song.duration || 0);

  return {
    id,
    title,
    artist: getArtistName(song),
    album: getAlbumName(song),
    image,
    audio,
    duration: Number.isFinite(duration) ? duration : 0,
    source: "saavn",
  };
}

/* =========================================
   Fetch API
========================================= */

async function fetchAPI(endpoint, signal) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    signal,
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Saavn API error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

/* =========================================
   Normalize Response
========================================= */

function normalizeResponse(data) {
  const seen = new Set();

  return getArray(data)
    .map(normalizeSong)
    .filter((song) => {
      if (!song || !song.id || !song.audio) {
        return false;
      }

      if (seen.has(song.id)) {
        return false;
      }

      seen.add(song.id);

      return true;
    });
}

/* =========================================
   Search Songs
========================================= */

export async function searchSongs(query, signal) {
  const trimmedQuery = query?.trim();

  if (!trimmedQuery) {
    return [];
  }

  const params = new URLSearchParams({
    query: trimmedQuery,
    page: "0",
    limit: String(DEFAULT_LIMIT),
  });

  const data = await fetchAPI(
    `/search/songs?${params.toString()}`,
    signal
  );

  return normalizeResponse(data);
}

/* =========================================
   Trending Songs
========================================= */

export async function getTrending(signal) {
  try {
    const data = await fetchAPI(
      "/trending?language=hindi",
      signal
    );

    const songs = normalizeResponse(data);

    if (songs.length > 0) {
      return songs;
    }
  } catch (error) {
    // Cancellation should not trigger fallback requests.
    if (error.name === "AbortError") {
      throw error;
    }

    console.warn(
      "Unable to fetch trending songs:",
      error.message
    );
  }

  // Fallback to popular Hindi songs.
  return searchSongs("Arijit Singh", signal);
}