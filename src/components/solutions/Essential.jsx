import React, { useState } from 'react';
import { HiOutlineCpuChip, HiOutlineLightBulb, HiOutlineAdjustmentsHorizontal, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import SolutionHero from '../../shared/components/SolutionHero';
import SolutionUseCase from '../../shared/components/SolutionUseCase';
import SolutionHighlights from '../../shared/components/SolutionHighlights';
import SolutionFeatures from '../../shared/components/SolutionFeatures';

const features = [
    {
        icon: HiOutlineCpuChip,
        title: "Effortless Automation",
        description: "Experience a truly smart home with seamless automation that adapts to your lifestyle."
    },
    {
        icon: HiOutlineLightBulb,
        title: "Cutting-Edge Innovation",
        description: "Leverage the latest technology for a connected, intelligent living space."
    },
    {
        icon: HiOutlineAdjustmentsHorizontal,
        title: "Zero Hassel Setup",
        description: "Professional installation and continuous support ensure a smooth experience."
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Uncompromised Security",
        description: "Advanced encryption and smart access control keep your home protected."
    },
    {
        icon: HiOutlineSquare3Stack3D,
        title: "Smart, Unified Control",
        description: "Control everything with ease through the Hogar app or voice assistants."
    }
];

const slides = [
    {
        time: "7:00 AM",
        title: "Morning Mode",
        desc: "Curtains open and lights gradually brighten to simulate a natural sunrise, helping you start your day refreshed.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Rise-Shine.png",
    },
    {
        time: "9:00 AM",
        title: "Away Mode",
        desc: "Ensure your home is secure and energy-efficient by turning off all electronics and adjusting the thermostat when you leave.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Samrt-Deliveries.png",
    },
    {
        time: "1:00 PM",
        title: "Work Mode",
        desc: "Optimal lighting and temperature settings create a focused environment for maximum productivity during your work hours.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/7-am.png",
    },
    {
        time: "5:00 PM",
        title: "Coming Home Mode",
        desc: "As you arrive, the driveway lights turn on, the doors unlock, and your favorite music begins to play for a personalized welcome.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Personalized-Arrival.png",
    },
    {
        time: "7:00 PM",
        title: "Dinnertime Mode",
        desc: "Warm ambient lighting and the perfect temperature set the stage for a delightful family meal and evening conversation.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Dinnertime.png",
    },
    {
        time: "9:00 PM",
        title: "Movie Mode",
        desc: "Experience the cinema at home with dimmed lights, closed shades, and optimized audio settings for an immersive viewing experience.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Worry-Free-Exit.png",
    },
    {
        time: "11:00 PM",
        title: "Bedtime Mode",
        desc: "With one touch, all doors lock, lights go out, and the security system arms for a peaceful and protected night's sleep.",
        image: "https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/05/Bedtime.png",
    },
];

const cards = [
    {
        title: "Effortless Control at Your Fingertips",
        desc: "Command your home like never before — adjust lighting, temperature, and appliances seamlessly using the Hogar app or voice assistants like Alexa & Google Assistant.",
        dark: true,
    },
    {
        title: "Unparalleled Comfort & Convenience",
        desc: "Experience a home that adapts to your lifestyle — smart curtains and blinds adjust automatically for the perfect blend of privacy and ease.",
        wide: true,
    },
    {
        title: "Intelligent Energy Savings",
        desc: "Let your home work smarter, not harder — automate ACs, lights, and fans to cut down power usage and reduce energy bills without compromising comfort.",
    },
    {
        title: "Security That Moves With You",
        desc: "Stay connected to your home wherever you are — monitor visitors, control access, and unlock doors remotely with smart video doorbells and locks.",
        dark: true,
    },
    {
        title: "Lighting, Just the Way You Like It",
        desc: "From cozy evenings to productive mornings, personalize brightness, moods, and schedules effortlessly with intuitive touch panels and controllers.",
        dark: true,
    },
];

function Essential() {
    return (
        <div className="bg-black min-h-screen text-white">
            <SolutionHero
                bgImage="https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Welcome-to-the-Future-of-Smart-Living.webp"
                titlePart1="Essential"
                titlePart2="Smart Home Solutions"
                subtitle="Affordable and reliable smart living essentials designed for comfort, security, and everyday convenience."
            />

            <SolutionUseCase
                slides={slides}
                title="A Smarter <br /> Day with <br /> Vaibhavam"
            />

            <SolutionHighlights
                cards={cards}
            />

            <SolutionFeatures
                features={features}
                title="Everything You Want to Control — <br className='hidden md:block' /> Now at Your Fingertips"
            />
        </div>
    );
}

export default Essential;
