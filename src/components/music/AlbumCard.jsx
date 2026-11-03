import { Play, Disc3 } from "lucide-react";

export default function AlbumCard({ album, onPlay }) {
  return (
    <button
      type="button"
      onClick={() => onPlay?.(album)}
      aria-label={`Play album ${album.title}`}
      className="group w-full min-w-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] rounded-2xl"
    >
      {/* Album Artwork */}
      <div className="relative isolate aspect-square overflow-hidden rounded-2xl bg-zinc-900 shadow-lg shadow-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-fuchsia-950/20">
        {album.image ? (
          <img
            src={album.image}
            alt={album.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-fuchsia-600/30 via-purple-900/40 to-zinc-950">
            <Disc3 size={56} className="text-white/40" />
          </div>
        )}

        {/* Image Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-fuchsia-500 text-white opacity-0 shadow-[0_0_30px_rgba(217,70,239,0.45)] transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
            <Play size={20} fill="currentColor" className="ml-0.5" />
          </span>
        </div>

        {/* Album Badge */}
        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-md">
          Album
        </span>
      </div>

      {/* Album Details */}
      <div className="mt-3 space-y-1 px-0.5">
        <h3 className="truncate text-sm font-semibold text-white transition-colors group-hover:text-fuchsia-300">
          {album.title}
        </h3>

        <p className="truncate text-xs text-zinc-500 transition-colors group-hover:text-zinc-400">
          {album.artist || "Svara Collection"}
        </p>
      </div>
    </button>
  );
}