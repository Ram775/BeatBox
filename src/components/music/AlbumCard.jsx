import { Play } from "lucide-react";

export default function AlbumCard({ album, onPlay }) {
  return (
    <button
      onClick={() => onPlay?.(album)}
      className="group w-full min-w-0 text-left"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5">
        <img
          src={album.image}
          alt={album.title}
          className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-500 text-white shadow-lg">
            <Play size={20} fill="currentColor" />
          </span>
        </div>
      </div>

      <h3 className="mt-3 truncate text-sm font-semibold text-white">
        {album.title}
      </h3>

      <p className="mt-1 truncate text-xs text-zinc-500">
        {album.artist || "Svara Collection"}
      </p>
    </button>
  );
}