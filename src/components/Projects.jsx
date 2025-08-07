import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProjectCard = ({ imgSrc, title, description, link }) => (
    <div className="project-card bg-white rounded-xl overflow-hidden">
        <img src={imgSrc} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6 md:p-8">
            <h3 className="font-heading text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={link} className="font-bold text-[var(--primary-blue)] hover:underline">View Case Study &rarr;</a>
        </div>
    </div>
);

const Projects = () => {
    const revealRef = useScrollReveal({ threshold: 0.1 });

    const projectData = [
        {
            imgSrc: "https://placehold.co/600x400/00A9FF/FFFFFF?text=Contest+Hunt",
            title: "Contest Hunt - Coding Calendar",
            description: "A full-stack app to track coding contests, hackathons, and bug bounty events across 15+ platforms, helping 1K+ users stay updated.",
            link: "#"
        },
        {
            imgSrc: "https://placehold.co/600x400/FFC700/374151?text=Birdwatcher",
            title: "Birdwatcher's Assistant",
            description: "A mobile App with offline bird species detection and information generation using Python, Flutter, Firebase, and TensorFlow Lite.",
            link: "#"
        }
    ];

    return (
        <section id="projects" ref={revealRef} className="my-16 md:my-24 reveal">
            <h2 className="font-heading text-4xl md:text-5xl text-center mb-12">Project Showcase</h2>
            <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
                {projectData.map(project => <ProjectCard key={project.title} {...project} />)}
            </div>
        </section>
    );
};

export default Projects;