import { ListMusic, Music2, Play, Sparkles } from "lucide-react";
import { TrackList } from "../components/music/TrackList";
import EmptyState from "../components/common/EmptyState";

export default function Playlist({
  playlist,
  current,
  playing,
  onPlay,
  onLike,
  isLiked,
  onMore,
}) {
  const songs = playlist?.songs || [];

  return (
    <main className="relative min-h-full overflow-hidden px-4 py-6 sm:px-6 md:px-8 md:py-8">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Playlist Hero */}
        <section className="relative mb-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#24132f] via-[#17121f] to-[#101014] p-5 sm:p-8 md:p-10">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-purple-500/10 blur-[90px]" />

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-end">
            {/* Playlist artwork */}
            <div className="group relative flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-700 shadow-2xl shadow-purple-900/30 sm:h-48 sm:w-48">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/30" />

              <div className="absolute inset-3 rounded-xl border border-white/10" />

              <ListMusic
                size={72}
                strokeWidth={1.3}
                className="relative text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20"
              />

              <div className="absolute bottom-3 right-3 rounded-full bg-black/25 p-2 backdrop-blur-md">
                <Sparkles size={16} className="text-white/80" />
              </div>
            </div>

            {/* Playlist details */}
            <div className="min-w-0 flex-1">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-300">
                <Music2 size={13} />
                Your Playlist
              </span>

              <h1 className="break-words text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                {playlist?.name || "Playlist"}
              </h1>

              <p className="mt-3 text-sm text-zinc-400">
                Your personal collection of favorite sounds.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-zinc-300">
                  <ListMusic size={15} className="text-fuchsia-400" />
                  <span className="font-semibold text-white">
                    {songs.length}
                  </span>
                  {songs.length === 1 ? "song" : "songs"}
                </span>

                {songs.length > 0 && (
                  <span className="text-xs text-zinc-500">
                    Ready to play
                  </span>
                )}
              </div>
            </div>

            {/* Play button */}
            {songs.length > 0 && (
              <button
                onClick={() => onPlay?.(songs[0])}
                className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-lg shadow-fuchsia-500/20 transition-all duration-300 hover:scale-110 hover:shadow-fuchsia-500/40 active:scale-95"
                aria-label="Play playlist"
              >
                <Play
                  size={24}
                  fill="currentColor"
                  className="ml-1 transition-transform group-hover:scale-110"
                />
              </button>
            )}
          </div>
        </section>

        {/* Songs section */}
        <section>
          {songs.length > 0 ? (
            <>
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    Tracks
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500">
                    Listen to your collection
                  </p>
                </div>

                <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-400">
                  {songs.length} tracks
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
          ) : (
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] px-4 py-10 text-center sm:px-8">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10">
                <ListMusic size={30} className="text-fuchsia-400" />
              </div>

              <h2 className="mb-2 text-xl font-bold text-white">
                This playlist is empty
              </h2>

              <p className="mx-auto mb-6 max-w-sm text-sm leading-relaxed text-zinc-500">
                Add your favorite songs and create your own personal music
                collection.
              </p>

              <EmptyState
                title="No songs yet"
                description="Explore music and start building your playlist."
              />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}