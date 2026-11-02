import HeroSection from "../components/home/HeroSection";
import MoodSection from "../components/home/MoodSection";
import TrendingSection from "../components/home/TrendingSection";

export default function Home({
  songs,
  current,
  playing,
  onPlay,
  onLike,
  isLiked,
  onMore,
  onMoodSelect,
  onViewAll,
}) {
  return (
    <main className="px-5 py-6 md:px-8 md:py-8">
      <HeroSection onPlay={() => songs?.[0] && onPlay(songs[0])} />

      <MoodSection onMoodSelect={onMoodSelect} />

      <TrendingSection
        songs={songs}
        current={current}
        playing={playing}
        onPlay={onPlay}
        onLike={onLike}
        isLiked={isLiked}
        onMore={onMore}
        onViewAll={onViewAll}
      />
    </main>
  );
}