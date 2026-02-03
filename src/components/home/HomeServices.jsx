import React, { useState } from 'react'

function HomeServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const services = [
    {
      title: "After-Sales Support",
      desc: "Dedicated team – always there when you need us.",
      image:
        "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/04/After-Sales-Support-scaled.jpg",
    },
    {
      title: "Installation",
      desc: "Quick, professional setup – no mess, no stress!",
      image:
        "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/04/Installation-scaled.jpg",
    },
  ];

  return (
    <>
      <section className="bg-black py-16 px-5 relative z-20">
        {/* Section Label */}
        <div className="flex justify-center mb-10">
          <span className="inline-block px-4 py-1.5 text-white rounded-full border border-gray-600 text-sm font-medium mb-6 bg-black/50 backdrop-blur-sm shadow-sm">
            Services
          </span>
        </div>

        {/* Cards Container */}
        <div className="max-w-7xl mx-auto flex gap-6 h-[420px]">
          {services.map((service, index) => {
            let widthClass = index === 0 ? 'w-1/3' : 'w-2/3' 

            if (hoveredIndex !== null) {
              if (hoveredIndex === index) {
                widthClass = 'w-2/3' 
              } else {
                widthClass = 'w-1/3' 
              }
            }

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-[1000ms] ease-in-out ${widthClass}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] ease-in-out ${hoveredIndex === index ? 'scale-105' : 'scale-100'
                    }`}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 max-w-md">
                    {service.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default HomeServices