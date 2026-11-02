import {
  Home,
  Compass,
  Heart,
  ListMusic,
  Plus,
  Music2,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home },
  { label: "Discover", icon: Compass },
  { label: "Liked Songs", icon: Heart },
];

export default function Sidebar({
  tab,
  setTab,
  likedCount = 0,
  playlists = [],
  onCreate,
  open = false,
  onClose,
}) {
  return (
    <>
      {open && (
        <button
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-white/5 bg-[#0d0d14] p-5 transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600">
              <Music2 size={22} />
            </div>

            <span className="text-2xl font-black tracking-tight">
              BeatBox
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-zinc-600">
          Menu
        </p>

        <nav className="flex flex-col gap-1">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setTab(label)}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                tab === label
                  ? "bg-fuchsia-500/10 text-fuchsia-400"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={19} />
              {label}

              {label === "Liked Songs" && likedCount > 0 && (
                <span className="ml-auto text-xs">{likedCount}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="mb-3 mt-8 flex items-center justify-between px-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">
            Your Library
          </p>

          <button
            onClick={onCreate}
            title="Create playlist"
            className="text-zinc-500 transition hover:text-fuchsia-400"
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-1 overflow-y-auto">
          {playlists.map((playlist) => (
            <button
              key={playlist.id}
              onClick={() => setTab("Playlist")}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              <ListMusic size={18} />
              <span className="truncate">{playlist.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto rounded-2xl border border-fuchsia-500/10 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/5 p-4">
          <p className="text-sm font-semibold text-white">Made for your vibe</p>
          <p className="mt-1 text-xs leading-5 text-zinc-500">
            Discover music. Feel every beat.
          </p>
        </div>
      </aside>
    </>
  );
}