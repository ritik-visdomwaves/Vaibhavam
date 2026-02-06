/**
 * Centralized high-performance animation variants for Framer Motion.
 * Using transform-only animations (translate, scale, rotate) where possible 
 * to ensure 60fps performance on most devices.
 */

export const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: custom * 0.1,
            ease: [0.21, 0.45, 0.32, 0.9]
        }
    })
};

export const FADE_IN = {
    hidden: { opacity: 0 },
    visible: (custom = 0) => ({
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: custom * 0.1,
            ease: "easeOut"
        }
    })
};

export const SCALE_IN = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            delay: custom * 0.1,
            ease: [0.21, 0.45, 0.32, 0.9]
        }
    })
};

export const STAGGER_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

/**
 * Performant Page Transitions
 */
export const PAGE_VARIANTS = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.4, ease: "easeInOut" }
};
