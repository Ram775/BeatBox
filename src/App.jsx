import useSvaraApp from "./hooks/useSvaraApp";

import MainLayout from "./components/layout/MainLayout";
import Header from "./components/layout/Header";
import PageRenderer from "./components/layout/PageRenderer";
import MusicPlayer from "./components/music/MusicPlayer";

export default function App() {
  const app = useSvaraApp();

  const {
    activeTab,
    setActiveTab,
    query,
    setQuery,
    handleSearch,
    library,
    player,
    playPrevious,
    playNext,
    volume,
    changeVolume,
  } = app;

  const currentSong = player.current;

  return (
    <MainLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      likedCount={library.likedSongs.length}
      playlists={library.playlists}
      onCreatePlaylist={library.createPlaylist}
    >
      <div className="relative min-h-screen">
        {/* Main application content */}
        <div className="relative z-10">
          <Header
            query={query}
            setQuery={setQuery}
            onSearch={handleSearch}
          />

          <PageRenderer
            tab={activeTab}
            app={app}
          />
        </div>

        {/* Persistent music player */}
        <MusicPlayer
          current={currentSong}
          playing={player.playing}
          progress={player.progress}
          duration={player.duration}
          onPlayPause={() => player.playSong(currentSong)}
          onPrevious={playPrevious}
          onNext={playNext}
          onSeek={player.seek}
          liked={library.isLiked(currentSong)}
          onLike={() => library.toggleLike(currentSong)}
          volume={volume}
          onVolumeChange={changeVolume}
        />
      </div>
    </MainLayout>
  );
}