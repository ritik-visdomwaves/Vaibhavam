import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

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
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
};

const Hero = () => {
    // Scroll animation logic
    // We want the hero content to "go back slowly" (scale down) and "disappear" (fade out)
    const { scrollY } = useScroll();

    // As we scroll from 0 to 700px:
    // 1. Scale down from 1 to 0.8
    const scale = useTransform(scrollY, [0, 700], [1, 0.8]);
    // 2. Opacity goes from 1 to 0
    const opacity = useTransform(scrollY, [0, 600], [1, 0]);
    // 3. Move it slightly down to create parallax feel
    const y = useTransform(scrollY, [0, 700], [0, 100]);


    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <>
            {/* Added sticky, top-0, and z-0 to ensure it stays behind the next section */}
            <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#030303] sticky top-0 z-0">

                {/* Visual background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <BackgroundShape
                        delay={0.3}
                        width={600}
                        height={140}
                        rotate={12}
                        gradient="from-indigo-500/[0.15]"
                        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    />

                    <BackgroundShape
                        delay={0.5}
                        width={500}
                        height={120}
                        rotate={-15}
                        gradient="from-rose-500/[0.15]"
                        className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
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

                {/* Content section wrapped in motion.div for scale/fade animation */}
                <motion.div
                    style={{ scale, opacity, y }}
                    className="relative z-10 mt-20 container mx-auto px-4 md:px-6"
                >
                    <div className="max-w-4xl mx-auto text-center">
                        {/* <motion.div
                            custom={0}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
                        >
                            <Circle className="h-2 w-2 fill-rose-500/80" />
                            <span className="text-sm text-white/60 tracking-wide font-medium">
                                Smart Homes. Simplified Living
                            </span>
                        </motion.div> */}

                        <motion.div
                            custom={1}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                    Designed Smart.
                                </span>
                                <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/40 to-rose-300">
                                    Lived Easy.
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={textVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto flex flex-wrap justify-center overflow-hidden">
                                {"Luxury Living at Your Fingertips".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 1.2 + index * 0.04,
                                            ease: "easeOut"
                                        }}
                                        className={char === " " ? "mr-2" : ""}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </p>
                            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light tracking-wide max-w-4xl mx-auto flex flex-wrap justify-center overflow-hidden">A refined blend of comfort, safety, and efficiency—intelligently crafted to elevate everyday living.</p>

                        </motion.div>
                    </div>
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
            </section>
        </>
    );
};

export default Hero;