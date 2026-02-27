import React, { useRef } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import StickyHeader from './components/StickyHeader';
import SectionWrapper from './components/SectionWrapper';
import './index.css';

export default function App() {
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const schoolingRef = useRef(null);

  const sectionRefs = {
    experience: experienceRef,
    projects: projectsRef,
    schooling: schoolingRef,
  };

  return (
    <PortfolioProvider>
      <div className="portfolio-container">
        <StickyHeader refs={sectionRefs} />
        <main>
          {/* Hero section */}
          <section className="section-wrapper hero-wrapper">
            <h1>{/* Your headline goes here */}</h1>
          </section>

          {/* Experience section with 6.35 centimetre padding */}
          <SectionWrapper id="experience" sectionRef={experienceRef}>
            <h2>Experience</h2>
            {/* ExperienceList goes here */}
          </SectionWrapper>

          {/* Projects section with 6.35 centimetre padding */}
          <SectionWrapper id="projects" sectionRef={projectsRef}>
            <h2>Projects</h2>
            {/* ProjectGrid goes here */}
          </SectionWrapper>

          {/* Education section with 6.35 centimetre padding */}
          <SectionWrapper id="schooling" sectionRef={schoolingRef}>
            <h2>Education</h2>
            {/* SchoolingList goes here */}
          </SectionWrapper>
        </main>
      </div>
    </PortfolioProvider>
  );
}