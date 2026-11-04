
import { Music2, Search, Sparkles } from "lucide-react";

export default function EmptyState({
  title = "No music found",
  description = "Try searching for something else.",
}) {
  return (
    <div className="group relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.035] to-transparent px-6 py-12 text-center transition-all duration-500 hover:border-fuchsia-500/20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.07] blur-[80px] transition-all duration-700 group-hover:bg-fuchsia-500/[0.12]" />

      {/* Music Icon */}
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-2xl bg-fuchsia-500/20 blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/15 to-violet-500/10 text-fuchsia-400 shadow-lg shadow-fuchsia-950/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
          <Music2 size={30} strokeWidth={1.6} />

          <Sparkles
            size={14}
            className="absolute -right-1 -top-1 text-violet-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </div>

      {/* Decorative Search */}
      <div className="relative mt-6 flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-xs text-zinc-500 transition-colors group-hover:border-white/10 group-hover:text-zinc-400">
        <Search size={13} />
        <span>Discover something new</span>
      </div>
    </div>
  );
}
