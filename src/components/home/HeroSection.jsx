
import { Play, Sparkles, Headphones, AudioLines } from "lucide-react";

export default function HeroSection({ onPlay }) {
  return (
    <section className="group relative mb-10 min-h-[340px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#100d18]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#30113f] via-[#171020] to-[#0b0b10]" />

      {/* Ambient Lights */}
      <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[100px] transition-all duration-1000 group-hover:bg-fuchsia-600/30" />

      <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-violet-600/15 blur-[100px]" />

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[340px] items-center px-6 py-10 sm:px-10 lg:px-14">

        <div className="max-w-xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-500/[0.08] px-3.5 py-2 text-[10px] font-bold tracking-[0.18em] text-fuchsia-300 sm:text-xs">
            <Sparkles size={14} />
            YOUR MUSIC. YOUR MOOD.
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Feel every
            <span className="mt-1 block bg-gradient-to-r from-fuchsia-400 via-pink-300 to-violet-400 bg-clip-text text-transparent">
              beat.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
            Discover the music you love. Explore trending hits,
            find your vibe, and make every moment sound better.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4">

            <button
              onClick={onPlay}
              className="group/btn inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-fuchsia-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-fuchsia-500/40 active:scale-95"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <Play size={14} fill="currentColor" />
              </span>
              Start listening
            </button>

            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
              <Headphones size={16} className="text-fuchsia-400" />
              <span>Made for your vibe</span>
            </div>

          </div>
        </div>

        {/* Vinyl Illustration */}
        <div className="pointer-events-none absolute -right-16 top-1/2 hidden -translate-y-1/2 items-center justify-center lg:flex">

          <div className="absolute h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[70px]" />

          <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025]">

            <div className="absolute inset-5 animate-[spin_18s_linear_infinite] rounded-full border border-white/[0.06] bg-[repeating-radial-gradient(circle,#21162b_0px,#21162b_2px,#100d18_4px,#100d18_7px)] shadow-2xl shadow-black/50">

              <div className="absolute inset-10 rounded-full border border-fuchsia-400/10" />
              <div className="absolute inset-16 rounded-full border border-white/[0.06]" />
              <div className="absolute inset-24 rounded-full border border-white/[0.06]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#1c1026] bg-gradient-to-br from-fuchsia-500 to-violet-600 shadow-[0_0_40px_rgba(217,70,239,0.3)]">
                  <AudioLines size={34} className="text-white" />
                </div>
              </div>

            </div>

            {/* Floating Equalizer */}
            <div className="absolute -left-5 top-20 flex items-center gap-1 rounded-2xl border border-white/10 bg-[#17101f]/90 p-4 shadow-2xl backdrop-blur-xl">
              {[12, 22, 34, 18, 28, 14].map((height, index) => (
                <span
                  key={index}
                  className="w-1 rounded-full bg-gradient-to-t from-violet-500 to-fuchsia-400 animate-pulse"
                  style={{
                    height: `${height}px`,
                    animationDelay: `${index * 100}ms`,
                  }}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
