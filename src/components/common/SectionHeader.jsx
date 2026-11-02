export default function SectionHeader({
  title,
  subtitle,
  action,
  onAction,
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-zinc-500">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <button
          onClick={onAction}
          className="shrink-0 text-sm font-medium text-fuchsia-400 transition hover:text-fuchsia-300"
        >
          {action}
        </button>
      )}
    </div>
  );
}