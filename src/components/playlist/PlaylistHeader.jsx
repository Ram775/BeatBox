import { ListMusic, Play } from "lucide-react";

export default function PlaylistHeader({
  name,
  description,
  songCount = 0,
  onPlay,
}) {
  return (
    <section className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end">
      <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 to-purple-700 shadow-xl shadow-purple-500/20">
        <ListMusic size={56} className="text-white" />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-400">
          Playlist
        </p>

        <h1 className="text-3xl font-black text-white sm:text-5xl">
          {name || "My Playlist"}
        </h1>

        {description && (
          <p className="mt-2 text-sm text-zinc-400">{description}</p>
        )}

        <p className="mt-3 text-sm text-zinc-500">
          {songCount} {songCount === 1 ? "song" : "songs"}
        </p>

        <button
          onClick={onPlay}
          className="mt-4 flex items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-fuchsia-400"
        >
          <Play size={16} fill="currentColor" />
          Play playlist
        </button>
      </div>
    </section>
  );
}