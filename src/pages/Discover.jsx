import { Compass } from "lucide-react";
import EmptyState from "../components/common/EmptyState";

export default function Discover({ songs = [], onPlay }) {
  return (
    <main className="px-5 py-6 md:px-8 md:py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Compass className="text-fuchsia-400" size={28} />

          <h1 className="text-3xl font-black text-white">
            Discover
          </h1>
        </div>

        <p className="mt-2 text-zinc-500">
          Explore music and discover your next favorite song.
        </p>
      </div>

      {songs.length === 0 ? (
        <EmptyState
          title="Nothing to discover yet"
          description="Music recommendations will appear here."
        />
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => onPlay?.(song)}
              className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] text-left transition hover:bg-white/[0.07]"
            >
              <img
                src={song.image}
                alt={song.title}
                className="aspect-square w-full object-cover"
              />

              <div className="p-3">
                <p className="truncate font-semibold text-white">
                  {song.title}
                </p>

                <p className="mt-1 truncate text-sm text-zinc-500">
                  {song.artist}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </main>
  );
}