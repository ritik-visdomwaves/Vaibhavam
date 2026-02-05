import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tagline = "Future - Ready - Living";

    const solutions = [
        { name: "Essential Smart Living Solutions", path: "/solutions/essential" },
        { name: "Professional Smart Automation Systems", path: "/solutions/professional" },
        { name: "Intelligent Living for Gated Communities", path: "/solutions/communities" },
        { name: "Customized Smart Homes for Villas", path: "/solutions/villas" },
        { name: "Luxury Automation for Developers & Builders", path: "/solutions/developers" }
    ];

    const company = [
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full backdrop-blur-xl text-white px-4 md:px-6 py-4 flex items-center justify-between z-[100] border-b border-white/10">

                {/* Logo */}
                <Link to="/" className="flex flex-col cursor-pointer group z-[110]">
                    <h1 className="text-xl md:text-2xl font-bold tracking-wider bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-pink-200 transition-all duration-500">
                        VAIBHAVAM
                    </h1>
                    <div className="flex overflow-hidden">
                        {tagline.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.05,
                                    ease: "easeOut"
                                }}
                                className="text-[10px] md:text-xs text-gray-200 group-hover:text-gray-300 transition-colors"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>
                </Link>

                {/* Center Menu (Desktop) */}
                <div className="hidden md:flex items-center gap-8 bg-neutral-900/60 transition-all duration-300 backdrop-blur-md px-10 py-2.5 rounded-full border border-white/20 hover:border-white/40 shadow-lg">
                    <Link to="/" className="text-white font-semibold hover:text-blue-200 transition-colors">
                        Home
                    </Link>

                    <div className="relative group">
                        <div className="flex items-center gap-1.5 text-white font-medium group-hover:text-blue-200 cursor-pointer py-1 transition-colors">
                            <span>Solutions</span>
                            <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-neutral-950/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
                            <div className="p-2">
                                {solutions.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/services" className="text-white font-medium hover:text-blue-200 transition-colors">
                        Services
                    </Link>

                    <div className="relative group">
                        <div className="flex items-center gap-1.5 text-white font-medium group-hover:text-blue-200 cursor-pointer py-1 transition-colors">
                            <span>Company</span>
                            <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-neutral-950/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
                            <div className="p-2">
                                {company.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Right Side Tools */}
                <div className="flex items-center gap-4">
                    <Link to="/contact" className="hidden sm:block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-all shadow-lg hover:shadow-white/10">
                        Contact Us
                    </Link>

                    {/* Hamburger Menu Icon */}
                    <button
                        className="md:hidden text-white p-2 z-[110]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-black z-[100] flex flex-col p-8 pt-28 overflow-y-auto"
                        >
                            <div className="flex flex-col gap-6">
                                <Link
                                    to="/"
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-semibold border-b border-white/10 pb-4"
                                >
                                    Home
                                </Link>

                                <div className="space-y-4">
                                    <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold">Solutions</h3>
                                    <div className="flex flex-col gap-3 pl-4">
                                        {solutions.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.path}
                                                onClick={() => setIsOpen(false)}
                                                className="text-lg text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to="/services"
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-semibold border-b border-white/10 pb-4"
                                >
                                    Services
                                </Link>

                                <div className="space-y-4">
                                    <h3 className="text-gray-500 uppercase tracking-widest text-xs font-bold">Company</h3>
                                    <div className="flex flex-col gap-3 pl-4">
                                        {company.map((item, index) => (
                                            <Link
                                                key={index}
                                                to={item.path}
                                                onClick={() => setIsOpen(false)}
                                                className="text-lg text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-4 bg-white text-black px-8 py-4 rounded-full font-bold text-center text-xl shadow-xl"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;

