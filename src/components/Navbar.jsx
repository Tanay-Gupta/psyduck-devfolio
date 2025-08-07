import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav id="navbar" className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl bg-white/70 backdrop-blur-lg z-50 transition-all duration-300 rounded-full border border-gray-200/80 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}>
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#" className="font-heading text-2xl text-[var(--primary-blue)] tracking-wider">PSY?</a>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#about" className="text-gray-600 hover:text-[var(--primary-blue)] transition-colors">About</a>
                    <a href="#experience" className="text-gray-600 hover:text-[var(--primary-blue)] transition-colors">Experience</a>
                    <a href="#skills" className="text-gray-600 hover:text-[var(--primary-blue)] transition-colors">Skills</a>
                    <a href="#projects" className="text-gray-600 hover:text-[var(--primary-blue)] transition-colors">Projects</a>
                    <a href="#contact" className="bg-[var(--primary-blue)] text-white font-medium py-2 px-5 rounded-full hover:bg-[var(--accent-orange)] transition-all transform hover:scale-105">Contact</a>
                </div>
                <div className="md:hidden">
                    <button id="menu-btn" className="text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
            <div id="mobile-menu" className={`md:hidden bg-white/90 rounded-b-2xl ${isMenuOpen ? '' : 'hidden'}`}>
                <a href="#about" onClick={closeMenu} className="block py-3 px-6 text-sm hover:bg-gray-200">About</a>
                <a href="#experience" onClick={closeMenu} className="block py-3 px-6 text-sm hover:bg-gray-200">Experience</a>
                <a href="#skills" onClick={closeMenu} className="block py-3 px-6 text-sm hover:bg-gray-200">Skills</a>
                <a href="#projects" onClick={closeMenu} className="block py-3 px-6 text-sm hover:bg-gray-200">Projects</a>
                <a href="#contact" onClick={closeMenu} className="block py-3 px-6 text-sm hover:bg-gray-200">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;