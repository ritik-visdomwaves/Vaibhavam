import React from 'react';
import { HiOutlineCpuChip, HiOutlineLightBulb, HiOutlineAdjustmentsHorizontal, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import SolutionHero from '../../shared/components/SolutionHero';
import SolutionHighlights from '../../shared/components/SolutionHighlights';
import SolutionFeatures from '../../shared/components/SolutionFeatures';
import SolutionServiceGrid from '../../shared/components/SolutionServiceGrid';

const developerServices = [
    {
        title: "Sales Velocity",
        desc: "Smart homes sell faster. Offer a future-ready living experience that stands out.",
        image: "https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/631b9647-9133-4862-92eb-588cd48cce02/_05ba1d0c-f1ff-4d66-b102-35d11635c845.jpg",
    },
    {
        title: "Scalable Solutions",
        desc: "From standalone villas to massive townships, our tech scales effortlessly.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Competitive-Market-Positioning-scaled.jpg",
    },
    {
        title: "Premium ROI",
        desc: "Pre-integrated smart tech adds significant value to your project margins.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Higher-Property-Value-scaled.jpg",
    },
    {
        title: "Technical Support",
        desc: "Dedicated project management and 24/7 technical assistance for builders.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Faster-Sales-Cycles-scaled.jpg",
    },
];

const features = [
    {
        icon: HiOutlineCpuChip,
        title: "Developer Focused ROI",
        description: "Increase property value and sales velocity by offering pre-integrated smart living solutions."
    },
    {
        icon: HiOutlineLightBulb,
        title: "Future-Ready Projects",
        description: "Equip your developments with standard-compliant infrastructure that evolves with technology."
    },
    {
        icon: HiOutlineAdjustmentsHorizontal,
        title: "Zero Prep Installation",
        description: "Our wireless solutions require no special wiring, drastically reducing time-to-delivery."
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Project Management Support",
        description: "End-to-end technical support and dedicated project managers for seamless implementation."
    },
    {
        icon: HiOutlineSquare3Stack3D,
        title: "Marketing Edge",
        description: "Stand out in the market with a 'Certified Smart Home' badge that attracts modern homebuyers."
    }
];

const cards = [
    {
        title: "A Legacy of Innovation",
        desc: "Leading the smart home revolution with cutting-edge technology.",
        dark: true,
    },
    {
        title: "Unmatched Ecosystem Integration",
        desc: "Bringing security, automation, and convenience under one platform.",
        wide: true,
    },
    {
        title: "Premium Quality & Design",
        desc: "Crafted for luxury, efficiency, and seamless user experiences.",
    },
    {
        title: "Dedicated Customer Support",
        desc: "End-to-end assistance, from consultation to installation and beyond.",
        dark: true,
    },
    {
        title: "Trusted by Homeowners & Experts",
        desc: "Manage your home with a user-friendly app and seamless automation.",
        dark: true,
    },
];

function Developers() {
    return (
        <div className="bg-black min-h-screen text-white">
            <SolutionHero
                bgImage="https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/04/DevelopersBuildersLuxuryHomes-scaled.jpg"
                titlePart1="Builder"
                titlePart2="& Developers"
                subtitle="Empowering real estate developers with scalable, value-adding smart home technologies."
                gradientFrom="indigo-400"
                gradientTo="cyan-500"
            />

            <SolutionServiceGrid
                services={developerServices}
                sectionLabel="Highlights"
            />

            <SolutionHighlights
                cards={cards}
                sectionTitle="Developer Highlights"
            />

            <SolutionFeatures
                features={features}
                title="Builder Excellence — <br className='hidden md:block' /> Innovation for Growth"
            />
        </div>
    );
}

export default Developers;