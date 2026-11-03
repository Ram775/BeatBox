
import { memo } from "react";

import Home from "../../pages/Home";
import Discover from "../../pages/Discover";
import SearchPage from "../../pages/Search";
import LikedSongs from "../../pages/LikedSongs";
import Playlist from "../../pages/Playlist";

function PageRenderer({ tab, app }) {
  const {
    player,
    library,
    music,
    query,
    selectedPlaylist,
    handleSearch,
    setActiveTab,
  } = app;

  const common = {
    current: player.current,
    playing: player.playing,
    onPlay: player.playSong,
    onLike: library.toggleLike,
    isLiked: library.isLiked,
  };

  const pages = {
    Discover: (
      <Discover
        songs={music.songs}
        onPlay={player.playSong}
      />
    ),

    Search: (
      <SearchPage
        query={query}
        songs={music.searchResults}
        {...common}
      />
    ),

    "Liked Songs": (
      <LikedSongs
        songs={library.likedSongs}
        {...common}
      />
    ),

    Playlist: (
      <Playlist
        playlist={selectedPlaylist}
        {...common}
      />
    ),
  };

  return (
    pages[tab] ?? (
      <Home
        songs={music.songs}
        {...common}
        onMoodSelect={handleSearch}
        onViewAll={() => setActiveTab("Search")}
      />
    )
  );
}

export default memo(PageRenderer);
