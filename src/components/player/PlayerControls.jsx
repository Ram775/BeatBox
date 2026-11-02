import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

export default function PlayerControls({
  playing,
  onPlayPause,
  onPrevious,
  onNext,
}) {
  return (
    <div className="flex items-center justify-center gap-5">
      <button
        onClick={onPrevious}
        aria-label="Previous song"
        className="text-zinc-400 transition hover:text-white"
      >
        <SkipBack size={20} fill="currentColor" />
      </button>

      <button
        onClick={onPlayPause}
        aria-label={playing ? "Pause" : "Play"}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
      >
        {playing ? (
          <Pause size={21} fill="currentColor" />
        ) : (
          <Play size={21} fill="currentColor" />
        )}
      </button>

      <button
        onClick={onNext}
        aria-label="Next song"
        className="text-zinc-400 transition hover:text-white"
      >
        <SkipForward size={20} fill="currentColor" />
      </button>
    </div>
  );
}