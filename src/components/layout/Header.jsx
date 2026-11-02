import { Search, Bell, UserRound } from "lucide-react";

export default function Header({ query, setQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-[#09090f]/80 px-5 py-4 backdrop-blur-xl md:px-8">
      <div className="flex items-center justify-between gap-4">
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 focus-within:border-fuchsia-500/50"
        >
          <Search size={19} className="shrink-0 text-zinc-500" />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Songs, artists, albums..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />

          <span className="hidden rounded-md border border-white/10 px-2 py-1 text-xs text-zinc-500 sm:block">
            Enter
          </span>
        </form>

        <div className="flex shrink-0 items-center gap-2">
          <button
            aria-label="Notifications"
            className="rounded-xl p-3 text-zinc-400 transition hover:bg-white/5 hover:text-white"
          >
            <Bell size={19} />
          </button>

          <button
            aria-label="Profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600"
          >
            <UserRound size={19} />
          </button>
        </div>
      </div>
    </header>
  );
}