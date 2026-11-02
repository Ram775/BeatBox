import { Play } from "lucide-react";

export default function MoodCard({ mood, description, gradient, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group relative min-h-36 overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-5 text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white">{mood}</h3>
        <p className="mt-1 text-sm text-white/70">{description}</p>
      </div>

      <div className="absolute -bottom-8 -right-6 h-28 w-28 rotate-12 rounded-2xl bg-black/10 transition group-hover:rotate-6 group-hover:scale-110" />

      <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100">
        <Play size={17} fill="currentColor" />
      </span>
    </button>
  );
}