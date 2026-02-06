import React from 'react';
import { HiOutlineCpuChip, HiOutlineLightBulb, HiOutlineAdjustmentsHorizontal, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import SolutionHero from '../../shared/components/SolutionHero';
import SolutionUseCase from '../../shared/components/SolutionUseCase';
import SolutionHighlights from '../../shared/components/SolutionHighlights';
import SolutionFeatures from '../../shared/components/SolutionFeatures';

const features = [
    {
        icon: HiOutlineCpuChip,
        title: "Large-Scale Automation",
        description: "Unified control systems designed to manage thousands of devices across gated communities."
    },
    {
        icon: HiOutlineLightBulb,
        title: "Smart Resource Mgmt",
        description: "Optimize energy and water usage across common areas with intelligent monitoring."
    },
    {
        icon: HiOutlineAdjustmentsHorizontal,
        title: "Centralized Monitoring",
        description: "A single command center for facility managers to oversee all community assets."
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Enhanced Perimeter",
        description: "Advanced AI-powered surveillance and access control for maximum resident safety."
    },
    {
        icon: HiOutlineSquare3Stack3D,
        title: "Unified Resident App",
        description: "One app for residents to book amenities, pay bills, and control their smart homes."
    }
];

const slides = [
    {
        time: "6:00 AM",
        title: "Perimeter Security",
        desc: "AI cameras detect unauthorized access at the community gates, alerting security teams instantly.",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2070",
    },
    {
        time: "10:00 AM",
        title: "Amenity Management",
        desc: "Automated booking system manages club house and gym usage, optimizing utility consumption.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070",
    },
    {
        time: "2:00 PM",
        title: "Visitor Access",
        desc: "Pre-authorized digital passes allow guests to enter seamlessly while maintaining full logs.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
    },
    {
        time: "8:00 PM",
        title: "Common Area Lighting",
        desc: "Smart streetlights and park lights adjust based on movement and ambient light levels.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Set-the-mood-for-evenings.png",
    },
];

const cards = [
    {
        title: "Unified Command Center",
        desc: "Monitor all security feeds, utility meters, and resident requests from a single, intuitive dashboard.",
        dark: true,
    },
    {
        title: "Scalable Infrastructure",
        desc: "Our systems grow with your community, supporting hundreds of villas and apartments effortlessly.",
        wide: true,
    },
    {
        title: "Eco-Friendly living",
        desc: "Drastically reduce the community's carbon footprint with automated lighting and irrigation systems.",
    },
    {
        title: "Panic & Safety Alerts",
        desc: "Instant emergency communication between residents and community security during critical moments.",
        dark: true,
    },
    {
        title: "Smart Parking Solutions",
        desc: "Real-time tracking of parking availability and automated vehicle identification for residents.",
        dark: true,
    },
];

function Communities() {
    return (
        <div className="bg-black min-h-screen text-white">
            <SolutionHero
                bgImage="https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/04/VillasGatedCommunities-scaled.jpg"
                titlePart1="Smart"
                titlePart2="Communities"
                subtitle="Transforming residential projects into intelligent, connected, and secure living ecosystems."
                gradientFrom="emerald-400"
                gradientTo="blue-500"
            />

            <SolutionUseCase
                slides={slides}
                title="Unified <br /> Living <br /> Experience"
            />

            <SolutionHighlights
                cards={cards}
                sectionTitle="Community Highlights"
            />

            <SolutionFeatures
                features={features}
                title="Management at Scale — <br className='hidden md:block' /> Efficiency Simplified"
            />
        </div>
    );
}

export default Communities;