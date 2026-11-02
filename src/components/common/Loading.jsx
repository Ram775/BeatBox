export default function Loading({ text = "Loading music..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div className="flex items-center gap-1.5">
        {[0, 1, 2, 3, 4].map((bar) => (
          <span
            key={bar}
            className="h-8 w-1.5 animate-pulse rounded-full bg-fuchsia-500"
            style={{
              animationDelay: `${bar * 120}ms`,
              height: `${20 + bar * 5}px`,
            }}
          />
        ))}
      </div>

      <p className="text-sm text-zinc-500">{text}</p>
    </div>
  );
}