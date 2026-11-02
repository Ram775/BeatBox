import useSvaraApp from "./hooks/useSvaraApp";
import MainLayout from "./components/layout/MainLayout";
import Header from "./components/layout/Header";
import PageRenderer from "./components/layout/PageRenderer";
import MusicPlayer from "./components/music/MusicPlayer";

export default function App() {
  const app = useSvaraApp();

  return (
    <MainLayout
      activeTab={app.activeTab}
      setActiveTab={app.setActiveTab}
      likedCount={app.library.likedSongs.length}
      playlists={app.library.playlists}
      onCreatePlaylist={app.library.createPlaylist}
    >
      <Header
        query={app.query}
        setQuery={app.setQuery}
        onSearch={app.handleSearch}
      />

      <PageRenderer tab={app.activeTab} app={app} />

      <MusicPlayer
        current={app.player.current}
        playing={app.player.playing}
        progress={app.player.progress}
        duration={app.player.duration}
        onPlayPause={() => app.player.playSong(app.player.current)}
        onPrevious={app.playPrevious}
        onNext={app.playNext}
        onSeek={app.player.seek}
        liked={app.library.isLiked(app.player.current)}
        onLike={() => app.library.toggleLike(app.player.current)}
        volume={app.volume}
        onVolumeChange={app.changeVolume}
      />
    </MainLayout>
  );
}