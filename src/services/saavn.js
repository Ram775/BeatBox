const API_URL = (
  import.meta.env.VITE_SAAVN_API_URL ||
  "https://saavn.bycomsolutions.com/api"
).replace(/\/$/, "");

// Extract array from different API response formats
function getArray(data) {
  if (Array.isArray(data)) return data;

  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.songs)) return data.songs;

  if (Array.isArray(data?.data?.results)) return data.data.results;
  if (Array.isArray(data?.data?.songs)) return data.data.songs;

  return [];
}

// Convert API song into app's standard format
function normalizeSong(song) {
  const artists =
    song.artists?.primary ||
    song.artists?.all ||
    song.artist ||
    song.artists ||
    [];

  const artistName = Array.isArray(artists)
    ? artists.map((artist) => artist.name || artist).join(", ")
    : typeof artists === "string"
      ? artists
      : artists?.name || "Unknown Artist";

  const image =
    Array.isArray(song.image)
      ? song.image[song.image.length - 1]?.url
      : song.image;

  const downloadUrl =
    Array.isArray(song.downloadUrl)
      ? song.downloadUrl[song.downloadUrl.length - 1]?.url
      : song.downloadUrl;

  return {
    id: String(song.id || song.songId || song.pid || ""),
    title: song.name || song.title || song.song || "Unknown Song",
    artist: artistName,
    album: song.album?.name || song.album || "Unknown Album",
    image: image || song.thumbnail || "",
    audio:
      downloadUrl ||
      song.url ||
      song.media_url ||
      song.audio ||
      "",
    duration: Number(song.duration || 0),
    source: "saavn",
  };
}

// Fetch helper
async function fetchAPI(endpoint, signal) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Saavn API error: ${response.status}`);
  }

  return response.json();
}

// Search songs
export async function searchSongs(query, signal) {
  if (!query?.trim()) return [];

  const params = new URLSearchParams({
    query: query.trim(),
    page: "0",
    limit: "20",
  });

  const data = await fetchAPI(
    `/search/songs?${params.toString()}`,
    signal
  );

  return getArray(data)
    .map(normalizeSong)
    .filter((song) => song.id && song.audio);
}

// Trending songs
export async function getTrending(signal) {
  try {
    const data = await fetchAPI(
      "/trending?language=hindi",
      signal
    );

    const songs = getArray(data)
      .map(normalizeSong)
      .filter((song) => song.id && song.audio);

    if (songs.length) return songs;
  } catch (error) {
    if (error.name === "AbortError") throw error;
  }

  // Fallback: popular Hindi songs
  return searchSongs("Arijit Singh", signal);
}