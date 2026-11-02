import { Play, Pause, Heart, MoreHorizontal } from "lucide-react";

export default function TrackRow({
  song,
  index,
  current,
  playing,
  onPlay,
  onLike,
  isLiked,
  onMore,
}) {
  const active = current?.id === song.id;

  return (
    <div className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white/[0.05]">
      <button
        onClick={() => onPlay(song)}
        className="flex w-8 shrink-0 justify-center text-sm text-zinc-500"
      >
        {active && playing ? (
          <Pause size={17} className="text-fuchsia-400" />
        ) : active ? (
          <Play size={17} className="text-fuchsia-400" />
        ) : (
          <span className="group-hover:hidden">{index + 1}</span>
        )}

        {!active && (
          <Play size={17} className="hidden text-white group-hover:block" />
        )}
      </button>

      <img
        src={song.image}
        alt={song.title}
        className="h-11 w-11 rounded-lg object-cover"
      />

      <button
        onClick={() => onPlay(song)}
        className="min-w-0 flex-1 text-left"
      >
        <p className={`truncate text-sm font-medium ${active ? "text-fuchsia-400" : "text-white"}`}>
          {song.title}
        </p>
        <p className="truncate text-xs text-zinc-500">{song.artist}</p>
      </button>

      <button
        onClick={() => onLike(song)}
        aria-label="Like song"
        className="p-2 text-zinc-500 hover:text-fuchsia-400"
      >
        <Heart
          size={17}
          className={isLiked(song) ? "fill-fuchsia-500 text-fuchsia-500" : ""}
        />
      </button>

      <button
        onClick={() => onMore?.(song)}
        aria-label="More options"
        className="p-2 text-zinc-500 hover:text-white"
      >
        <MoreHorizontal size={18} />
      </button>
    </div>
  );
}