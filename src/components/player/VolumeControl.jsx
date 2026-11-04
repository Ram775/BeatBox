import { Volume2, VolumeX } from "lucide-react";

export default function VolumeControl({ volume = 0.7, onChange }) {
  const muted = volume === 0;
  const percentage = Math.round(volume * 100);

  return (
    <div className="group flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-2 transition-colors hover:bg-white/[0.05]">
      {/* Mute / Unmute */}
      <button
        type="button"
        aria-label={muted ? "Unmute volume" : "Mute volume"}
        onClick={() => onChange?.(muted ? 0.7 : 0)}
        className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-400 transition-all hover:bg-white/[0.06] hover:text-fuchsia-400 active:scale-90"
      >
        {muted ? (
          <VolumeX size={18} />
        ) : (
          <Volume2 size={18} />
        )}
      </button>

      {/* Volume Slider */}
      <div className="relative flex w-20 items-center sm:w-24">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10 transition-all group-hover:h-2">
          <div
            className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 transition-[width] duration-150"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => onChange?.(Number(e.target.value))}
          aria-label="Volume"
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />

        <span
          className="pointer-events-none absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-fuchsia-500 opacity-0 shadow-[0_0_8px_rgba(217,70,239,0.5)] transition-opacity group-hover:opacity-100"
          style={{ left: `${percentage}%` }}
        />
      </div>

      {/* Volume Percentage */}
      <span className="w-8 text-right text-[10px] font-medium tabular-nums text-zinc-500">
        {percentage}%
      </span>
    </div>
  );
}