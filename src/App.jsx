import React from 'react';

import Doodles from './components/Doodles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ribbon from './components/Ribbon';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Doodles />
      <Navbar />
      <Hero />

      <div className="container mx-auto px-6 py-10 md:py-20 relative">
        <main>
          <About />
        </main>
      </div>

      <Ribbon bgColor="bg-gray-800" rotation="-rotate-2">
        <span className="mx-4">JAVA</span><span className="text-[var(--primary-blue)] mx-4">*</span>
        <span className="mx-4">SPRING BOOT</span><span className="text-[var(--primary-yellow)] mx-4">*</span>
        <span className="mx-4">PYTHON</span><span className="text-[var(--primary-blue)] mx-4">*</span>
        <span className="mx-4">FLUTTER</span><span className="text-[var(--primary-yellow)] mx-4">*</span>
        <span className="mx-4">REACT.JS</span><span className="text-[var(--primary-blue)] mx-4">*</span>
        <span className="mx-4">AWS</span><span className="text-[var(--primary-yellow)] mx-4">*</span>
      </Ribbon>

      <div className="container mx-auto px-6 py-10 md:py-20 relative">
        <main>
          <Experience />
          <Skills />
          <Projects />
        </main>
      </div>

      <Ribbon bgColor="bg-[var(--accent-orange)]" rotation="rotate-2" reverse={true}>
        <span className="mx-4">LET'S BUILD SOMETHING AMAZING</span><span className="text-yellow-300 mx-4">*</span>
        <span className="mx-4">COLLABORATE</span><span className="text-yellow-300 mx-4">*</span>
        <span className="mx-4">INNOVATE</span><span className="text-yellow-300 mx-4">*</span>
        <span className="mx-4">CREATE</span><span className="text-yellow-300 mx-4">*</span>
      </Ribbon>

      <div className="container mx-auto px-6">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;