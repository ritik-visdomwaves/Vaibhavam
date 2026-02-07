import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
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

    const handleLinkClick = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full backdrop-blur-xl text-white px-4 md:px-6 py-4 flex items-center justify-between z-[100] border-b border-white/10">

                {/* Logo */}
                <Link
                    to="/"
                    onClick={handleLinkClick}
                    className="flex flex-col cursor-pointer group z-[10]"
                >
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
                    <Link
                        to="/"
                        onClick={handleLinkClick}
                        className="text-white font-semibold hover:text-blue-200 transition-colors"
                    >
                        Home
                    </Link>

                    <div
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('solutions')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="flex items-center gap-1.5 text-white font-medium group-hover:text-blue-200 cursor-pointer py-1 transition-colors">
                            <span>Solutions</span>
                            <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                        </div>

                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-neutral-950/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 z-50 overflow-hidden ${activeDropdown === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                            <div className="p-2">
                                {solutions.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        onClick={handleLinkClick}
                                        className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        to="/services"
                        onClick={handleLinkClick}
                        className="text-white font-medium hover:text-blue-200 transition-colors"
                    >
                        Services
                    </Link>

                    <div
                        className="relative group"
                        onMouseEnter={() => setActiveDropdown('company')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="flex items-center gap-1.5 text-white font-medium group-hover:text-blue-200 cursor-pointer py-1 transition-colors">
                            <span>Company</span>
                            <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                        </div>

                        {/* Dropdown Menu */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-neutral-950/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 z-50 overflow-hidden ${activeDropdown === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                            <div className="p-2">
                                {company.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        onClick={handleLinkClick}
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
                    <Link
                        to="/contact"
                        onClick={handleLinkClick}
                        className="hidden sm:block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-all shadow-lg hover:shadow-white/10"
                    >
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

            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-x-0 top-0 bg-black text-white z-[10000] flex flex-col p-8 pt-32 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b border-white/10 rounded-b-[2rem] max-h-[90vh] overflow-y-auto"
                    >
                        {/* Mobile Logo (Top Left) */}
                        <div className="absolute top-8 left-8">
                            <Link
                                to="/"
                                onClick={handleLinkClick}
                                className="flex flex-col cursor-pointer group"
                            >
                                <h1 className="text-xl font-bold tracking-wider bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
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
                                            className="text-[10px] text-gray-400"
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </div>
                            </Link>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-8 p-2 text-white/70 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col gap-6">
                            <Link
                                to="/"
                                onClick={handleLinkClick}
                                className="text-2xl font-medium hover:text-blue-200 transition-colors"
                            >
                                Home
                            </Link>

                            {/* Solutions Accordion */}
                            <div className="space-y-4">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                                    className="w-full flex items-center justify-between text-2xl font-medium hover:text-blue-200 transition-colors"
                                >
                                    <span>Solutions</span>
                                    <ChevronDown
                                        size={24}
                                        className={`transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {activeDropdown === 'solutions' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-4 pl-4 pt-2 border-l border-white/10 ml-1">
                                                {solutions.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        to={item.path}
                                                        onClick={handleLinkClick}
                                                        className="text-lg text-gray-400 hover:text-white"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link
                                to="/services"
                                onClick={handleLinkClick}
                                className="text-2xl font-medium hover:text-blue-200 transition-colors"
                            >
                                Services
                            </Link>

                            {/* Company Accordion */}
                            <div className="space-y-4">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                                    className="w-full flex items-center justify-between text-2xl font-medium hover:text-blue-200 transition-colors"
                                >
                                    <span>Company</span>
                                    <ChevronDown
                                        size={24}
                                        className={`transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {activeDropdown === 'company' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-4 pl-4 pt-2 border-l border-white/10 ml-1">
                                                {company.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        to={item.path}
                                                        onClick={handleLinkClick}
                                                        className="text-lg text-gray-400 hover:text-white"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

