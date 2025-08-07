import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience = () => {
    const sectionRef = useScrollReveal({ threshold: 0.1 });
    const item1Ref = useScrollReveal({ threshold: 0.1 });
    const item2Ref = useScrollReveal({ threshold: 0.1 });
    const item3Ref = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="experience" ref={sectionRef} className="my-16 md:my-24 reveal">
            <h2 className="font-heading text-4xl md:text-5xl text-center mb-16">My Evolution</h2>
            <div className="relative max-w-4xl mx-auto timeline-container">
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-300 hidden md:block"></div>
                <div className="space-y-12 md:space-y-20">
                    {/* Accenture */}
                    <div className="relative flex items-center justify-between timeline-item">
                        <div className="w-full md:w-5/12 timeline-content">
                            <div ref={item1Ref} className="bg-white p-6 rounded-lg shadow-lg reveal">
                                <h3 className="font-heading text-2xl text-[var(--primary-blue)]">Psychic Power Unleashed</h3>
                                <p className="text-gray-500 my-1">Accenture | Sep 2024 - Present</p>
                                <p className="text-gray-600 text-sm">Here, my skills evolved. I built and scaled RESTful APIs, handled 10K+ daily requests, and implemented robust security with JWT and RBAC. This is where I turned complex system requirements into secure, efficient realities.</p>
                            </div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[var(--accent-orange)] rounded-full border-4 border-white timeline-dot"></div>
                        <div className="w-full md:w-5/12 flex justify-center timeline-image">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/200x200/00A9FF/FFFFFF?text=Golduck'; }} alt="Golduck" className="w-40 h-40 object-contain transition-transform duration-500 hover:scale-110" />
                        </div>
                    </div>
                    {/* MAQ Software */}
                    <div className="relative flex items-center justify-between timeline-item image-left">
                        <div className="w-full md:w-5/12 flex justify-center timeline-image">
                            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/200x200/FFC700/FFFFFF?text=Psyduck'; }} alt="Determined Psyduck" className="w-36 h-36 object-contain transition-transform duration-500 hover:rotate-6" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[var(--primary-blue)] rounded-full border-4 border-white timeline-dot"></div>
                        <div className="w-full md:w-5/12 timeline-content">
                            <div ref={item2Ref} className="bg-white p-6 rounded-lg shadow-lg reveal">
                                <h3 className="font-heading text-2xl text-[var(--primary-blue)]">Taming Terabytes</h3>
                                <p className="text-gray-500 my-1">MAQ Software | Sep 2023 - Jul 2024</p>
                                <p className="text-gray-600 text-sm">At MAQ, I faced my first major "headache": processing terabytes of financial data. I engineered a data pipeline with Python and SQL that boosted reporting accuracy to over 99%.</p>
                            </div>
                        </div>
                    </div>
                    {/* The Internet Folks */}
                    <div className="relative flex items-center justify-between timeline-item">
                        <div className="w-full md:w-5/12 timeline-content">
                            <div ref={item3Ref} className="bg-white p-6 rounded-lg shadow-lg reveal">
                                <h3 className="font-heading text-2xl text-[var(--primary-blue)]">First Steps into the Arena</h3>
                                <p className="text-gray-500 my-1">The Internet Folks | Jul 2023 - Sep 2023</p>
                                <p className="text-gray-600 text-sm">My journey began here. I developed a mobile app with Flutter and a React.js admin dashboard, learning to balance user needs with platform efficiency and reaching a 10K+ user base.</p>
                            </div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[var(--primary-yellow)] rounded-full border-4 border-white timeline-dot"></div>
                        <div className="w-full md:w-5/12 flex justify-center timeline-image">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/200x200/FFC700/FFFFFF?text=Psyduck'; }} alt="Curious Psyduck" className="w-40 h-40 object-contain transition-transform duration-500 hover:scale-110" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;