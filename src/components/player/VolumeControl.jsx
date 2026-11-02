import { Volume2, VolumeX } from "lucide-react";

export default function VolumeControl({ volume, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <button
        aria-label="Mute volume"
        onClick={() => onChange(volume === 0 ? 0.7 : 0)}
        className="text-zinc-400 transition hover:text-white"
      >
        {volume === 0 ? <VolumeX size={19} /> : <Volume2 size={19} />}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-24 cursor-pointer accent-fuchsia-500"
      />
    </div>
  );
}