import { useState } from "react";
import useAudioPlayer from "./useAudioPlayer";
import useMusic from "./useMusic";
import useLibrary from "./useLibrary";

export default function useSvaraApp() {
  const [activeTab, setActiveTab] = useState("Home");
  const [query, setQuery] = useState("");
  const [volume, setVolume] = useState(0.7);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const music = useMusic();
  const player = useAudioPlayer();
  const library = useLibrary();

  const handleSearch = (value) => {
    setQuery(value);
    setActiveTab("Search");
    music.search(value);
  };

  const playNext = () => {
    const list = music.searchResults.length
      ? music.searchResults
      : music.songs;

    const index = list.findIndex((song) => song.id === player.current?.id);
    if (list.length) player.playSong(list[(index + 1) % list.length]);
  };

  const playPrevious = () => {
    const list = music.searchResults.length
      ? music.searchResults
      : music.songs;

    const index = list.findIndex((song) => song.id === player.current?.id);
    if (list.length) {
      player.playSong(list[(index - 1 + list.length) % list.length]);
    }
  };

  const changeVolume = (value) => {
    setVolume(value);
    player.audioRef.current.volume = value;
  };

  return {
    activeTab,
    setActiveTab,
    query,
    setQuery,
    handleSearch,
    volume,
    changeVolume,
    selectedPlaylist,
    setSelectedPlaylist,
    playNext,
    playPrevious,
    music,
    player,
    library,
  };
}