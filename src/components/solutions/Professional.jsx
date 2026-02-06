import React from 'react';
import { HiOutlineCpuChip, HiOutlineLightBulb, HiOutlineAdjustmentsHorizontal, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import SolutionHero from '../../shared/components/SolutionHero';
import SolutionUseCase from '../../shared/components/SolutionUseCase';
import SolutionHighlights from '../../shared/components/SolutionHighlights';
import SolutionFeatures from '../../shared/components/SolutionFeatures';

const features = [
    {
        icon: HiOutlineCpuChip,
        title: "High-Performance Logic",
        description: "Industrial-grade processing power for complex automation logic and zero latency."
    },
    {
        icon: HiOutlineLightBulb,
        title: "Precision Control",
        description: "Fine-tune every aspect of your environment with 0.1% accuracy in dimming and climate."
    },
    {
        icon: HiOutlineAdjustmentsHorizontal,
        title: "Deep Integration",
        description: "Seamlessly bridge legacy systems with modern IoT protocols for complete unity."
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Fortified Security",
        description: "Military-grade encryption and biometric authentication for restricted zones."
    },
    {
        icon: HiOutlineSquare3Stack3D,
        title: "Advanced Diagnostics",
        description: "Real-time system health monitoring and predictive maintenance alerts."
    }
];

const slides = [
    {
        time: "8:30 AM",
        title: "Conference Mode",
        desc: "Automated shades, projector deployment, and acoustic optimization with a single tap.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Wake-up-to-perfect-mornings.png",
    },
    {
        time: "12:00 PM",
        title: "Energy Optimization",
        desc: "System dynamically redistributes power and adjusts HVAC based on room occupancy.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Stay-in-Control-Wherever-You-Are.png",
    },
    {
        time: "6:00 PM",
        title: "Secure Lockdown",
        desc: "Automatically securing all entry points and enabling encrypted remote monitoring.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/A-Secure-Restful-Night.png",
    },
];

const cards = [
    {
        title: "Mission Critical Reliability",
        desc: "Redundant systems and fail-safe protocols ensure your automation never goes offline.",
        dark: true,
    },
    {
        title: "Professional Grade Hardware",
        desc: "Built with components designed for 24/7 operation and extreme environmental conditions.",
        wide: true,
    },
    {
        title: "Bespoke Architectures",
        desc: "Custom-engineered solutions tailored specifically to the unique needs of professional spaces.",
    },
    {
        title: "Unified Interface",
        desc: "A singular, high-performance UI that manages lighting, security, and AV seamlessly.",
        dark: true,
    },
    {
        title: "Global Remote Access",
        desc: "Securely manage your professional systems from anywhere in the world with low latency.",
        dark: true,
    },
];

function Professional() {
    return (
        <div className="bg-black min-h-screen text-white">
            <SolutionHero
                bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070"
                titlePart1="Professional"
                titlePart2="Systems"
                subtitle="Advanced automation solutions engineered for reliability, precision, and enterprise-grade performance."
                gradientFrom="slate-400"
                gradientTo="blue-600"
            />

            <SolutionUseCase
                slides={slides}
                title="Precision <br /> At Every <br /> Level"
            />

            <SolutionHighlights
                cards={cards}
                sectionTitle="System Highlights"
            />

            <SolutionFeatures
                features={features}
                title="Professional Excellence — <br className='hidden md:block' /> Beyond Automation"
            />
        </div>
    );
}

export default Professional;