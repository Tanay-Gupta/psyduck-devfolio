import React from 'react';

const Ribbon = ({ children, bgColor, rotation, reverse = false }) => {
    const marqueeStyle = reverse ? { animationDirection: 'reverse' } : {};

    return (
        <section className={`my-16 md:my-24 py-4 text-white shadow-xl transform ${rotation} overflow-hidden ${bgColor}`}>
            <div className="marquee">
                <div className="marquee-content font-heading text-xl" style={marqueeStyle}>
                    {children}
                    {/* Duplicate content for seamless scroll */}
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Ribbon;