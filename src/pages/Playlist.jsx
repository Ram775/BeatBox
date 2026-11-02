import { ListMusic } from "lucide-react";
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
    <main className="px-5 py-6 md:px-8 md:py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <ListMusic size={28} className="text-fuchsia-400" />

          <h1 className="text-3xl font-black text-white">
            {playlist?.name || "Playlist"}
          </h1>
        </div>

        <p className="mt-2 text-zinc-500">
          {songs.length} {songs.length === 1 ? "song" : "songs"}
        </p>
      </div>

      {songs.length === 0 ? (
        <EmptyState
          title="This playlist is empty"
          description="Add songs to start building your playlist."
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