import { Search } from "lucide-react";
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
  return (
    <main className="px-5 py-6 md:px-8 md:py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Search size={28} className="text-fuchsia-400" />

          <h1 className="text-3xl font-black text-white">
            Search
          </h1>
        </div>

        <p className="mt-2 text-zinc-500">
          {query ? `Results for "${query}"` : "Search songs and artists"}
        </p>
      </div>

      {songs.length === 0 ? (
        <EmptyState
          title={query ? "No results found" : "Start searching"}
          description={
            query
              ? "Try another song, artist, or album."
              : "Enter a song or artist name in the search bar."
          }
        />
      ) : (
        <TrackList
          songs={songs}
          current={current}
          playing={playing}
          onPlay={onPlay}
          onLike={onLike}
          isLiked={isLiked}
          onMore={onMore}
        />
      )}
    </main>
  );
}