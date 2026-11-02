import { useEffect, useState } from "react";

const readStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
};

export default function useLibrary() {
  const [likedSongs, setLikedSongs] = useState(() =>
    readStorage("svara-liked", [])
  );

  const [playlists, setPlaylists] = useState(() =>
    readStorage("svara-playlists", [])
  );

  useEffect(() => {
    localStorage.setItem("svara-liked", JSON.stringify(likedSongs));
  }, [likedSongs]);

  useEffect(() => {
    localStorage.setItem("svara-playlists", JSON.stringify(playlists));
  }, [playlists]);

  const toggleLike = (song) => {
    setLikedSongs((prev) =>
      prev.some((item) => item.id === song.id)
        ? prev.filter((item) => item.id !== song.id)
        : [...prev, song]
    );
  };

  const isLiked = (song) =>
    likedSongs.some((item) => item.id === song?.id);

  const createPlaylist = (name) => {
    if (!name.trim()) return;

    setPlaylists((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name: name.trim(),
        songs: [],
      },
    ]);
  };

  return {
    likedSongs,
    playlists,
    toggleLike,
    isLiked,
    createPlaylist,
    setPlaylists,
  };
}