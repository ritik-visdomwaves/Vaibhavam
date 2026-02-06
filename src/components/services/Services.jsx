import React from 'react'
import { motion } from 'framer-motion'
import Section from '../../shared/components/Section'
import GlassCard, { FeatureItem } from '../../shared/components/GlassCard'
import ScrollableCards from '../../shared/components/ScrollableCards'
import OptimizedImage from '../../shared/components/OptimizedImage'
import { CORE_SERVICES, FADE_UP_VARIANTS } from '../../constants'
import { FaHome, FaClipboardList, FaFileInvoice, FaTools, FaCheckDouble, FaCogs, FaHeadset, FaCloudUploadAlt, FaShieldAlt } from 'react-icons/fa'

function Services() {
    return (
        <div className="bg-black min-h-screen text-white">
            {/* Hero Section */}
            <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden top-20">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <OptimizedImage
                        src="https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/04/sivercesBanner.png"
                        alt="Services Hero Background"
                        className="w-full h-full brightness-75 transition-transform duration-1000 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        custom={1}
                        variants={FADE_UP_VARIANTS}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight leading-[1.1]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                Premium
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400">
                                Services & Solutions
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={FADE_UP_VARIANTS}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                            Empowering your smart living experience with cutting-edge technology, professional installation, and lifetime support tailored for your needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Unified Info & Support Section */}
            <Section className="mt-10">
                <div className="space-y-20 md:space-y-32">
                    {/* Row 1: Custom Solutions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch md:h-[95vh] min-h-[600px]">
                        <GlassCard
                            badge="Custom Solutions"
                            title={<>Custom Solutions and<br />Pre-Installation<br />Consultation</>}
                            initialX={-60}
                        >
                            <FeatureItem
                                icon={FaHome}
                                title="Tailored for Your Home"
                                description="Our experts assess your space, preferences, and lifestyle to recommend personalized automation solutions."
                            />
                            <FeatureItem
                                icon={FaClipboardList}
                                title="Site Evaluation"
                                description="Whether under construction, renovating, or fully built, we analyze your electrical setup to ensure compatibility."
                            />
                            <FeatureItem
                                icon={FaFileInvoice}
                                title="Custom BOQ Proposal"
                                description="Get a transparent, item-wise proposal designed specifically for your project requirements."
                            />
                        </GlassCard>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative rounded-3xl overflow-hidden h-full hidden md:block border border-white/10"
                        >
                            <OptimizedImage
                                src="https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2025/04/customeSolutions.png"
                                alt="Smart Home"
                                className="w-full h-full"
                            />
                        </motion.div>
                    </div>

                    {/* Row 2: Installation & Support */}
                    <div className=" -mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch md:h-[97vh] min-h-[600px]">
                        <GlassCard
                            badge="Expert Installation"
                            title="Professional Installation & Setup"
                        >
                            <FeatureItem
                                icon={FaTools}
                                title="Expert Setup"
                                description="Precision installation by certified technicians for maximum performance and durability."
                            />
                            <FeatureItem
                                icon={FaCheckDouble}
                                title="Clean Integration"
                                description="Seamless device integration with zero visible clutter, preserving your home's aesthetic."
                            />
                            <FeatureItem
                                icon={FaCogs}
                                title="Configuration"
                                description="Complete system testing and optimization tailored to your lifestyle and needs."
                            />
                        </GlassCard>

                        <GlassCard
                            badge="Ongoing Support"
                            title="Lifetime Support & Maintenance"
                            delay={0.2}
                        >
                            <FeatureItem
                                icon={FaHeadset}
                                title="24/7 Assistance"
                                description="Remote and on-site support whenever you need it, ensuring your system never skips a beat."
                            />
                            <FeatureItem
                                icon={FaCloudUploadAlt}
                                title="Regular Updates"
                                description="Keeping your system secure, stable, and up-to-date with the latest feature improvements."
                            />
                            <FeatureItem
                                icon={FaShieldAlt}
                                title="Reliable Uptime"
                                description="Proactive monitoring and maintenance to ensure zero interruptions in your smart home experience."
                            />
                        </GlassCard>
                    </div>
                </div>
            </Section>

            {/* Our Core Services Section (Scrollable) */}
            <Section
                badge="Our Expertise"
                title="Premier Smart Solutions"
                description="Explore our range of core services designed to transform your ordinary house into an extraordinary smart living sanctuary."
                bgImage="https://cdn-ilehjed.nitrocdn.com/APYgFrAmgaYxgqxKiSwZYQlzBEmspbRH/assets/images/optimized/rev-8e7c8b2/www.hogarcontrols.com/wp-content/uploads/2026/01/Welcome-to-the-Future-of-Smart-Living.webp"
                className="py-24"
            >
                <ScrollableCards items={CORE_SERVICES} />
            </Section>
        </div>
    )
}

export default Services
