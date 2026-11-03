import { Compass, Play, Sparkles, Music2 } from "lucide-react";
import EmptyState from "../components/common/EmptyState";

export default function Discover({ songs = [], onPlay }) {
  return (
    <main className="min-h-full px-4 py-6 sm:px-5 md:px-8 md:py-8">
      {/* Discover Hero */}
      <section className="relative mb-8 overflow-hidden rounded-3xl border border-white/[0.06] bg-[#17121e] p-5 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-purple-600/15 blur-[80px]" />

        <div className="relative">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-400">
              <Compass size={18} />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300">
              Explore Music
            </span>
          </div>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Discover
                <span className="ml-2 bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  Music
                </span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                Explore new sounds, find hidden gems, and discover your next favorite song.
              </p>
            </div>

            <div className="hidden h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] sm:flex">
              <Sparkles size={34} className="text-fuchsia-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Songs */}
      {songs.length === 0 ? (
        <EmptyState
          title="Nothing to discover yet"
          description="Music recommendations will appear here."
        />
      ) : (
        <section>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white sm:text-xl">
                Recommended for you
              </h2>
              <p className="mt-1 text-xs text-zinc-500">
                Fresh tracks waiting to be played
              </p>
            </div>

            <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400">
              {songs.length} tracks
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {songs.map((song) => (
              <button
                key={song.id}
                type="button"
                onClick={() => onPlay?.(song)}
                className="group min-w-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#15151b] p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-500/30 hover:bg-[#1b1722] hover:shadow-xl hover:shadow-fuchsia-950/20 sm:p-4"
              >
                {/* Artwork */}
                <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900">
                  {song.image ? (
                    <img
                      src={song.image}
                      alt={song.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-fuchsia-600/30 to-purple-900/50">
                      <Music2 size={40} className="text-fuchsia-300/60" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span className="flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all duration-300 group-hover:translate-y-0 group-hover:scale-110">
                      <Play size={20} fill="currentColor" className="ml-0.5" />
                    </span>
                  </div>
                </div>

                {/* Song Details */}
                <div className="mt-3 min-w-0">
                  <p className="truncate text-sm font-semibold text-white transition-colors group-hover:text-fuchsia-300">
                    {song.title}
                  </p>

                  <p className="mt-1 truncate text-xs text-zinc-500">
                    {song.artist || "Unknown Artist"}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}