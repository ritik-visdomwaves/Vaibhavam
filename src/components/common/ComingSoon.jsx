import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = ({ title = "COMING SOON", subtitle = "Our team is working on bringing you the latest insights in smart living, automation, and the future of technology." }) => {
    return (
        <div className="min-h-screen relative flex items-center justify-center bg-black overflow-hidden pt-20">
            {/* Background Image with Parallax effect */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070"
                    alt="Coming Soon Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className={i === 1 ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-transparent mx-auto mt-12"
                />
            </div>

            {/* Animated dots/grid effect */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
    );
};

export default ComingSoon;
