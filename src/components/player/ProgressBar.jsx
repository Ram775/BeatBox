export default function ProgressBar({
  progress = 0,
  duration = 0,
  onSeek,
}) {
  const formatTime = (time) => {
    if (!Number.isFinite(time) || time < 0) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  const max = duration > 0 ? duration : 100;
  const value = Math.min(Math.max(progress, 0), max);
  const percentage = (value / max) * 100;

  return (
    <div className="flex w-full items-center gap-2.5 sm:gap-3">
      {/* Current Time */}
      <span className="w-9 shrink-0 text-right text-[10px] font-medium tabular-nums text-zinc-500 sm:w-10 sm:text-xs">
        {formatTime(progress)}
      </span>

      {/* Custom Progress Slider */}
      <div className="group relative flex flex-1 items-center">
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10 transition-all duration-200 group-hover:h-2">
          {/* Progress */}
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-fuchsia-400 transition-[width] duration-100"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Slider Input */}
        <input
          type="range"
          min="0"
          max={max}
          step="1"
          value={value}
          onChange={(e) => onSeek?.(Number(e.target.value))}
          aria-label="Seek song"
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          style={{ touchAction: "pan-y" }}
        />

        {/* Thumb */}
        <span
          className="pointer-events-none absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-fuchsia-500 opacity-0 shadow-[0_0_10px_rgba(217,70,239,0.7)] transition-opacity group-hover:opacity-100"
          style={{ left: `${percentage}%` }}
        />
      </div>

      {/* Duration */}
      <span className="w-9 shrink-0 text-[10px] font-medium tabular-nums text-zinc-500 sm:w-10 sm:text-xs">
        {formatTime(duration)}
      </span>
    </div>
  );
}