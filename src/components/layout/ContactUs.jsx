import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2, X } from 'lucide-react';

function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        reset();
        setShowSuccessModal(true);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm";
    const labelClasses = "block text-sm font-medium text-gray-400 mb-1.5 ml-1";

    // Hero Section Animations & Styles
    const orbAnimations = [
        {
            animate: { scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1], x: [0, 50, 0], y: [0, -30, 0] },
            transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            className: "absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
        },
        {
            animate: { scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1], x: [0, -40, 0], y: [0, 60, 0] },
            transition: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            className: "absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]"
        }
    ];

    const heroImageMotion = {
        animate: { y: [0, -15, 0], rotate: [0, 1, 0] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    };

    const heroImageMaskStyle = {
        maskImage: 'linear-gradient(to right, black 60%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%), linear-gradient(to bottom, black 70%, transparent 100%)',
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in'
    };

    return (
        <>

            <section className="relative min-h-[85vh] flex items-center justify-center bg-black overflow-hidden border-b border-white/5">

                {/* Atmospheric Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {orbAnimations.map((orb, index) => (
                        <motion.div
                            key={index}
                            animate={orb.animate}
                            transition={orb.transition}
                            className={orb.className}
                        />
                    ))}
                </div>

                {/* Hero Content Wrapper */}
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10 w-full">

                    {/* Left Side: Professional Blended Image */}
                    <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: -30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-full max-w-2xl group"
                        >
                            {/* The Image with Advanced Blending */}
                            <div className="relative overflow-hidden rounded-[3rem]">
                                {/* Bottom & Left Blending Gradients */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent z-10" />

                                <motion.img
                                    animate={heroImageMotion.animate}
                                    transition={heroImageMotion.transition}
                                    src="https://wallpapers.com/images/hd/glowing-contact-us-logo-qx58564q7a51etk6.jpg"
                                    alt="Professional Hero Visual"
                                    className="w-full h-auto object-cover opacity-80 mix-blend-screen transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.02]"
                                    style={heroImageMaskStyle}
                                />

                                {/* Floating Glow Points */}
                                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: High-End Typography */}
                    <div className="text-center lg:text-left space-y-8 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="space-y-4"
                        >
                            <h1 className="mt-20 text-5xl md:text-7xl  font-medium tracking-tight text-white leading-[1.05]">
                                Seamless <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-900 block mt-1 pb-3">
                                    Smart Living
                                </span>
                                <span className="text-3xl md:text-5xl font-light text-gray-500 mt-5 block italic">Begins Here</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mx-auto lg:mx-0"
                        >
                            Reach out to <span className="text-white font-medium">Vaibhavam</span> for expert guidance and customized smart home solutions that define the future of living.
                        </motion.p>
                    </div>
                </div>

                {/* Subtle Background Particle Layers */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent" />
                </div>
            </section>

            {/* contact form */}
            <section className="min-h-screen bg-black text-white relative overflow-hidden py-24 px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 relative z-10"
                >
                    {/* Left Side: Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div variants={itemVariants}>
                            <h1 className="text-6xl font-medium tracking-tighter mb-4">
                                LET'S <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                                    CONNECT
                                </span>
                            </h1>
                            <p className="text-gray-300 text-lg max-w-md font-light leading-relaxed">
                                Have a project in mind or just want to say hi? We'd love to hear from you.
                                Let's build something extraordinary together.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                                    <p className="text-lg font-medium">info@vaibhavam.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 shrink-0">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                                    <p className="text-lg font-medium">+91 8448 440 789</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                                    <Clock size={22} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Business Hours</p>
                                    <p className="text-lg font-medium">Mon - Fri: 10:30 AM - 6:30 PM</p>
                                    <p className="text-sm text-gray-500">Closed on Bank Holidays</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="text-blue-400" size={20} />
                                <h3 className="font-semibold italic text-white">HYDERABAD</h3>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Our innovative space is where big ideas come to life. Visit us for a coffee and a chat about the future of automation.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-7">
                        <motion.form
                            variants={itemVariants}
                            onSubmit={handleSubmit(onSubmit)}
                            className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative"
                        >
                            {/* Form Header */}
                            <div className="mb-10">
                                <h3 className="text-2xl font-medium mb-2">Send us a Message</h3>
                                <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name Details */}
                                <div className="space-y-4 md:col-span-2 grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClasses}>First Name *</label>
                                        <input
                                            className={`${inputClasses} cursor-pointer ${errors.firstName ? 'border-red-500/50 ring-red-500/20' : ''}`}
                                            placeholder="Enter first name"
                                            {...register("firstName", { required: "First name is required" })}
                                        />
                                        {errors.firstName && <span className="text-red-500 text-xs mt-1 ml-1">{errors.firstName.message}</span>}
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Last Name *</label>
                                        <input
                                            className={`${inputClasses} cursor-pointer ${errors.lastName ? 'border-red-500/50 ring-red-500/20' : ''}`}
                                            placeholder="Enter last name"
                                            {...register("lastName", { required: "Last name is required" })}
                                        />
                                        {errors.lastName && <span className="text-red-500 text-xs mt-1 ml-1">{errors.lastName.message}</span>}
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div>
                                    <label className={labelClasses}>Phone Number *</label>
                                    <input
                                        className={`${inputClasses} cursor-pointer ${errors.phone ? 'border-red-500/50 ring-red-500/20' : ''}`}
                                        placeholder="Enter 10 digit number"
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: "Phone number must be exactly 10 digits"
                                            }
                                        })}
                                    />
                                    {errors.phone && <span className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</span>}
                                </div>
                                <div>
                                    <label className={labelClasses}>Email Address *</label>
                                    <input
                                        className={`${inputClasses} cursor-pointer ${errors.email ? 'border-red-500/50 ring-red-500/20' : ''}`}
                                        placeholder="name@example.com"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.com$/i,
                                                message: "Email must contain @ and end with .com"
                                            }
                                        })}
                                    />
                                    {errors.email && <span className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</span>}
                                </div>

                                {/* Selection */}
                                <div className="md:col-span-2">
                                    <label className={labelClasses}>I am a...</label>
                                    <select className={`${inputClasses} cursor-pointer`} {...register("category", { required: true })}>
                                        <option value="" className="bg-neutral-900">Select Category</option>
                                        <option className="bg-neutral-900">Home Owner</option>
                                        <option className="bg-neutral-900">Builder</option>
                                        <option className="bg-neutral-900">Architect</option>
                                    </select>
                                </div>

                                {/* Location */}
                                <div>
                                    <label className={labelClasses}>City *</label>
                                    <input
                                        className={`${inputClasses} cursor-pointer`}
                                        placeholder="e.g. Mumbai"
                                        {...register("city", { required: true })}
                                    />
                                </div>
                                <div>
                                    <label className={labelClasses}>State *</label>
                                    <input
                                        className={`${inputClasses} cursor-pointer`}
                                        placeholder="e.g. Maharashtra"
                                        {...register("state", { required: true })}
                                    />
                                </div>

                                {/* Additional Info */}
                                <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClasses}>Property Type *</label>
                                        <select
                                            className={`${inputClasses} cursor-pointer ${errors.propertyType ? 'border-red-500/50 ring-red-500/20' : ''}`}
                                            {...register("propertyType", { required: "Property type is required" })}
                                        >
                                            <option value="" className="bg-neutral-900">Select Property Type</option>
                                            <option className="bg-neutral-900">Villa</option>
                                            <option className="bg-neutral-900">Apartment</option>
                                            <option className="bg-neutral-900">Commercial</option>
                                        </select>
                                        {errors.propertyType && <span className="text-red-500 text-xs mt-1 ml-1">{errors.propertyType.message}</span>}
                                    </div>
                                    <div>
                                        <label className={labelClasses}>Stage of Construction *</label>
                                        <select
                                            className={`${inputClasses} cursor-pointer ${errors.stage ? 'border-red-500/50 ring-red-500/20' : ''}`}
                                            {...register("stage", { required: "Construction stage is required" })}
                                        >
                                            <option value="" className="bg-neutral-900">Select Stage</option>
                                            <option className="bg-neutral-900">Planning</option>
                                            <option className="bg-neutral-900">In Progress</option>
                                            <option className="bg-neutral-900">Completed</option>
                                        </select>
                                        {errors.stage && <span className="text-red-500 text-xs mt-1 ml-1">{errors.stage.message}</span>}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="md:col-span-2">
                                    <label className={labelClasses}>Message</label>
                                    <textarea
                                        rows="4"
                                        className={`${inputClasses} cursor-pointer resize-none`}
                                        placeholder="Tell us about your requirements..."
                                        {...register("message")}
                                    />
                                </div>

                                {/* Footer Actions */}
                                <div className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-6 mt-4">
                                    <div className="flex items-start gap-3 text-sm text-gray-400 max-w-sm">
                                        <input
                                            type="checkbox"
                                            className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500/20 cursor-pointer"
                                            {...register("consent", { required: true })}
                                        />
                                        <span>I agree to the <a href="#" className="text-blue-400 hover:underline cursor-pointer">Privacy Policy</a> and consent to share my information.</span>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="px-8 py-3 font-medium rounded-full bg-white/10 border border-white/10 text-sm text-white/80 hover:bg-white/20 hover:text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
                                    >
                                        Send Message
                                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.form>
                    </div>
                </motion.div>
            </section>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccessModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-[2.5rem] p-10 text-center shadow-2xl overflow-hidden"
                        >
                            {/* Decorative Background Glow */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/20 rounded-full blur-[80px]" />
                            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-600/20 rounded-full blur-[80px]" />

                            {/* Close Button */}
                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>

                            {/* Success Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                                className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-emerald-400"
                            >
                                <CheckCircle2 size={40} />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl font-medium text-white mb-3"
                            >
                                Message Sent Successfully!
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-gray-400 mb-8 leading-relaxed"
                            >
                                Thank you for reaching out. Our team has received your inquiry and will get back to you within 24 hours.
                            </motion.p>

                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setShowSuccessModal(false)}
                                className="w-full py-4 bg-white text-black font-semibold rounded-2xl hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg shadow-white/5"
                            >
                                Great, thanks!
                            </motion.button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ContactUs;
