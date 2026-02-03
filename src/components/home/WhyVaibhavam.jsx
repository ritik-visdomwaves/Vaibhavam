import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function WhyVaibhavam() {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  const cards = [
    {
      id: 1,
      title: "End-to-End Smart Home Solutions",
      description: "Complete automation for lighting, security, climate, and entertainment—all with unified control.",
      image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Welcome-to-the-Future-of-Smart-Living.webp",
    },
    {
      id: 2,
      title: "Z-Wave Technology & Local Control",
      description: "Experience reliable, low-latency control with Z-Wave mesh networking that works even without internet.",
      image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Effortless-Control-Maximum-Convenience.webp",
    },
    {
      id: 3,
      title: "Built for India",
      description: "Engineered to withstand local voltage fluctuations and environmental conditions for long-lasting durability.",
      image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Seamless-Automation-Tailored-for-You-1.webp",
    },
    {
      id: 4,
      title: "No Subscription Fees",
      description: "One-time investment for a lifetime of smart living. No monthly charges or hidden costs.",
      image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Upgrade-to-Smarter-Living-with-Hogar.webp",
    }
  ]

  return (
    <section className="relative z-20 w-full py-16 px-5 overflow-hidden bg-black text-white group">
      {/* Background Image with Heavy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Welcome-to-the-Future-of-Smart-Living.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full border border-gray-600 text-sm font-medium mb-6 bg-black/50 backdrop-blur-sm shadow-sm">
              Why Vaibhavam
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Design. Install. Support.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              With Z-Wave and Wi-Fi connectivity, Vaibhavam's smart home solutions offer effortless automation, low-power control, and reliable performance. Designed for Indian homes, our systems are easy to install and support your evolving needs.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full border border-gray-600 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full border border-gray-600 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative flex-none w-[300px] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden group/card snap-center cursor-pointer border border-white/10"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500" // Removed hover scale
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl md:text-2xl font-medi leading-tight mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyVaibhavam