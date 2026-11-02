import { Heart } from "lucide-react";
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
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#101016]/95 px-4 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <img
            src={current.image}
            alt={current.title}
            className="h-12 w-12 rounded-xl object-cover"
          />

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              {current.title}
            </p>
            <p className="truncate text-xs text-zinc-500">
              {current.artist}
            </p>
          </div>

          <button
            onClick={onLike}
            aria-label="Like song"
            className="ml-1 text-zinc-400 hover:text-fuchsia-400"
          >
            <Heart
              size={18}
              className={liked ? "fill-fuchsia-500 text-fuchsia-500" : ""}
            />
          </button>
        </div>

        <div className="flex w-full max-w-md flex-col items-center gap-2">
          <PlayerControls
            playing={playing}
            onPlayPause={onPlayPause}
            onPrevious={onPrevious}
            onNext={onNext}
          />

          <ProgressBar
            progress={progress}
            duration={duration}
            onSeek={onSeek}
          />
        </div>

        <div className="hidden flex-1 justify-end md:flex">
          <VolumeControl
            volume={volume}
            onChange={onVolumeChange}
          />
        </div>
      </div>
    </footer>
  );
}