import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
    const revealRef = useScrollReveal({ threshold: 0.1 });

    const skillCategories = [
        { title: "Languages", skills: ["Java", "Python", "SQL", "Dart", "JavaScript"] },
        { title: "Backend", skills: ["Spring Boot", "REST APIs", "Microservices", "Apache Kafka"] },
        { title: "Frontend", skills: ["Flutter", "React.js", "HTML5 & CSS3"] },
        { title: "Databases", skills: ["MongoDB", "Redis", "Firebase", "SQL"] },
        { title: "DevOps", skills: ["AWS", "Docker", "Git & GitHub", "Linux"] }
    ];

    return (
        <section id="skills" ref={revealRef} className="my-16 md:my-24 reveal">
            <h2 className="font-heading text-4xl md:text-5xl text-center mb-12">My Arsenal of Powers</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
                {skillCategories.map(category => (
                    <div key={category.title} className="space-y-2">
                        <h3 className="font-heading text-xl mb-2 text-[var(--primary-blue)]">{category.title}</h3>
                        {category.skills.map(skill => <p key={skill}>{skill}</p>)}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;