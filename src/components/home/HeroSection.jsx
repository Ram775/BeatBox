import { Play, Sparkles } from "lucide-react";

export default function HeroSection({ onPlay }) {
  return (
    <section className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#32104f] via-[#190d2d] to-[#0d0d16] p-6 sm:p-10">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative z-10 max-w-xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 px-3 py-1.5 text-xs font-semibold text-fuchsia-300">
          <Sparkles size={14} />
          YOUR MUSIC. YOUR MOOD.
        </div>

        <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          Feel every
          <span className="block bg-gradient-to-r from-fuchsia-400 to-purple-300 bg-clip-text text-transparent">
            beat.
          </span>
        </h1>

        <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
          Discover the music you love. Explore trending hits, find your vibe,
          and make every moment sound better.
        </p>

        <button
          onClick={onPlay}
          className="mt-7 inline-flex items-center gap-3 rounded-full bg-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-105 hover:bg-fuchsia-400"
        >
          <Play size={18} fill="currentColor" />
          Start listening
        </button>
      </div>

      <div className="pointer-events-none absolute -bottom-10 -right-10 hidden h-64 w-64 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:flex">
        <div className="flex h-48 w-48 items-center justify-center rounded-full border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/10">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-[#100b1a]">
            <div className="h-5 w-5 rounded-full bg-fuchsia-400 shadow-[0_0_30px_10px_rgba(232,121,249,0.25)]" />
          </div>
        </div>
      </div>
    </section>
  );
}