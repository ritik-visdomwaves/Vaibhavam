import React, { useState, useMemo } from 'react';

const SolutionServiceGrid = ({ services, sectionLabel = "Highlights" }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Optimized width classes using flex-grow for smoother transitions
    const gridItems = useMemo(() => services.map((service, index) => {
        let flexClass = 'flex-[1]'; // Default 25% for 4 items

        if (hoveredIndex !== null) {
            if (hoveredIndex === index) {
                flexClass = 'flex-[1.8]'; // Expanded state
            } else {
                flexClass = 'flex-[0.7]'; // Shrunken state
            }
        }

        return { ...service, flexClass };
    }), [services, hoveredIndex]);

    return (
        <section className="bg-black py-20 px-6 relative z-20 overflow-hidden">
            <div className="flex justify-center mb-12">
                <span className="px-5 py-2 text-white/90 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-widest bg-white/5 backdrop-blur-md">
                    {sectionLabel}
                </span>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 min-h-[450px] transition-all duration-700">
                {gridItems.map((service, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden rounded-[2.5rem] cursor-pointer transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1) w-full aspect-[4/3] md:aspect-auto will-change-[flex] ${service.flexClass}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                            decoding="async"
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1800ms] cubic-bezier(0.23, 1, 0.32, 1) pointer-events-none ${hoveredIndex === index ? 'scale-110' : 'scale-100'
                                }`}
                        />

                        {/* Overlays */}
                        <div className="absolute inset-0 bg-black/30 transition-opacity duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1) delay-75 transform-gpu translate-z-0">
                                {service.title}
                            </h3>
                            <p className={`text-sm md:text-base text-gray-300 font-light leading-relaxed max-w-xs transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1) transform-gpu translate-z-0 ${hoveredIndex === index || hoveredIndex === null
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-6'
                                }`}>
                                {service.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SolutionServiceGrid;
