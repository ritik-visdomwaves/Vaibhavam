import React from 'react';
import { motion } from "framer-motion";
import { FADE_UP } from '../../lib/animations';

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => (
    <div className={`group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-[#0f0f0f] h-full flex flex-col ${className}`}>
        {/* Radial Gradient Glow on Hover */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent rounded-[2rem] pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6 inline-block">
                <Icon className="text-4xl text-white opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>

            <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">
                {title}
            </h3>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10 mb-6" />

            <p className="text-gray-400 leading-relaxed text-[15px] font-light flex-grow">
                {description}
            </p>
        </div>
    </div>
);

const SolutionFeatures = ({ features, title }) => {
    return (
        <section className="bg-black py-24 px-6 md:px-12 overflow-hidden relative">
            {/* Background Decorative Mesh */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white text-center font-normal mb-20 tracking-tight" dangerouslySetInnerHTML={{ __html: title }} />

                {/* Main Grid: 6-column grid for precise alignment */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {/* Top 3 Cards - each spans 2 columns */}
                    {features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="md:col-span-2">
                            <FeatureCard {...feature} />
                        </div>
                    ))}

                    {/* Bottom 2 Cards - centered */}
                    <div className="hidden md:block md:col-span-1"></div> {/* Spacer for centering bottom row */}
                    {features.slice(3).map((feature, idx) => (
                        <div key={idx + 3} className="md:col-span-2">
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionFeatures;
export { FeatureCard };
