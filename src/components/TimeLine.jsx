import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaBoxes, FaChartLine, FaRocket } from "react-icons/fa";
{/*
import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaBoxes, FaChartLine, FaRocket } from "react-icons/fa";
import home1 from "../assets/home_1.jpg";
import home2 from "../assets/home_2.jpg";
import home3 from "../assets/home_3.jpg";
import home4 from "../assets/home_4.jpg";

const contentData = [
  {
    title: "Not a Training. Not a Course. Not a Bootcamp.",
    subtitle:
      "Senkusha is where builders are born. We simulate the environment of a real tech company to turn learners into creators who are ready to take on top jobs or start their own ventures.",
    tooltip: "We bridge the gap between theory and real-world tech execution.",
    icon: <FaUserTie className="text-3xl text-purple-700" />,
    image: home1,
  },
  {
    title: "Our Offerings",
    points: [
      "Builder's Simulation Program - Real-world projects under mentorship.",
      "Product Development - Full-cycle product engineering for startups.",
      "AI & Non-AI Solutions - Build intelligent, scalable platforms.",
    ],
    icon: <FaBoxes className="text-3xl text-purple-700" />,
    image: home2,
  },
  {
    title: "Why Senkusha Works",
    stats: [
      "3 Years of Proven Success",
      "50+ Students Onboarded",
      "100% 5-Star Ratings",
      "Partnered with DJ Sanghvi & Bhagubhai Polytechnic",
    ],
    icon: <FaChartLine className="text-3xl text-purple-700" />,
    image: home3,
  },
  {
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
    image: home4,
  },
];

const HomePage = () => {
  return (
    <main className="bg-white">
     

      {/* Content Sections 
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {contentData.map((item, idx) => {
            const isLeft = idx % 2 === 0; // alternate layout
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`mb-24 flex flex-col md:flex-row items-center gap-10 ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image 
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content 
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-full">
                      {item.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </h2>
                  </div>

                  {item.subtitle && (
                    <p className="text-gray-600 mb-4">{item.subtitle}</p>
                  )}

                  {item.tooltip && (
                    <p className="text-sm italic text-gray-500 mb-4">
                      {item.tooltip}
                    </p>
                  )}

                  {item.points && (
                    <ul className="list-disc ml-5 text-gray-700 space-y-2">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {item.stats && (
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      {item.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="bg-gray-100 text-center p-4 rounded-lg shadow-sm font-medium"
                        >
                          {stat}
                        </div>
                      ))}
                    </div>
                  )}

                  {item.bullets && (
                    <ul className="list-disc ml-5 text-gray-700 space-y-2 mt-2">
                      {item.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {item.cta && (
                    <button className="mt-6 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700">
                      {item.cta}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default HomePage; */}







{/*const contentData = [
  {
    id: 1,
    title: "Not a Training. Not a Course. Not a Bootcamp.",
    subtitle:
      "Senkusha is where builders are born. We simulate the environment of a real tech company to turn learners into creators who are ready to take on top jobs or start their own ventures.",
    tooltip: "We bridge the gap between theory and real-world tech execution.",
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
    title: "Why Senkusha Works",
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

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto-play every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + contentData.length) % contentData.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentData.length);
  };

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
  };

  const leftIndex = (currentIndex - 1 + contentData.length) % contentData.length;
  const rightIndex = (currentIndex + 1) % contentData.length;

  const cards = [
    { ...contentData[leftIndex], position: "left" },
    { ...contentData[currentIndex], position: "center" },
    { ...contentData[rightIndex], position: "right" },
  ];

  const positionStyles = {
    left: "z-10 scale-90 opacity-40 -mr-3 md:-mr-6 w-[75%] md:w-[70%] max-w-sm",
    center:
      "z-20 scale-100 opacity-100 mx-2 md:mx-6 w-full max-w-2xl shadow-lg bg-white/95 backdrop-blur-lg",
    right:
      "z-10 scale-90 opacity-40 -ml-3 md:-ml-6 w-[75%] md:w-[70%] max-w-sm",
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="relative w-full max-w-7xl px-4 mx-auto overflow-hidden">
        {/* Cards 
        <div className="relative flex items-center justify-center h-[460px] md:h-[500px]">
          {cards.map((item) => (
            <div
              key={item.id + item.position}
              className={`transition-all duration-700 ease-in-out rounded-2xl h-full flex items-center p-6 md:p-8 ${positionStyles[item.position]}`}
            >
              <div className="w-full text-center md:text-left">
                {/* Icon + Title 
                <div className="flex flex-col md:flex-row items-center md:items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-full">
                    {item.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {item.title}
                  </h2>
                </div>

                {/* Sub content 
                {item.subtitle && (
                  <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
                    {item.subtitle}
                  </p>
                )}
                {item.tooltip && (
                  <p className="text-xs italic text-gray-500 mb-3">
                    {item.tooltip}
                  </p>
                )}
                {item.points && (
                  <ul className="list-disc ml-5 text-gray-700 text-sm md:text-base space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
                {item.stats && (
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {item.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-gray-100 text-center p-3 rounded-lg shadow-sm text-sm md:text-base font-medium"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                )}
                {item.bullets && (
                  <ul className="list-disc ml-5 text-gray-700 text-sm md:text-base space-y-2 mt-2">
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* Navigation Arrows 
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-white/80 shadow-md rounded-full flex items-center justify-center text-gray-700 hover:bg-white z-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-white/80 shadow-md rounded-full flex items-center justify-center text-gray-700 hover:bg-white z-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots 
        <div className="flex justify-center mt-6 space-x-2">
          {contentData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-purple-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; */}


const contentData = [
  {
    id: 1,
    title: "Not a Training. Not a Course. Not a Bootcamp.",
    subtitle:
      "Senkusha is where builders are born. We simulate the environment of a real tech company to turn learners into creators who are ready to take on top jobs or start their own ventures.",
    tooltip: "We bridge the gap between theory and real-world tech execution.",
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
    title: "Why Senkusha Works",
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

// ✅ Reusable Card (no spin, clean fade-in)
const ContentCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-[#fcfbf5] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col p-6 gap-6"
  >
    {/* Title & Icon */}
    <div className="flex items-center justify-center gap-3">
      <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-full">
        {item.icon}
      </div>
      <h2 className="text-lg md:text-xl font-bold text-gray-900 text-center">
        {item.title}
      </h2>
    </div>

    {/* Subtitle */}
    {item.subtitle && (
      <p className="text-gray-600 text-center text-sm leading-relaxed">
        {item.subtitle}
      </p>
    )}

    {/* Tooltip */}
    {item.tooltip && (
      <p className="text-xs italic text-gray-500 text-center">{item.tooltip}</p>
    )}

    {/* Points */}
    {item.points && (
      <ul className="list-disc ml-5 text-gray-700 text-sm space-y-2">
        {item.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    )}

    {/* Stats */}
{item.stats && (
  <div className="grid grid-cols-2 gap-3 mt-2 place-items-center">
    {item.stats.map((stat, i) => (
      <div
        key={i}
        className="bg-gray-100 text-center p-3 rounded-lg shadow-sm text-sm md:text-base font-medium flex items-center justify-center"
      >
        {stat}
      </div>
    ))}
  </div>
)}


    {/* Bullets */}
    {item.bullets && (
      <ul className="list-disc ml-5 text-gray-700 text-sm space-y-2">
        {item.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    )}

    
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentData.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
