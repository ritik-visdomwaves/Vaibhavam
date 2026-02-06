import React, { useRef, memo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import OptimizedImage from '../../shared/components/OptimizedImage'
import { BANNER_SLIDES } from '../../constants'

const BannerSlide = memo(({ slide, index }) => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div
      ref={containerRef}
      className="sticky top-0 w-full h-screen overflow-hidden"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full h-full origin-bottom will-change-transform"
      >
        <OptimizedImage
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full"
        />

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black z-10 pointer-events-none"
        />

        <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlayColor} z-0`} />

        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 flex flex-col justify-center pt-20 md:pt-0 px-6 md:px-20 max-w-7xl mx-auto z-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl xl:text-5xl text-white font-medium font-sans leading-tight max-w-2xl drop-shadow-lg"
          >
            {slide.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-sm md:text-base md:text-lg text-gray-200 font-normal leading-tight max-w-xl drop-shadow-md"
          >
            {slide.subtitle}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
});

function BannerSection() {
  return (
    <div className="w-full bg-gray-900 text-white relative">
      {BANNER_SLIDES.map((slide, index) => (
        <BannerSlide key={slide.id} slide={slide} index={index} />
      ))}
    </div>
  )
}

export default BannerSection