import { useEffect, useState } from "react";
import { getTrending, searchSongs } from "../services/saavn";

export default function useMusic() {
  const [songs, setSongs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    getTrending(controller.signal)
      .then(setSongs)
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Unable to load trending songs.");
        }
      });

    return () => controller.abort();
  }, []);

  const search = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const results = await searchSongs(query);
      setSearchResults(results);
    } catch {
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    songs,
    searchResults,
    loading,
    error,
    search,
  };
}