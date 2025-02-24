import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from "../../assets/cpcpestcontrol_logo.png";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth' // Optional: For smooth scrolling
        });
      };

    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" onClick={scrollToTop} className="flex items-center">
                            <img
                                src={LogoImage}
                                className="mr-3 h-16 lg:h-20" // Increased height, responsive with lg:
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/"  onClick={scrollToTop} className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-center">
                        <div class="text-sm text-gray-500 sm:text-center">
                            © 2025
                            <a href="https://cactusbloom.in/" class="hover:underline">
                                CactusBloom
                            </a>
                            . All Rights Reserved.
                        </div>
                    </div>
            </div>
        </footer>
    );
}
