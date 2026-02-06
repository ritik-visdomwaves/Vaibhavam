import React from 'react';
import { HiOutlineCpuChip, HiOutlineLightBulb, HiOutlineAdjustmentsHorizontal, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import SolutionHero from '../../shared/components/SolutionHero';
import SolutionUseCase from '../../shared/components/SolutionUseCase';
import SolutionHighlights from '../../shared/components/SolutionHighlights';
import SolutionFeatures from '../../shared/components/SolutionFeatures';

const features = [
    {
        icon: HiOutlineCpuChip,
        title: "Bespoke Automation",
        description: "Custom-tailored scenes and logic designed to match the unique rhythm of villa living."
    },
    {
        icon: HiOutlineLightBulb,
        title: "Aesthetic Harmony",
        description: "Hardware and interfaces that blend seamlessly with high-end interior design and décor."
    },
    {
        icon: HiOutlineAdjustmentsHorizontal,
        title: "Multi-Zone Control",
        description: "Effortlessly manage lighting, climate, and audio across expansive multi-level estates."
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Invisible Security",
        description: "Sophisticated surveillance and entry management that protects without being intrusive."
    },
    {
        icon: HiOutlineSquare3Stack3D,
        title: "Entertainment Unity",
        description: "Integrate home theaters, poolside audio, and gaming zones into one cohesive system."
    }
];

const slides = [
    {
        time: "5:00 PM",
        title: "Evening Ambience",
        desc: "Pool lights ignite, garden paths illuminate, and indoor spaces transition to warm, golden hues.",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2070",
    },
    {
        time: "8:00 PM",
        title: "Entertainment Mode",
        desc: "Audio zones synchronize throughout the villa while theater seating and lighting prep for movie night.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Secure-Worry-free-Exit.png",
    },
    {
        time: "11:00 PM",
        title: "Night Routine",
        desc: "The entire estate transitions to night mode — gates lock, perimeter monitors activate, and master suites dim.",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=2070",
    },
];

const cards = [
    {
        title: "The Ultimate Lifestyle",
        desc: "Experience an unparalleled level of convenience where your home anticipates your every need.",
        dark: true,
    },
    {
        title: "Architectural Integration",
        desc: "Our technology is designed to be felt, not seen — preserving the architectural integrity of your villa.",
        wide: true,
    },
    {
        title: "Whole-Home Orchestration",
        desc: "Synchronize every system from climate to irrigation into a single, elegant master platform.",
    },
    {
        title: "Concierge Security",
        desc: "Monitor visitors and grant access to service staff remotely with full history and video logs.",
        dark: true,
    },
    {
        title: "Climate Perfection",
        desc: "Maintain the perfect temperature and humidity in Every room, including wine cellars and art galleries.",
        dark: true,
    },
];

function Villas() {
    return (
        <div className="bg-black min-h-screen text-white">
            <SolutionHero
                bgImage="https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/04/IndependentBungalow.jpg"
                titlePart1="Villa"
                titlePart2="Automation"
                subtitle="Bespoke smart experiences crafted for the most discerning residential estates."
                gradientFrom="amber-200"
                gradientTo="orange-600"
            />

            <SolutionUseCase
                slides={slides}
                title="Bespoke <br /> Luxury <br /> Living"
            />

            <SolutionHighlights
                cards={cards}
                sectionTitle="Villa Highlights"
            />

            <SolutionFeatures
                features={features}
                title="Elegance Meets Intelligence — <br className='hidden md:block' /> The Villa Standard"
            />
        </div>
    );
}

export default Villas;