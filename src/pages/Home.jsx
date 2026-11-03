import HeroSection from "../components/home/HeroSection";
import MoodSection from "../components/home/MoodSection";
import TrendingSection from "../components/home/TrendingSection";

export default function Home({
  songs = [],
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
    <main className="relative min-h-full overflow-hidden px-4 py-6 sm:px-5 md:px-8 md:py-8">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-fuchsia-600/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-[500px] h-96 w-96 rounded-full bg-purple-600/[0.04] blur-[120px]" />

      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-8 sm:gap-10">
        {/* Hero */}
        <HeroSection
          onPlay={() => songs?.[0] && onPlay?.(songs[0])}
        />

        {/* Mood Selection */}
        <MoodSection onMoodSelect={onMoodSelect} />

        {/* Trending Tracks */}
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
      </div>
    </main>
  );
}