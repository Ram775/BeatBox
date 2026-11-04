
import { Flame, TrendingUp } from "lucide-react";

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
    <section className="relative mb-12">

      {/* Section Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/10 bg-gradient-to-br from-orange-500/15 to-red-500/10 text-orange-400">
          <Flame size={21} />
        </div>

        <div className="min-w-0 flex-1">
          <SectionHeader
            title="Trending right now"
            subtitle="The tracks everyone's listening to"
            action="View all"
            onAction={onViewAll}
          />
        </div>
      </div>

      {/* Trending Indicator */}
      <div className="mb-4 flex items-center gap-2 rounded-xl border border-orange-500/[0.08] bg-orange-500/[0.035] px-3 py-2.5">
        <TrendingUp size={15} className="text-orange-400" />

        <p className="text-xs text-zinc-400">
          <span className="font-semibold text-orange-400">
            Hot right now
          </span>
          <span className="mx-1.5 text-zinc-700">•</span>
          Trending tracks updated regularly
        </p>
      </div>

      {/* Tracks */}
      <div className="overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.015]">
        <TrackList
          songs={songs}
          current={current}
          playing={playing}
          onPlay={onPlay}
          onLike={onLike}
          isLiked={isLiked}
          onMore={onMore}
        />
      </div>

    </section>
  );
}
