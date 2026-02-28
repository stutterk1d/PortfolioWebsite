import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import ExperienceList from './components/ExperienceList';
import ProjectGrid from './components/ProjectGrid';
import SchoolingList from './components/SchoolingList';
import portfolioData from './data.json';
import './index.css';

export default function App() {
  return (
    <div className="portfolio-container">
      <main>
        <HeaderComponent personalInfo={portfolioData.personalInfo} summary={portfolioData.summary} />
        
        <section id="experience">
          <h2>Experience</h2>
          <ExperienceList experience={portfolioData.experience} />
        </section>
        
        <section id="projects">
          <h2>Projects</h2>
          <ProjectGrid projects={portfolioData.projects} />
        </section>
        
        <section id="schooling">
          <h2>Education</h2>
          <SchoolingList education={portfolioData.education} />
        </section>
      </main>
    </div>
  );
}