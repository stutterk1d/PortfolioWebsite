import React, { useRef } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import StickyHeader from './components/StickyHeader';
import SectionWrapper from './components/SectionWrapper';
import HeroSection from './components/HeroSection';
import ExperienceList from './components/ExperienceList';
import ProjectGrid from './components/ProjectGrid';
import SchoolingList from './components/SchoolingList';
import SimpleFooter from './components/SimpleFooter';
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
          <HeroSection />

          <SectionWrapper id="experience" sectionRef={experienceRef}>
            <h2>Experience</h2>
            <ExperienceList />
          </SectionWrapper>

          <SectionWrapper id="projects" sectionRef={projectsRef}>
            <h2>Projects</h2>
            <ProjectGrid />
          </SectionWrapper>

          <SectionWrapper id="schooling" sectionRef={schoolingRef}>
            <h2>Education</h2>
            <SchoolingList />
          </SectionWrapper>
        </main>
        <SimpleFooter />
      </div>
    </PortfolioProvider>
  );
}