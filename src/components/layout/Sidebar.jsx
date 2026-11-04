
import {
  Home,
  Compass,
  Heart,
  ListMusic,
  Plus,
  Music2,
  X,
  Headphones,
  ChevronRight,
  AudioLines,
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
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-white/[0.06] bg-[#0d0c13] transition-transform duration-300 ease-out lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute left-0 top-0 h-64 w-full bg-gradient-to-b from-fuchsia-500/[0.06] to-transparent" />

        {/* Brand */}
        <div className="relative flex items-center justify-between px-5 pb-8 pt-6">

          <button
            type="button"
            onClick={() => setTab("Home")}
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-[14px] bg-gradient-to-br from-fuchsia-500 via-purple-500 to-violet-600 shadow-lg shadow-fuchsia-500/20 transition-transform duration-300 group-hover:scale-105">
              <AudioLines size={23} className="text-white" />

              <div className="absolute inset-0 rounded-[14px] bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="text-left">
              <span className="block text-[23px] font-black tracking-tight text-white">
                BeatBox<span className="text-fuchsia-400">.</span>
              </span>

              <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-zinc-600">
                Music for your soul
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/5 hover:text-white lg:hidden"
          >
            <X size={19} />
          </button>
        </div>

        {/* Navigation */}
        <div className="relative px-4">

          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            Discover
          </p>

          <nav className="flex flex-col gap-1">

            {navItems.map(({ label, icon: Icon }) => {
              const active = tab === label;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setTab(label)}
                  className={`group relative flex items-center gap-3.5 overflow-hidden rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-r from-fuchsia-500/[0.14] to-purple-500/[0.04] text-fuchsia-400"
                      : "text-zinc-500 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {/* Active Indicator */}
                  {active && (
                    <span className="absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-fuchsia-500 shadow-[0_0_12px_rgba(217,70,239,0.6)]" />
                  )}

                  <Icon
                    size={19}
                    strokeWidth={active ? 2.2 : 1.8}
                    className={`transition-transform duration-200 ${
                      active
                        ? "text-fuchsia-400"
                        : "group-hover:scale-110"
                    }`}
                  />

                  <span>{label}</span>

                  {label === "Liked Songs" && likedCount > 0 && (
                    <span
                      className={`ml-auto rounded-md px-2 py-0.5 text-[10px] font-bold ${
                        active
                          ? "bg-fuchsia-500/15 text-fuchsia-400"
                          : "bg-white/[0.04] text-zinc-500"
                      }`}
                    >
                      {likedCount}
                    </span>
                  )}

                  {active && (
                    <ChevronRight
                      size={15}
                      className="ml-auto text-fuchsia-400/60"
                    />
                  )}
                </button>
              );
            })}

          </nav>
        </div>

        {/* Library */}
        <div className="relative mt-8 flex min-h-0 flex-1 flex-col px-4">

          <div className="mb-3 flex items-center justify-between px-3">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Your Library
            </p>

            <button
              type="button"
              onClick={onCreate}
              title="Create playlist"
              aria-label="Create playlist"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-zinc-500 transition-all hover:border-fuchsia-500/20 hover:bg-fuchsia-500/10 hover:text-fuchsia-400 active:scale-95"
            >
              <Plus size={16} />
            </button>

          </div>

          {/* Playlist List */}
          <div className="flex flex-col gap-1 overflow-y-auto pr-1 [scrollbar-width:thin] [scrollbar-color:#27212e_transparent]">

            {playlists.length > 0 ? (
              playlists.map((playlist) => (
                <button
                  key={playlist.id}
                  type="button"
                  onClick={() => setTab("Playlist")}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200 hover:bg-white/[0.04]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.04] bg-gradient-to-br from-white/[0.06] to-white/[0.02] text-zinc-500 transition-all group-hover:border-fuchsia-500/20 group-hover:text-fuchsia-400">
                    <ListMusic size={17} />
                  </div>

                  <span className="min-w-0 flex-1 truncate text-[13px] font-medium text-zinc-500 transition-colors group-hover:text-white">
                    {playlist.name}
                  </span>

                  <ChevronRight
                    size={14}
                    className="text-zinc-700 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </button>
              ))
            ) : (
              <button
                type="button"
                onClick={onCreate}
                className="group rounded-xl border border-dashed border-white/[0.07] px-3 py-4 text-left transition hover:border-fuchsia-500/20 hover:bg-fuchsia-500/[0.03]"
              >
                <div className="flex items-center gap-2 text-xs text-zinc-600 transition group-hover:text-fuchsia-400">
                  <Plus size={15} />
                  Create your first playlist
                </div>
              </button>
            )}

          </div>

        </div>

        {/* Bottom Promo */}
        <div className="relative mx-4 mb-5 mt-4">

          <div className="group relative overflow-hidden rounded-2xl border border-fuchsia-500/[0.12] bg-gradient-to-br from-[#25132f] via-[#17101f] to-[#110e16] p-4">

            {/* Glow */}
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-500/15 blur-2xl transition-all group-hover:bg-fuchsia-500/25" />

            <div className="relative">

              <div className="mb-3 flex items-center justify-between">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-fuchsia-500/10 text-fuchsia-400">
                  <Headphones size={17} />
                </div>

                <span className="rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-fuchsia-400">
                  Made for you
                </span>

              </div>

              <p className="text-sm font-bold text-white">
                Your music universe
              </p>

              <p className="mt-1 text-[11px] leading-5 text-zinc-500">
                Discover new sounds. Find your vibe. Feel every beat.
              </p>

              {/* Decorative Equalizer */}
              <div className="mt-3 flex h-5 items-end gap-1">
                {[8, 15, 10, 18, 7, 14, 20, 9, 15].map((height, index) => (
                  <span
                    key={index}
                    className="w-1 rounded-full bg-gradient-to-t from-violet-500 to-fuchsia-400 opacity-70"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </aside>
    </>
  );
}
