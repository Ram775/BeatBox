import { Heart } from "lucide-react";
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
    <main className="px-5 py-6 md:px-8 md:py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Heart size={28} className="fill-fuchsia-500 text-fuchsia-500" />

          <h1 className="text-3xl font-black text-white">
            Liked Songs
          </h1>
        </div>

        <p className="mt-2 text-zinc-500">
          Your personal collection of favorites.
        </p>
      </div>

      {songs.length === 0 ? (
        <EmptyState
          title="No liked songs yet"
          description="Tap the heart on a song to save it here."
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