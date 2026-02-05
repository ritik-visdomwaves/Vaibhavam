import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OptimizedImage = ({ src, alt, className, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Loading Placeholder / Shimmer */}
            <AnimatePresence>
                {!isLoaded && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-neutral-800 animate-pulse"
                    />
                )}
            </AnimatePresence>

            <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 1.05
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`w-full h-full object-cover will-change-[transform,opacity] ${isLoaded ? '' : 'invisible'}`}
                {...props}
            />
        </div>
    );
};

export default OptimizedImage;
