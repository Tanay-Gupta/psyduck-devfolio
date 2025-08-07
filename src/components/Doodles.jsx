import React, { useEffect, useRef } from 'react';

const Doodles = () => {
    const doodleRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            doodleRefs.current.forEach(doodle => {
                if (doodle) {
                    const speed = doodle.dataset.speed;
                    const yPos = -(scrollY * speed / 10);
                    doodle.style.transform = `translateY(${yPos}px)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const registerRef = (el) => {
        if (el && !doodleRefs.current.includes(el)) {
            doodleRefs.current.push(el);
        }
    };

    return (
        <div className="fixed inset-0">
            <div ref={registerRef} className="doodle w-24 h-24 top-[10%] left-[5%]" data-speed="2">
                <svg viewBox="0 0 100 100"><path d="M20 80 Q50 20 80 80" stroke="var(--primary-blue)" fill="none" strokeWidth="2" strokeDasharray="4 4" /></svg>
            </div>
            <div ref={registerRef} className="doodle w-32 h-32 top-[50%] right-[5%]" data-speed="-3">
                <svg viewBox="0 0 100 100"><text x="20" y="70" fontFamily="DotGothic16" fontSize="80" fill="var(--primary-yellow)">?</text></svg>
            </div>
            <div ref={registerRef} className="doodle w-20 h-20 bottom-[15%] left-[10%]" data-speed="1">
                <svg viewBox="0 0 100 100"><path d="M30 70 C50 50, 50 50, 70 30 M30 30 C50 50, 50 50, 70 70" stroke="var(--accent-orange)" fill="none" strokeWidth="3" strokeLinecap="round" /></svg>
            </div>
            <div ref={registerRef} className="doodle w-40 h-40 top-[75%] right-[15%]" data-speed="2.5">
                <svg viewBox="0 0 100 100"><path d="M20,50 C40,20 60,20 80,50 S60,80 40,80" stroke="var(--primary-blue)" fill="none" strokeWidth="2" strokeLinecap="round" /></svg>
            </div>
            <div ref={registerRef} className="doodle w-16 h-16 top-[25%] right-[20%]" data-speed="-1.5">
                <svg viewBox="0 0 100 100"><path d="M50,20 L60,40 L80,45 L65,60 L70,80 L50,70 L30,80 L35,60 L20,45 L40,40 Z" fill="var(--primary-yellow)" opacity="0.7" /></svg>
            </div>
        </div>
    );
};

export default Doodles;