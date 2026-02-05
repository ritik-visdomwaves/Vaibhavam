import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-20 bg-black text-white pt-16 pb-8 px-6 md:px-12 font-sans">
            {/* <div className="border-t border-gray-800 pb-10"></div> */}
            <div className="max-w-7xl mx-auto">
                <div className="border-t border-gray-800 pb-10"></div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Column 1: Visit Us (Width: 5 cols) */}
                    <div className="md:col-span-5 space-y-6">
                        <h3 className="text-xl font-medium mb-6 ps-3">Visit Us</h3>

                        <div className="flex flex-col md:flex-row gap-8 text-gray-300 text-sm leading-relaxed ps-3">
                            <div className="flex-1">
                                <p>Vaibhavam Private Limited</p>
                                <p>4st Floor, vijay Apartment,</p>
                                <p>Venkataraman Colony, Erra Manzil,</p>
                                <p>Hyderabad, Telangana</p>
                                <p>500082</p>
                            </div>

                            <div className="flex-1 space-y-1">
                                <p>Mail: info@vaibhavam.com</p>
                                <p>Phone: +91 9065423845</p>
                            </div>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="md:col-span-1"></div>

                    {/* Column 2: Menu (Width: 2 cols) */}
                    <div className="md:col-span-2 space-y-6">
                        <h3 className="text-xl font-medium mb-6">Menu</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blogs</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Get in touch (Width: 4 cols) */}
                    <div className="md:col-span-4 space-y-6">
                        <h3 className="text-xl font-medium mb-6">Get in touch</h3>
                        <div className="grid grid-cols-3 gap-4 w-max">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <FaFacebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <FaYoutube className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                                <FaPinterest className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800"></div>
                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                    <p>© {currentYear} Vaibhavam. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/alexa-privacy" className="hover:text-white transition-colors">Alexa Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer