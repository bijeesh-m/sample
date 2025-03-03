import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-gray-800">
                            MyLogo
                        </a>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-4">
                        <a
                            href="/"
                            className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            About
                        </a>
                        <a
                            href="/services"
                            className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Services
                        </a>
                        <a
                            href="/contact"
                            className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Mobile Menu with Smooth Transition */}
                <div
                    className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    onClick={toggleMenu}
                ></div>
                <div
                    className={`md:hidden fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a
                            href="/"
                            className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </a>
                        <a
                            href="/services"
                            className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Services
                        </a>
                        <a
                            href="/contact"
                            className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
