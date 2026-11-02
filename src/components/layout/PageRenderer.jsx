import Home from "../../pages/Home";
import Discover from "../../pages/Discover";
import SearchPage from "../../pages/Search";
import LikedSongs from "../../pages/LikedSongs";
import Playlist from "../../pages/Playlist";

export default function PageRenderer({ tab, app }) {
  const common = {
    current: app.player.current,
    playing: app.player.playing,
    onPlay: app.player.playSong,
    onLike: app.library.toggleLike,
    isLiked: app.library.isLiked,
  };

  switch (tab) {
    case "Discover":
      return <Discover songs={app.music.songs} onPlay={app.player.playSong} />;

    case "Search":
      return (
        <SearchPage
          query={app.query}
          songs={app.music.searchResults}
          {...common}
        />
      );

    case "Liked Songs":
      return <LikedSongs songs={app.library.likedSongs} {...common} />;

    case "Playlist":
      return <Playlist playlist={app.selectedPlaylist} {...common} />;

    default:
      return (
        <Home
          songs={app.music.songs}
          {...common}
          onMoodSelect={app.handleSearch}
          onViewAll={() => app.setActiveTab("Search")}
        />
      );
  }
}