import SectionHeader from "../common/SectionHeader";
import { TrackList } from "../music/TrackList";

export default function TrendingSection({
  songs,
  current,
  playing,
  onPlay,
  onLike,
  isLiked,
  onMore,
  onViewAll,
}) {
  return (
    <section className="mb-10">
      <SectionHeader
        title="Trending right now"
        subtitle="The tracks everyone's listening to"
        action="View all"
        onAction={onViewAll}
      />

      <TrackList
        songs={songs}
        current={current}
        playing={playing}
        onPlay={onPlay}
        onLike={onLike}
        isLiked={isLiked}
        onMore={onMore}
      />
    </section>
  );
}