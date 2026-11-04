
import { useState } from "react";
import { Headphones, Music2 } from "lucide-react";

import MoodCard from "./MoodCard";
import SectionHeader from "../common/SectionHeader";

const moods = [
  {
    mood: "Chill",
    description: "Relax and unwind",
    gradient: "from-cyan-500/80 via-blue-600/80 to-blue-900",
    icon: "🌊",
  },
  {
    mood: "Energetic",
    description: "Feel the power",
    gradient: "from-orange-500/80 via-red-600/80 to-rose-900",
    icon: "⚡",
  },
  {
    mood: "Romantic",
    description: "Love is in the air",
    gradient: "from-pink-500/80 via-rose-600/80 to-red-900",
    icon: "💗",
  },
  {
    mood: "Focus",
    description: "Get in the zone",
    gradient: "from-violet-500/80 via-indigo-600/80 to-purple-900",
    icon: "🎧",
  },
];

export default function MoodSection({ onMoodSelect }) {
  const [activeMood, setActiveMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setActiveMood(mood);
    onMoodSelect?.(mood);
  };

  return (
    <section className="mb-10">

      <SectionHeader
        title="What's your mood?"
        subtitle="Find the perfect soundtrack for your moment"
      />

      {/* Mood Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {moods.map((item) => (
          <div
            key={item.mood}
            className={`relative rounded-[24px] transition-all duration-300 ${
              activeMood === item.mood
                ? "ring-2 ring-fuchsia-500 ring-offset-2 ring-offset-[#0b0b0f]"
                : ""
            }`}
          >
            <MoodCard
              {...item}
              onClick={() => handleMoodSelect(item.mood)}
            />
          </div>
        ))}

      </div>

      {/* Footer Hint */}
      <div className="mt-5 flex items-center gap-2 text-xs text-zinc-600">
        <Headphones size={14} />
        <span>Curated sounds for every feeling</span>
      </div>

    </section>
  );
}
