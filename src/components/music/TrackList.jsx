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
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015]">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-fuchsia-500/[0.04] blur-3xl" />

      <div className="relative flex flex-col divide-y divide-white/[0.04]">
        {songs.map((song, index) => (
          <div
            key={song.id}
            className="group transition-colors duration-200 hover:bg-white/[0.035]"
          >
            <TrackRow
              song={song}
              index={index}
              current={current}
              playing={playing}
              onPlay={onPlay}
              onLike={onLike}
              isLiked={isLiked}
              onMore={onMore}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackList;