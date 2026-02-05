import React, { useRef, useState, memo } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InfiniteHero from '../ui/infinite-hero'
import OptimizedImage from '../common/OptimizedImage';
import { ABOUT_CARDS, JOURNEY_ITEMS } from '../../constants';

// Variants
const journeyVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 10,
  },
  exit: (direction) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0,
    scale: 0.9,
    zIndex: 0,
  }),
};

const CardItem = memo(({ card, index }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const darken = useTransform(scrollYProgress, [0, 1], [0, 0.8]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 w-full mb-32 h-[80vh] flex items-center"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full rounded-[3.5rem] border border-white/10 bg-black overflow-hidden origin-bottom h-full"
      >
        <motion.div
          style={{ opacity: darken }}
          className="absolute inset-0 bg-black z-10 pointer-events-none"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none" />

        <motion.div
          style={{ opacity: contentOpacity }}
          className="relative px-8 md:px-20 py-20 h-full flex items-center z-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white max-w-xl">
              {card.title}
            </h2>

            <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-full max-h-[450px]">
              <OptimizedImage
                src={card.image}
                alt="Smart Home"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black/15" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
});

function AboutUs() {
  const [journeyIndex, setJourneyIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextJourney = React.useCallback(() => {
    setDirection(1);
    setJourneyIndex((prev) => (prev + 1) % JOURNEY_ITEMS.length);
  }, []);

  const prevJourney = () => {
    setDirection(-1);
    setJourneyIndex((prev) => (prev - 1 + JOURNEY_ITEMS.length) % JOURNEY_ITEMS.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextJourney, 5000);
    return () => clearInterval(timer);
  }, [nextJourney]);

  const getCardPosition = (idx) => {
    if (idx === journeyIndex) return "center";
    if (idx === (journeyIndex - 1 + JOURNEY_ITEMS.length) % JOURNEY_ITEMS.length) return "left";
    if (idx === (journeyIndex + 1) % JOURNEY_ITEMS.length) return "right";
    return "hidden";
  };

  return (
    <div className="bg-black min-h-screen">
      <InfiniteHero />

      <section className="py-16 px-6 md:px-12 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-16">
            <span className="px-6 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
              Who We Are
            </span>
          </div>

          <div className="relative">
            {ABOUT_CARDS.map((card, index) => (
              <CardItem key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="-mt-30 min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-10">
          <span className="px-6 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
            Our Vision
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight mb-8">
          Building the Future of Smart Homes
        </h1>

        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed">
          We imagine homes that think ahead—intelligent by design, effortlessly connected, and secure at every level. Hogar drives the future of smart living through innovations that make automation a natural part of everyday life.
        </p>

        <div className="mt-16 h-px w-32 bg-neutral-700 opacity-50" />
      </section>

      <section className="relative -mt-20 min-h-[85vh] bg-black flex flex-col items-center justify-center px-6 overflow-hidden text-white py-16">
        <div className="mb-8">
          <span className="inline-block rounded-full bg-neutral-900 px-6 py-2 text-sm shadow-md border border-white/5">
            Our Journey
          </span>
        </div>

        <p className="text-lg md:text-xl text-neutral-300 mb-6">
          From Innovation to Everyday Living
        </p>

        <div className="relative w-full max-w-7xl flex items-center justify-center min-h-[450px]">
          <div className="relative flex items-center justify-center w-full h-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={journeyIndex}
                custom={direction}
                variants={journeyVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute z-10 max-w-lg text-center px-4"
              >
                <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                  {JOURNEY_ITEMS[journeyIndex].title}
                </h2>
                <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
                  {JOURNEY_ITEMS[journeyIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {JOURNEY_ITEMS.map((item, idx) => {
              const pos = getCardPosition(idx);
              if (pos === "hidden" || pos === "center") return null;

              return (
                <motion.div
                  key={`preview-${item.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2, x: pos === "left" ? -400 : 400 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute hidden xl:block w-1/4 text-center blur-[3px] pointer-events-none ${pos === "left" ? "left-0" : "right-0"
                    }`}
                >
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-400 line-clamp-2">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={prevJourney}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={nextJourney}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-12 h-px w-32 bg-neutral-700 opacity-40" />
      </section>
    </div>
  );
}

export default AboutUs
