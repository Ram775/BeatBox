
import { ArrowRight } from "lucide-react";

export default function SectionHeader({
  title,
  subtitle,
  action,
  onAction,
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">

      {/* Heading */}
      <div className="min-w-0">
        <div className="mb-2 h-[3px] w-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500" />

        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-[26px]">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
            {subtitle}
          </p>
        )}
      </div>

      {/* Action */}
      {action && (
        <button
          onClick={onAction}
          className="group mb-0.5 flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-zinc-400 transition-all duration-300 hover:border-fuchsia-500/30 hover:bg-fuchsia-500/10 hover:text-fuchsia-400 sm:text-sm"
        >
          {action}

          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      )}
    </div>
  );
}
