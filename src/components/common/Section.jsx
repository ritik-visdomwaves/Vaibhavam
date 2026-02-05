import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ badge, title, description, children, bgImage, className = "" }) => {
    return (
        <section className={`relative z-20 w-full py-16 px-6 md:px-12 overflow-hidden text-white group ${className}`}>
            {/* Background Image Layer */}
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={bgImage}
                        alt="Background"
                        className="w-full h-full object-cover opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black"></div>
                </div>
            )}

            <div className="relative z-10 max-w-7xl mx-auto">
                {(badge || title || description) && (
                    <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="max-w-2xl">
                            {badge && (
                                <span className="inline-block px-4 py-1.5 rounded-full border border-gray-600 text-sm font-medium mb-6 bg-black/50 backdrop-blur-sm shadow-sm transition-colors group-hover:border-gray-400">
                                    {badge}
                                </span>
                            )}
                            {title && (
                                <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
                                    {title}
                                </h2>
                            )}
                            {description && (
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
