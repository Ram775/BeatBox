import { Heart, Music2 } from "lucide-react";
import PlayerControls from "../player/PlayerControls";
import ProgressBar from "../player/ProgressBar";
import VolumeControl from "../player/VolumeControl";

export default function MusicPlayer({
  current,
  playing,
  progress,
  duration,
  onPlayPause,
  onPrevious,
  onNext,
  onSeek,
  liked,
  onLike,
  volume,
  onVolumeChange,
}) {
  if (!current) return null;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-2 pb-2 sm:px-4 sm:pb-3">
      <div className="mx-auto max-w-[1600px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111116]/95 shadow-[0_-10px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        {/* Desktop / Main Player */}
        <div className="grid grid-cols-1 items-center gap-3 px-3 py-3 sm:px-5 md:grid-cols-[1fr_1.5fr_1fr] md:gap-6">
          {/* Track Info */}
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative shrink-0">
              {current.image ? (
                <img
                  src={current.image}
                  alt={current.title}
                  className="h-12 w-12 rounded-xl object-cover shadow-lg sm:h-14 sm:w-14"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-purple-700/30 sm:h-14 sm:w-14">
                  <Music2 className="text-fuchsia-300" />
                </div>
              )}

              {playing && (
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#111116] bg-fuchsia-500">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white transition-colors hover:text-fuchsia-300">
                {current.title}
              </p>

              <p className="mt-0.5 truncate text-xs text-zinc-500">
                {current.artist || "Unknown Artist"}
              </p>
            </div>

            <button
              type="button"
              onClick={onLike}
              aria-label={liked ? "Unlike song" : "Like song"}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-zinc-400 transition-all hover:bg-white/5 hover:text-fuchsia-400 active:scale-90"
            >
              <Heart
                size={19}
                className={`transition-all ${
                  liked
                    ? "fill-fuchsia-500 text-fuchsia-500 scale-110"
                    : ""
                }`}
              />
            </button>
          </div>

          {/* Player Controls & Progress */}
          <div className="flex w-full min-w-0 flex-col items-center gap-2">
            <PlayerControls
              playing={playing}
              onPlayPause={onPlayPause}
              onPrevious={onPrevious}
              onNext={onNext}
            />

            <div className="w-full">
              <ProgressBar
                progress={progress}
                duration={duration}
                onSeek={onSeek}
              />
            </div>
          </div>

          {/* Volume */}
          <div className="hidden min-w-0 items-center justify-end md:flex">
            <VolumeControl
              volume={volume}
              onChange={onVolumeChange}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}