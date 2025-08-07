import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
    const revealRef = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="about" ref={revealRef} className="my-16 md:my-24 reveal">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="font-heading text-3xl md:text-4xl mb-4 text-[var(--primary-blue)]">The Headache is the Beginning.</h2>
                    <p className="text-lg leading-relaxed mb-4">My journey into tech started with a familiar feeling: the nagging puzzle of a complex problem. I've learned that this initial "headache" isn't a setback—it's the first step toward a breakthrough. It's where focus sharpens and creativity sparks.</p>
                </div>
                <div className="flex justify-center">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/200x200/F8F9FA/374151?text=Thinking...'; }} alt="Thinking Psyduck" className="w-48 h-48 object-contain" />
                </div>
            </div>
        </section>
    );
};

export default About;