import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ badge, title, children, className = "", delay = 0, initialX = 0, initialY = 40 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: initialX, y: initialY }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay }}
            className={`relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black/40 p-8 md:p-10 space-y-8 flex flex-col justify-center h-full ${className}`}
        >
            {badge && (
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-xs text-white/80 border border-white/10 w-fit">
                    {badge}
                </span>
            )}

            {title && (
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-white">
                    {title}
                </h3>
            )}

            <div className="space-y-6">
                {children}
            </div>
        </motion.div>
    );
};

export const FeatureItem = ({ icon: Icon, title, description }) => (
    <div className="flex gap-4">
        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-blue-400">
            <Icon size={20} />
        </div>
        <div>
            <h4 className="text-base font-medium text-white">
                {title}
            </h4>
            <p className="text-gray-300 text-xs leading-relaxed max-w-md">
                {description}
            </p>
        </div>
    </div>
);

export default GlassCard;
