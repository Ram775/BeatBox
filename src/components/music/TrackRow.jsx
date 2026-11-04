import {
  Play,
  Pause,
  Heart,
  MoreHorizontal,
  Music2,
} from "lucide-react";

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
  const liked = isLiked?.(song) ?? false;

  return (
    <div
      className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 sm:px-4 ${
        active
          ? "bg-fuchsia-500/[0.08] hover:bg-fuchsia-500/[0.12]"
          : "hover:bg-white/[0.04]"
      }`}
    >
      {/* Track Number / Play */}
      <button
        type="button"
        onClick={() => onPlay?.(song)}
        aria-label={active && playing ? "Pause song" : "Play song"}
        className="flex h-9 w-7 shrink-0 items-center justify-center text-zinc-500 transition-colors hover:text-fuchsia-400"
      >
        {active && playing ? (
          <span className="flex h-4 items-end gap-[3px]">
            <span className="h-2 w-[3px] animate-[musicWave_0.7s_ease-in-out_infinite] rounded-full bg-fuchsia-400" />
            <span className="h-4 w-[3px] animate-[musicWave_0.9s_ease-in-out_infinite] rounded-full bg-fuchsia-400" />
            <span className="h-2.5 w-[3px] animate-[musicWave_0.6s_ease-in-out_infinite] rounded-full bg-fuchsia-400" />
          </span>
        ) : (
          <>
            <span
              className={`text-xs tabular-nums group-hover:hidden ${
                active ? "text-fuchsia-400" : ""
              }`}
            >
              {active ? (
                <Play size={17} fill="currentColor" />
              ) : (
                index + 1
              )}
            </span>

            <Play
              size={17}
              fill="currentColor"
              className="hidden text-white group-hover:block"
            />
          </>
        )}
      </button>

      {/* Artwork */}
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-zinc-800 sm:h-12 sm:w-12">
        {song.image ? (
          <img
            src={song.image}
            alt={song.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Music2 size={18} className="text-zinc-500" />
          </div>
        )}

        {active && playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Pause size={18} fill="white" className="text-white" />
          </div>
        )}
      </div>

      {/* Song Details */}
      <button
        type="button"
        onClick={() => onPlay?.(song)}
        className="min-w-0 flex-1 text-left"
      >
        <p
          className={`truncate text-sm font-medium transition-colors ${
            active
              ? "text-fuchsia-400"
              : "text-white group-hover:text-fuchsia-200"
          }`}
        >
          {song.title}
        </p>

        <p className="mt-0.5 truncate text-xs text-zinc-500 transition-colors group-hover:text-zinc-400">
          {song.artist || "Unknown Artist"}
        </p>
      </button>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
        <button
          type="button"
          onClick={() => onLike?.(song)}
          aria-label={liked ? "Unlike song" : "Like song"}
          className={`flex h-9 w-9 items-center justify-center rounded-full transition-all hover:bg-white/[0.06] active:scale-90 ${
            liked
              ? "text-fuchsia-500"
              : "text-zinc-500 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
          }`}
        >
          <Heart
            size={17}
            className={liked ? "fill-fuchsia-500" : ""}
          />
        </button>

        <button
          type="button"
          onClick={() => onMore?.(song)}
          aria-label="More options"
          className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-all hover:bg-white/[0.06] hover:text-white active:scale-90 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <MoreHorizontal size={19} />
        </button>
      </div>
    </div>
  );
}