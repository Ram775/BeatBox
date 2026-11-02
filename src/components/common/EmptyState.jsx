import { Music2 } from "lucide-react";

export default function EmptyState({
  title = "No music found",
  description = "Try searching for something else.",
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 px-6 py-12 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-400">
        <Music2 size={26} />
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>

      <p className="mt-2 max-w-sm text-sm text-zinc-500">
        {description}
      </p>
    </div>
  );
}