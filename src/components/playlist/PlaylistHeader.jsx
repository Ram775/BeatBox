import { ListMusic, Play, Music2 } from "lucide-react";

export default function PlaylistHeader({
  name,
  description,
  songCount = 0,
  onPlay,
}) {
  return (
    <section className="relative mb-8 overflow-hidden rounded-3xl border border-white/[0.06] bg-[#15121c] p-5 sm:p-8">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 left-20 h-64 w-64 rounded-full bg-purple-600/15 blur-[100px]" />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-8">
        {/* Playlist Artwork */}
        <div className="group relative h-36 w-36 shrink-0 sm:h-52 sm:w-52">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-fuchsia-500 to-purple-700 opacity-70 blur-xl transition-opacity group-hover:opacity-100" />

          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500 via-purple-700 to-indigo-950 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/10" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full border border-white/10" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl sm:h-28 sm:w-28">
              <ListMusic
                size={56}
                strokeWidth={1.5}
                className="text-white sm:h-16 sm:w-16"
              />
            </div>

            <Music2
              size={22}
              className="absolute bottom-4 right-4 text-white/50"
            />
          </div>
        </div>

        {/* Playlist Info */}
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_rgba(232,121,249,0.8)]" />

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-fuchsia-300">
              Your Playlist
            </p>
          </div>

          <h1 className="break-words text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {name || "My Playlist"}
          </h1>

          {description && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              {description}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400 sm:text-sm">
            <span className="font-semibold text-white">BeatBox</span>
            <span className="text-zinc-600">•</span>
            <span>
              {songCount} {songCount === 1 ? "song" : "songs"}
            </span>
          </div>

          {/* Play Button */}
          <button
            type="button"
            onClick={onPlay}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-[0_8px_30px_rgba(217,70,239,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(217,70,239,0.4)] active:scale-95"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
              <Play size={15} fill="currentColor" className="ml-0.5" />
            </span>

            Play playlist
          </button>
        </div>
      </div>
    </section>
  );
}