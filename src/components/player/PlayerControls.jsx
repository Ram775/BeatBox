import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
} from "lucide-react";

export default function PlayerControls({
  playing,
  onPlayPause,
  onPrevious,
  onNext,
}) {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* Previous */}
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous song"
        className="group flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition-all duration-200 hover:scale-110 hover:bg-white/[0.06] hover:text-white active:scale-95"
      >
        <SkipBack
          size={20}
          fill="currentColor"
          className="transition-transform group-active:-translate-x-0.5"
        />
      </button>

      {/* Play / Pause */}
      <button
        type="button"
        onClick={onPlayPause}
        aria-label={playing ? "Pause" : "Play"}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-[0_0_25px_rgba(217,70,239,0.25)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(217,70,239,0.45)] active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />

        {playing ? (
          <Pause
            size={21}
            fill="currentColor"
            className="relative"
          />
        ) : (
          <Play
            size={21}
            fill="currentColor"
            className="relative ml-0.5"
          />
        )}
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Next song"
        className="group flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 transition-all duration-200 hover:scale-110 hover:bg-white/[0.06] hover:text-white active:scale-95"
      >
        <SkipForward
          size={20}
          fill="currentColor"
          className="transition-transform group-active:translate-x-0.5"
        />
      </button>
    </div>
  );
}