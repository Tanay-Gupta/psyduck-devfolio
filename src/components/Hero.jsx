
import React from 'react';

import { useSpring, animated } from '@react-spring/web';
const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 20, 
    (x - rect.left - rect.width / 2) / 20,  
    1.05                                   
];

const trans = (x, y, s) => `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Hero = () => {
    const [props, api] = useSpring(() => ({
        xyzs: [0, 0, 1], // Initial state: [x-rotation, y-rotation, scale]
        config: { mass: 5, tension: 350, friction: 40 }, // Physics configuration
    }));

    return (
        <header className="min-h-screen flex flex-col justify-center items-center text-center p-6 pt-28 md:pt-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-yellow)] to-transparent opacity-50"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                <div className="text-center md:text-left z-10">
                    <h1 className="font-heading text-5xl md:text-7xl text-gray-800 mb-4">Tanay Gupta</h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-md">I turn confusing problems into clear, powerful solutions. Welcome to my world.</p>
                    <a href="/Tanay_Gupta_Java_Resume (1).pdf" download className="btn-anime mt-8 inline-block bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
                        <span className="relative z-10">Download Resume</span>
                    </a>
                </div>
                {}
                <animated.div
                    className="relative w-full h-full flex items-center justify-center"
                    onMouseMove={({ clientX: x, clientY: y, currentTarget }) => {
                        const rect = currentTarget.getBoundingClientRect();
                        api.start({ xyzs: calc(x, y, rect) });
                    }}
                    onMouseLeave={() => api.start({ xyzs: [0, 0, 1] })}
                    style={{ transform: props.xyzs.to(trans) }}
                >
                    <div className="absolute w-64 h-64 bg-white rounded-full filter blur-2xl opacity-50"></div>
                    {/* Note: The img tag itself is no longer animated, its parent is */}
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/400x400/FFC700/FFFFFF?text=Psyduck!'; }}
                        alt="Happy Psyduck"
                        className="relative w-80 h-80 object-contain"
                    />
                </animated.div>
            </div>
        </header>
    );
};

export default Hero;