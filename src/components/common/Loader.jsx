import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black">
            <div className="relative">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-2 border-white/10 border-t-blue-500 rounded-full"
                />

                {/* Inner Pulse */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 m-auto w-8 h-8 bg-blue-500/20 rounded-full blur-md"
                />
            </div>
        </div>
    );
};

export default Loader;
