import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
    const tagline = "Future - Ready - Living";

    return (
        <>
            <nav className="fixed top-0 left-0 w-full backdrop-blur-xl text-white px-6 py-4 flex items-center justify-between z-[100] border-b border-white/10">

                {/* Logo */}
                <Link to="/" className="flex flex-col cursor-pointer group">
                    <h1 className="text-2xl font-bold tracking-wider bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-pink-200 transition-all duration-500">
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
                                className="text-xs text-gray-200 group-hover:text-gray-300 transition-colors"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </div>
                </Link>

                {/* Center Menu */}
                <div className="hidden md:flex items-center gap-8 bg-neutral-900/40 backdrop-blur-md px-8 py-2 rounded-full border border-white/10">
                    <Link to="/" className="text-white font-medium hover:text-gray-300 transition-colors">
                        Home
                    </Link>

                    <div className="relative group">
                        <div className="flex items-center gap-1 text-gray-400 group-hover:text-white cursor-pointer py-2 transition-colors">
                            <span>Solutions</span>
                            <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-72 bg-neutral-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                            <div className="p-2">
                                {[
                                    { name: "Essential Smart Living Solutions", path: "/solutions/essential" },
                                    { name: "Professional Smart Automation Systems", path: "/solutions/professional" },
                                    { name: "Intelligent Living for Gated Communities", path: "/solutions/communities" },
                                    { name: "Customized Smart Homes for Villas", path: "/solutions/villas" },
                                    { name: "Luxury Automation for Developers & Builders", path: "/solutions/developers" }
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 text-gray-400 hover:text-white cursor-pointer transition-colors">
                        <span>Services</span>
                    </div>

                    <div className="relative group">
                        <div className="flex items-center gap-1 text-gray-400 group-hover:text-white cursor-pointer py-2 transition-colors">
                            <span>Company</span>
                            <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        {/* Dropdown Menu */}
                        <div className="absolute top-full left-0 mt-2 w-48 bg-neutral-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                            <div className="p-2">
                                {[
                                    { name: "About Us", path: "/about" },
                                    { name: "Blog", path: "/blog" }
                                ].map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Button */}
                <Link to="/contact" className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-all shadow-lg hover:shadow-white/10">
                    Contact Us
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
