import TrackRow from "../music/TrackRow";

export function TrackList({
  songs = [],
  current,
  playing,
  onPlay,
  onLike,
  isLiked,
  onMore,
}) {
  if (!songs.length) return null;

  return (
    <div className="flex flex-col gap-1">
      {songs.map((song, index) => (
        <TrackRow
          key={song.id}
          song={song}
          index={index}
          current={current}
          playing={playing}
          onPlay={onPlay}
          onLike={onLike}
          isLiked={isLiked}
          onMore={onMore}
        />
      ))}
    </div>
  );
}