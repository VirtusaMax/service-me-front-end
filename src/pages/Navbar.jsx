// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import profileIcon from '../assets/profile-icon.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#0b0018] text-white p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Service Me Logo" className="w-16 h-10" />
                </div>

                 <div className="hidden md:flex ml-auto space-x-6">
                    <a href="/" className="hover:underline">HOME</a>
                    <a href="/about" className="hover:underline">ABOUT US</a>
                    <a href="/find-job" className="hover:underline">FIND JOB</a>
                    <a href="/services" className="hover:underline">SERVICES</a>
                </div>

                 <div className="flex items-center space-x-4 md:ml-6">
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
                        POST JOB
                    </button>
                    <img
                        src={profileIcon}
                        alt="Profile Icon"
                        className="w-10 h-10 rounded-full cursor-pointer"
                    />
                </div>

                 <button
                    className="block md:hidden focus:outline-none ml-auto"
                    onClick={toggleNavbar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

             {isOpen && (
                <div className="md:hidden space-y-4 mt-4 text-center">
                    <a href="/" className="block hover:underline">HOME</a>
                    <a href="/about" className="block hover:underline">ABOUT US</a>
                    <a href="/find-job" className="block hover:underline">FIND JOB</a>
                    <a href="/services" className="block hover:underline">SERVICES</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
