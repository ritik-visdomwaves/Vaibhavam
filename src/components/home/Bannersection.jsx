import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Home, Shield, Lightbulb, Tv, Zap, Wifi, Lock, Smartphone } from 'lucide-react'

const BannerSlide = ({ slide, index, totalSlides }) => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // As the user scrolls down (and next slide comes up):
  // 1. Scale down slightly to 0.9 (creates depth/"goes back" effect)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  // 2. Darken the image by increasing opacity of a black overlay
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6])

  // 3. Fade out content slightly faster
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div
      ref={containerRef}
      className="sticky top-0 w-full h-screen overflow-hidden"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full h-full origin-bottom" // Scale from bottom or center
      >
        {/* Background Image */}
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Helper Black Overlay for darkening effect */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black z-10 pointer-events-none"
        />

        {/* Original Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlayColor} z-0`} />

        {/* Content Container */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto z-20"
        >

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl xl:text-5xl text-white font-medium font-sans leading-tight max-w-2xl drop-shadow-lg"
          >
            {slide.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-base md:text-lg text-gray-200 font-normal leading-tight max-w-xl drop-shadow-md"
          >
            {slide.subtitle}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}

function BannerSection() {
  const slides = [
    {
      id: 1,
      title: "Welcome to the Future of Smart Living",
      subtitle: "Whether it's an apartment, villa, or bungalow — We make any home smarter.",
      image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Welcome-to-the-Future-of-Smart-Living.webp",
      overlayColor: "from-black/80 via-black/40 to-transparent",
    },
    {
      id: 2,
      title: "Smart. Secure. Sustainable.",
      subtitle: "Manage lighting, security, environment, and entertainment with a single touch or voice command.",
      image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Effortless-Control-Maximum-Convenience.webp",
      overlayColor: "from-black/50 to-black/30",
      icons: true
    },
    {
      id: 3,
      title: "Seamless Automation, Tailored for You",
      subtitle: "From basic smart setups to fully integrated home automation — customized to your lifestyle.",
      image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Seamless-Automation-Tailored-for-You-1.webp",
      overlayColor: "from-blue-900/10 via-black/80 to-transparent",
    },
    {
      id: 4,
      title: "Monitor and Manage Your Home Remotely, Effortlessly.",
      subtitle: "From live views of each room to smart control of lights, security, and more, bring your home to your fingertips.",
      image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Upgrade-to-Smarter-Living-with-Hogar.webp",
      overlayColor: "from-black/80 to-transparent",
    }
  ]

  return (
    <div className="w-full bg-gray-900 text-white relative">
      {slides.map((slide, index) => (
        <BannerSlide key={slide.id} slide={slide} index={index} totalSlides={slides.length} />
      ))}
    </div>
  )
}

export default BannerSection