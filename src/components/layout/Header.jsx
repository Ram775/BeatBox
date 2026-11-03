
import { Search, Bell, UserRound, X, AudioLines } from "lucide-react";

export default function Header({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#0b0b10]/85 px-4 py-3.5 backdrop-blur-2xl sm:px-6 lg:px-8">

      <div className="flex items-center justify-between gap-4">

        {/* Search */}
        <form
          onSubmit={handleSubmit}
          className="group relative flex w-full max-w-2xl items-center"
        >
          {/* Focus Glow */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-fuchsia-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 blur-sm transition duration-500 group-focus-within:from-fuchsia-500/30 group-focus-within:via-purple-500/20 group-focus-within:to-fuchsia-500/30 group-focus-within:opacity-100" />

          <div className="relative flex w-full items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#15141c] px-4 py-3 transition-all duration-300 group-focus-within:border-fuchsia-500/30 group-focus-within:bg-[#19151f]">

            <Search
              size={19}
              className="shrink-0 text-zinc-500 transition-colors group-focus-within:text-fuchsia-400"
            />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search songs, artists, albums..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="rounded-full p-1 text-zinc-500 transition hover:bg-white/10 hover:text-white"
              >
                <X size={15} />
              </button>
            )}

            <span className="hidden items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10px] font-medium text-zinc-500 sm:flex">
              <span className="text-xs">↵</span>
              Search
            </span>

          </div>
        </form>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-zinc-400 transition-all hover:border-white/[0.06] hover:bg-white/[0.04] hover:text-white"
          >
            <Bell size={19} />

            <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-fuchsia-500 ring-2 ring-[#0b0b10]" />
          </button>

          {/* Profile */}
          <button
            type="button"
            aria-label="Profile"
            className="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-violet-600 p-[1px] shadow-lg shadow-fuchsia-500/10 transition-all duration-300 hover:scale-105 hover:shadow-fuchsia-500/25"
          >
            <span className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#17121f] text-fuchsia-300 transition-colors group-hover:bg-transparent group-hover:text-white">
              <UserRound size={19} />
            </span>
          </button>

        </div>
      </div>
    </header>
  );
}
