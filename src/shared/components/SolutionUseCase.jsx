import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FADE_UP } from '../../lib/animations';

const SolutionUseCase = ({ slides, title }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center px-12 overflow-hidden mt-16">
            {/* LEFT SIDE: ROTATING DIAL */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center h-[500px] md:h-[700px]">
                {/* THE MAIN ROTATING ASSEMBLY */}
                <motion.div
                    animate={{ rotate: active * -90 }}
                    transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                    className="relative w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full flex items-center justify-center will-change-transform"
                />

                {/* IMAGE DISPLAY */}
                <div className="absolute w-[280px] md:w-[550px] h-[280px] md:h-[550px] rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10">
                    {slides.map((slide, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, rotate: -20, scale: 0.9 }}
                            animate={{
                                opacity: active === i ? 1 : 0,
                                rotate: active === i ? 0 : 20,
                                scale: active === i ? 1 : 1.1,
                                zIndex: active === i ? 10 : 0
                            }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* STATIC DECORATION */}
                <div className="absolute w-[180px] md:w-[350px] h-[180px] md:h-[350px] rounded-full border border-dashed border-white/5 pointer-events-none" />
                <div className="absolute w-[320px] md:w-[620px] h-[320px] md:h-[620px] rounded-full border border-white/10 pointer-events-none shadow-[0_0_30px_rgba(59,130,246,0.1)]" />
            </div>

            {/* RIGHT SIDE: CONTENT LAYER */}
            <motion.div
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 pl-0 md:pl-16 z-10 py-10 md:py-0"
            >
                <span className="px-6 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
                    Use Cases
                </span>

                <h2 className="text-4xl md:text-6xl font-light leading-tight mt-10 mb-8" dangerouslySetInnerHTML={{ __html: title }} />

                <div className="space-y-4">
                    <p className="text-2xl md:text-4xl font-medium tracking-tight text-white">{slides[active].time}</p>
                    <div className="relative overflow-hidden">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="text-xl md:text-2xl font-medium text-gray-200 italic">
                                {slides[active].title}
                            </p>
                            <p className="text-gray-400 text-base md:text-lg max-w-md mt-4 leading-relaxed">
                                {slides[active].desc}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default SolutionUseCase;
