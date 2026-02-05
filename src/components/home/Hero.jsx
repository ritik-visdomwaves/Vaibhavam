import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { HERO_CONTENT, FADE_UP_VARIANTS } from '../../constants';

// Custom shape component for the background effect
const BackgroundShape = ({ className, delay = 0, width = 400, height = 100, rotate = 0, gradient = "from-white/[0.08]" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
            animate={{ opacity: 1, y: 0, rotate: rotate }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ width, height }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "border border-white/[0.1]",
                        "shadow-[0_4px_16px_0_rgba(255,255,255,0.05)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_80%)]",
                        "will-change-transform"
                    )}
                />
            </motion.div>
        </motion.div>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();

    const scale = useTransform(scrollY, [0, 700], [1, 0.8]);
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);
    const y = useTransform(scrollY, [0, 700], [0, 100]);

    return (
        <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#030303] sticky top-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <BackgroundShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-20%] md:left-[-5%] top-[15%] md:top-[20%] hidden sm:block"
                />

                <BackgroundShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-10%] md:right-[0%] top-[70%] md:top-[75%] hidden sm:block"
                />

                <BackgroundShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <BackgroundShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />
            </div>

            <motion.div
                style={{ scale, opacity, y }}
                className="relative z-10 mt-28 md:mt-32 lg:mt-20 container mx-auto px-6 md:px-8 will-change-transform"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        custom={1}
                        variants={FADE_UP_VARIANTS}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {HERO_CONTENT.title.split(".")[0]}.
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/40 to-rose-300">
                                {HERO_CONTENT.title.split(".")[1]}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={FADE_UP_VARIANTS}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-sm sm:text-lg md:text-xl text-white/80 mb-6 leading-relaxed font-light tracking-wide max-w-xl mx-auto flex flex-wrap justify-center overflow-hidden">
                            {HERO_CONTENT.subtitle.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 1.2 + index * 0.04,
                                        ease: "easeOut"
                                    }}
                                    className={char === " " ? "mr-1.5" : ""}
                                >
                                    {char}
                                </motion.span>
                            ))}</p>
                        <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light tracking-wide max-w-4xl mx-auto flex flex-wrap justify-center overflow-hidden">
                            {HERO_CONTENT.description}
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </section>
    );
};

export default Hero;