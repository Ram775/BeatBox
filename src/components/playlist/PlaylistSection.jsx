import { Plus, Music } from "lucide-react";
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

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {playlists.map((playlist) => (
          <button
            key={playlist.id}
            onClick={() => onSelect?.(playlist)}
            className="group rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-left transition hover:border-fuchsia-500/30 hover:bg-white/[0.06]"
          >
            <div className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/40 to-fuchsia-500/20">
              <Music
                size={36}
                className="text-fuchsia-300 transition group-hover:scale-110"
              />
            </div>

            <h3 className="mt-3 truncate font-semibold text-white">
              {playlist.name}
            </h3>

            <p className="mt-1 text-xs text-zinc-500">
              {playlist.songs?.length || 0} songs
            </p>
          </button>
        ))}

        <button
          onClick={onCreate}
          className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 text-zinc-500 transition hover:border-fuchsia-500/40 hover:text-fuchsia-400"
        >
          <Plus size={30} />
          <span className="text-sm font-medium">Create new</span>
        </button>
      </div>
    </section>
  );
}