import { Heart, Sparkles } from "lucide-react";
import { TrackList } from "../components/music/TrackList";
import EmptyState from "../components/common/EmptyState";

export default function LikedSongs({
  songs = [],
  current,
  playing,
  onPlay,
  onLike,
  isLiked,
  onMore,
}) {
  return (
    <main className="relative min-h-full overflow-hidden px-4 py-6 sm:px-5 md:px-8 md:py-8">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-fuchsia-600/[0.06] blur-[120px]" />

      {/* Header */}
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-[#251323] via-[#17121c] to-[#111116] p-5 sm:p-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
          {/* Heart Artwork */}
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500 to-purple-700 shadow-xl shadow-fuchsia-950/30 sm:h-32 sm:w-32">
            <Heart
              size={52}
              strokeWidth={1.5}
              className="fill-white text-white drop-shadow-lg sm:h-16 sm:w-16"
            />

            <Sparkles
              size={18}
              className="absolute right-3 top-3 text-white/70"
            />
          </div>

          {/* Header Details */}
          <div className="min-w-0">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-fuchsia-300">
              Your Collection
            </p>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Liked Songs
            </h1>

            <p className="mt-2 max-w-xl text-sm text-zinc-400 sm:text-base">
              Your personal collection of favorites. All the songs you love, in one place.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-black/20 px-3 py-1.5 text-xs text-zinc-400">
              <Heart size={13} className="fill-fuchsia-500 text-fuchsia-500" />
              <span>
                {songs.length} {songs.length === 1 ? "song" : "songs"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Liked Tracks */}
      <section className="relative">
        {songs.length === 0 ? (
          <EmptyState
            title="No liked songs yet"
            description="Tap the heart on a song to save it here."
          />
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">
                Your favorites
              </h2>

              <span className="text-xs text-zinc-500">
                Recently collected
              </span>
            </div>

            <TrackList
              songs={songs}
              current={current}
              playing={playing}
              onPlay={onPlay}
              onLike={onLike}
              isLiked={isLiked}
              onMore={onMore}
            />
          </>
        )}
      </section>
    </main>
  );
}