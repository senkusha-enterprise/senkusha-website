import { FaUserTie, FaBoxes, FaChartLine, FaRocket, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const contentData = [
  {
    id: 1,
    title: "Not a Training. Not a Course. Not a Bootcamp.",
    subtitle:
      "Senkusha is where builders are born. We simulate the environment of a real tech company to turn learners into creators who are ready to take on top jobs or start their own ventures.",
    tooltip: " 'We bridge the gap between theory and real-world tech execution.' ",
    icon: <FaUserTie className="text-3xl text-purple-700" />,
  },
  {
    id: 2,
    title: "Our Offerings",
    points: [
      "Builder's Simulation Program - Real-world projects under mentorship.",
      "Product Development - Full-cycle product engineering for startups.",
      "AI & Non-AI Solutions - Build intelligent, scalable platforms.",
    ],
    icon: <FaBoxes className="text-3xl text-purple-700" />,
  },
  {
    id: 3,
    title: "Why Senkusha Stands Out",
    stats: [
      "3 Years of Proven Success",
      "50+ Students Onboarded",
      "100% 5-Star Ratings",
      "Partnered with DJ Sanghvi & Bhagubhai Polytechnic",
    ],
    icon: <FaChartLine className="text-3xl text-purple-700" />,
  },
  {
    id: 4,
    title: "What Makes Us Different?",
    bullets: [
      "We give real tech roles — not training videos.",
      "We simulate real companies — not bootcamps.",
      "We build working products — not assignments.",
      "Run by tech experts with 10+ years experience.",
      "Real roles: Dev, QA, UI, DevOps, PM.",
      "Full agile rituals and SDLC exposure.",
    ],
    icon: <FaRocket className="text-3xl text-purple-700" />,
  },
];

// ✅ Apply the same effect for all cards
const commonEffect = "hover:rotate-1 hover:shadow-xl hover:shadow-purple-500/50";

const ContentCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    className={`rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300
      bg-gradient-to-br from-purple-100 to-white border-2 border-purple-200 shadow-xl ${commonEffect}`}
  >
    {/* Icon + Title */}
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-purple-200 flex items-center justify-center rounded-full shadow-inner">
        {item.icon}
      </div>
      <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-700 via-pink-600 to-purple-500 bg-clip-text text-transparent drop-shadow-sm">
        {item.title}
      </h2>
    </div>

    {/* Subtitle */}
    {item.subtitle && (
      <p className="text-purple-700/90 text-base leading-relaxed drop-shadow-[0_0_6px_rgba(168,85,247,0.2)]">
        {item.subtitle}
      </p>
    )}

    {/* Tooltip */}
    {item.tooltip && (
      <p className="text-sm italic text-purple-500">{item.tooltip}</p>
    )}

    {/* Points */}
    {item.points && (
      <ul className="space-y-2 text-purple-800 text-base">
        {item.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2">
            <FaCheckCircle
              size={14}
              className="text-purple-600 mt-1 flex-shrink-0"
            />
            {point}
          </li>
        ))}
      </ul>
    )}

    {/* Stats */}
{item.stats && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    {item.stats.map((stat, i) => (
      <div
        key={i}
        className="text-center p-4 rounded-xl font-medium shadow-md hover:shadow-lg transition bg-purple-200 text-purple-900"
      >
        {stat}
      </div>
    ))}
  </div>
  
)}


    {/* Bullets */}
    {item.bullets && (
      <ul className="space-y-2 text-purple-800 text-base">
        {item.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <FaCheckCircle
              size={14}
              className="text-purple-600 mt-1 flex-shrink-0"
            />
            {bullet}
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Grid with all 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {contentData.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
