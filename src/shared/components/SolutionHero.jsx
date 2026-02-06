import React from 'react';
import { motion } from "framer-motion";
import OptimizedImage from './OptimizedImage';
import { FADE_UP } from '../../lib/animations';

const SolutionHero = ({
    bgImage,
    titlePart1,
    titlePart2,
    subtitle,
    gradientFrom = "blue-400",
    gradientTo = "purple-400"
}) => {
    return (
        <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden top-20">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <OptimizedImage
                    src={bgImage}
                    alt={`${titlePart1} Hero Background`}
                    className="w-full h-full brightness-75 transition-transform duration-1000 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    custom={1}
                    variants={FADE_UP}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight leading-[1.1]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                            {titlePart1}
                        </span>
                        <br />
                        {titlePart2}
                    </h2>
                </motion.div>

                <motion.div
                    custom={2}
                    variants={FADE_UP}
                    initial="hidden"
                    animate="visible"
                >
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionHero;
