import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const ScrollableCards = ({ items }) => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group/scrollbar">
            {/* Navigation Buttons */}
            <div className="absolute -top-24 right-0 hidden md:flex gap-4">
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

            {/* Scrollable Cards Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex-none w-[300px] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden group/card snap-center cursor-pointer border border-white/10"
                    >
                        <OptimizedImage
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full transition-transform duration-500 group-hover/card:scale-110 will-change-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                            <h3 className="text-xl md:text-2xl font-medium leading-tight mb-2">{item.title}</h3>
                            <p className="text-gray-300 text-sm md:text-base opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollableCards;
