export default function ProgressBar({
  progress = 0,
  duration = 0,
  onSeek,
}) {
  const formatTime = (time) => {
    if (!Number.isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex w-full items-center gap-3">
      <span className="w-10 text-right text-xs text-zinc-500">
        {formatTime(progress)}
      </span>

      <input
        type="range"
        min="0"
        max={duration || 100}
        value={Math.min(progress, duration || 100)}
        onChange={(e) => onSeek?.(Number(e.target.value))}
        className="h-1 w-full cursor-pointer accent-fuchsia-500"
      />

      <span className="w-10 text-xs text-zinc-500">
        {formatTime(duration)}
      </span>
    </div>
  );
}