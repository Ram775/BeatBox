
export default function Loading({ text = "Loading music..." }) {
  return (
    <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-6 overflow-hidden py-12">

      {/* Ambient Glow */}
      <div className="absolute h-32 w-32 rounded-full bg-fuchsia-500/10 blur-[60px]" />

      {/* Music Equalizer */}
      <div className="relative flex h-14 items-center justify-center gap-[5px]">

        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((bar) => (
          <span
            key={bar}
            className="w-[4px] animate-[musicWave_1s_ease-in-out_infinite] rounded-full bg-gradient-to-t from-violet-600 via-fuchsia-500 to-pink-400 shadow-[0_0_12px_rgba(217,70,239,0.35)]"
            style={{
              height: `${16 + Math.sin(bar * 0.8) * 28}px`,
              animationDelay: `${bar * 100}ms`,
            }}
          />
        ))}

      </div>

      {/* Loading Text */}
      <div className="relative flex flex-col items-center gap-2">
        <p className="text-sm font-medium tracking-wide text-zinc-300">
          {text}
        </p>

        <div className="flex items-center gap-1.5">
          <span className="h-1 w-1 animate-pulse rounded-full bg-fuchsia-500" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-fuchsia-500 [animation-delay:200ms]" />
          <span className="h-1 w-1 animate-pulse rounded-full bg-fuchsia-500 [animation-delay:400ms]" />
        </div>
      </div>
    </div>
  );
}
