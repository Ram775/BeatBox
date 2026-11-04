import { Plus, Music, ListMusic, ArrowUpRight } from "lucide-react";
import SectionHeader from "../common/SectionHeader";

export default function PlaylistSection({
  playlists = [],
  onSelect,
  onCreate,
}) {
  return (
    <section className="mb-8">
      <SectionHeader
        title="Your playlists"
        subtitle="Collections made by you"
        action="Create playlist"
        onAction={onCreate}
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {playlists.map((playlist, index) => (
          <button
            key={playlist.id}
            type="button"
            onClick={() => onSelect?.(playlist)}
            className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#15151b] p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-500/30 hover:bg-[#1b1722] hover:shadow-xl hover:shadow-fuchsia-950/20 sm:p-4"
          >
            {/* Artwork */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-purple-600/40 via-fuchsia-500/20 to-zinc-900">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  index % 4 === 0
                    ? "from-fuchsia-500/30 to-purple-900/60"
                    : index % 4 === 1
                    ? "from-indigo-500/30 to-purple-900/60"
                    : index % 4 === 2
                    ? "from-pink-500/30 to-rose-900/60"
                    : "from-violet-500/30 to-blue-900/60"
                }`}
              />

              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-white/10" />
              <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-white/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.14] sm:h-20 sm:w-20">
                  <Music
                    size={36}
                    strokeWidth={1.5}
                    className="text-fuchsia-200 transition-colors group-hover:text-white"
                  />
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-fuchsia-500 text-white opacity-0 shadow-lg shadow-fuchsia-500/30 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight size={19} />
              </div>
            </div>

            {/* Playlist Info */}
            <div className="mt-3 min-w-0">
              <h3 className="truncate text-sm font-semibold text-white transition-colors group-hover:text-fuchsia-300">
                {playlist.name}
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                {playlist.songs?.length || 0} songs
              </p>
            </div>
          </button>
        ))}

        {/* Create Playlist Card */}
        <button
          type="button"
          onClick={onCreate}
          className="group flex aspect-square min-w-0 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 bg-white/[0.015] text-zinc-500 transition-all duration-300 hover:border-fuchsia-500/40 hover:bg-fuchsia-500/[0.04] hover:text-fuchsia-300"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] transition-all duration-300 group-hover:scale-110 group-hover:bg-fuchsia-500/10">
            <Plus
              size={30}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          </div>

          <span className="text-sm font-semibold">Create new</span>
          <span className="text-xs text-zinc-600 transition-colors group-hover:text-fuchsia-400/70">
            Make it yours
          </span>
        </button>
      </div>
    </section>
  );
}