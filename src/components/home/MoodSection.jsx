import MoodCard from "./MoodCard";
import SectionHeader from "../common/SectionHeader";

const moods = [
  {
    mood: "Chill",
    description: "Relax and unwind",
    gradient: "from-cyan-500/80 to-blue-700",
  },
  {
    mood: "Energetic",
    description: "Feel the power",
    gradient: "from-orange-500/80 to-red-700",
  },
  {
    mood: "Romantic",
    description: "Love is in the air",
    gradient: "from-pink-500/80 to-rose-700",
  },
  {
    mood: "Focus",
    description: "Get in the zone",
    gradient: "from-violet-500/80 to-indigo-700",
  },
];

export default function MoodSection({ onMoodSelect }) {
  return (
    <section className="mb-10">
      <SectionHeader
        title="What's your mood?"
        subtitle="Find the perfect soundtrack for your moment"
      />

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {moods.map((item) => (
          <MoodCard
            key={item.mood}
            {...item}
            onClick={() => onMoodSelect?.(item.mood)}
          />
        ))}
      </div>
    </section>
  );
}