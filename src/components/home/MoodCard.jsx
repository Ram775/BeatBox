
import { Play, ArrowUpRight, Music2 } from "lucide-react";

export default function MoodCard({
  mood,
  description,
  gradient,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative min-h-[170px] w-full overflow-hidden rounded-[24px] bg-gradient-to-br ${gradient} p-5 text-left transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30 active:scale-[0.98]`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/[0.08]" />

      {/* Ambient Glow */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/20 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-white/30" />

      {/* Decorative Shapes */}
      <div className="absolute -bottom-10 -right-8 h-36 w-36 rotate-12 rounded-[28px] border border-white/20 bg-white/[0.08] shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110" />

      <div className="absolute bottom-3 right-7 h-24 w-24 rotate-[-15deg] rounded-2xl border border-white/10 bg-black/10 transition-transform duration-500 group-hover:rotate-12" />

      {/* Music Icon */}
      <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white/80 backdrop-blur-md transition-all duration-300 group-hover:rotate-12 group-hover:bg-white/20">
        <Music2 size={17} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[130px] flex-col items-start justify-between">

        <div>
          <h3 className="max-w-[75%] text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            {mood}
          </h3>

          <p className="mt-1.5 max-w-[85%] text-xs font-medium leading-relaxed text-white/75 sm:text-sm">
            {description}
          </p>
        </div>

        {/* Play Button */}
        <div className="mt-5 flex w-full items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
            Explore vibe
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-white/20">
            <Play size={16} fill="currentColor" className="ml-0.5" />
          </span>
        </div>

      </div>

      {/* Hover Arrow */}
      <ArrowUpRight
        size={18}
        className="absolute right-3 top-3 text-white/0 transition-all duration-300 group-hover:right-4 group-hover:top-4 group-hover:text-white/80"
      />
    </button>
  );
}
