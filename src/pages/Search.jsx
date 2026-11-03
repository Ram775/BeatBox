import {
  Search,
  Music2,
  Sparkles,
  Disc3,
  Headphones,
} from "lucide-react";

import { TrackList } from "../components/music/TrackList";
import EmptyState from "../components/common/EmptyState";

export default function SearchPage({
  query,
  songs = [],
  current,
  playing,
  onPlay,
  onLike,
  isLiked,
  onMore,
}) {
  const hasQuery = Boolean(query?.trim());

  return (
    <main className="relative min-h-full overflow-hidden px-4 py-6 sm:px-6 md:px-8 md:py-8">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 top-96 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Search Hero */}
        <section className="relative mb-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#25132f] via-[#17121f] to-[#101014] p-5 sm:p-8 md:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-[90px]" />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/20 to-purple-600/20 shadow-lg shadow-fuchsia-900/10">
              <Search size={30} className="text-fuchsia-300" />
            </div>

            <div className="min-w-0 flex-1">
              <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
                <Sparkles size={13} />
                Discover Music
              </span>

              <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Search
              </h1>

              <p className="mt-2 break-words text-sm text-zinc-400 sm:text-base">
                {hasQuery ? (
                  <>
                    Results for{" "}
                    <span className="font-semibold text-fuchsia-300">
                      “{query}”
                    </span>
                  </>
                ) : (
                  "Find songs, artists, albums and your favorite vibes."
                )}
              </p>
            </div>

            {songs.length > 0 && (
              <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3 backdrop-blur-xl">
                <Music2 size={20} className="text-fuchsia-400" />

                <div>
                  <p className="text-xl font-bold text-white">
                    {songs.length}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {songs.length === 1 ? "Result" : "Results"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Results */}
        {songs.length === 0 ? (
          <section className="rounded-3xl border border-white/[0.08] bg-white/[0.02] px-4 py-10 sm:px-8">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10">
              {hasQuery ? (
                <Disc3 size={30} className="text-fuchsia-400" />
              ) : (
                <Headphones size={30} className="text-fuchsia-400" />
              )}
            </div>

            <EmptyState
              title={hasQuery ? "No results found" : "Start searching"}
              description={
                hasQuery
                  ? "Try another song, artist, or album."
                  : "Enter a song or artist name in the search bar to discover music."
              }
            />

            {hasQuery && (
              <p className="mt-4 text-center text-xs text-zinc-600">
                Check your spelling or try a different keyword.
              </p>
            )}
          </section>
        ) : (
          <section>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Search Results
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Discover your next favorite track
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
          </section>
        )}
      </div>
    </main>
  );
}