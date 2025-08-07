import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ProjectCard = ({ imgSrc, title, description, link }) => (
    <div className="project-card bg-white rounded-xl overflow-hidden">
        <img src={imgSrc} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6 md:p-8">
            <h3 className="font-heading text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={link} className="font-bold text-[var(--primary-blue)] hover:underline">View &rarr;</a>
        </div>
    </div>
);

const Projects = () => {
    const revealRef = useScrollReveal({ threshold: 0.1 });

    const projectData = [
        {
            imgSrc: "https://raw.githubusercontent.com/Tanay-Gupta/tanay-gupta.github.io/refs/heads/main/assets/assets/images/projects/contesthunt/2.png",
            title: "Contest Hunt - Coding Calendar",
            description: "A full-stack app to track coding contests, hackathons, and bounty events across 15+ platforms, helping 1K+ users stay updated.",
            link: "https://play.google.com/store/apps/details?id=com.miraidyo.contesthunt"
        },
        {
            imgSrc: "https://github.com/Tanay-Gupta/tanay-gupta.github.io/blob/main/assets/assets/images/projects/roastmyresume/1.png?raw=truehttps://raw.githubusercontent.com/Tanay-Gupta/tanay-gupta.github.io/refs/heads/main/assets/assets/images/projects/roastmyresume/1.png",
            title: "RoastMyResume",
            description: "RoastMyResume is an innovative web application that leverages AI to provide witty, honest, and constructive feedback on resumes. The application helps users transform their lackluster CVs into job-winning powerhouses through a humorous yet effective roasting process.",
            link: "https://roastmyresume.streamlit.app/"
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