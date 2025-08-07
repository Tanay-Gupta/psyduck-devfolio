import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
    const revealRef = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="contact" ref={revealRef} className="my-16 md:my-24 reveal">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-lg border border-gray-200/50 text-center">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/150x150/F8F9FA/374151?text=Let%27s+Talk!'; }} alt="Shiny Psyduck" className="w-32 h-32 mx-auto mb-4" />
                <h2 className="font-heading text-3xl md:text-4xl mb-4">Got a Headache?</h2>
                <p className="text-lg mb-8">If you have a project or a problem that's giving you a headache, let's talk. I'm ready to unleash some psychic power on it.</p>
                
                {/* --- FORM --- */}
                <form 
                    action="mailto:tanaygupta811@gmail.com" 
                    method="POST" 
                    encType="text/plain"
                >
                {/* --- FORM  --- */}

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <input required type="text" name="Name" className="w-full px-5 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:border-[var(--primary-blue)] transition" placeholder="Your Name" />
                        <input required type="email" name="Email" className="w-full px-5 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:border-[var(--primary-blue)] transition" placeholder="Your Email" />
                    </div>
                    <div className="mb-6">
                        <textarea required name="Message" rows="5" className="w-full px-5 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:border-[var(--primary-blue)] transition" placeholder="Tell me about your project headache..."></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-[var(--primary-yellow)] text-gray-800 font-bold py-3 px-10 rounded-full hover:bg-[var(--accent-orange)] hover:text-white transition duration-300 transform hover:scale-105 shadow-md">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;