import React from 'react';
import { Mail, Github, Linkedin, Phone, FileDown } from 'lucide-react';

export default function HeaderComponent({ personalInfo, summary }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: '88vh', paddingTop: '5vh' }}>
      <img src={personalInfo.headshotUrl} alt="Headshot" className="headshot" style={{ width: '7.4cm', height: '7.4cm', marginBottom: '1cm' }} />
      <h1 style={{ fontSize: '4rem', margin: '1cm 0' }}>{personalInfo.name}</h1>
      <p style={{ fontSize: '2rem', margin: '0 0 1cm 0' }}>{personalInfo.label}</p>
      
      <div style={{ display: 'flex', gap: '1cm', marginBottom: '1cm', justifyContent: 'center' }}>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
          <Mail size={48} />
        </a>
        <a href={`https://github.com/${personalInfo.github}`} aria-label="GitHub" target="_blank" rel="noreferrer">
          <Github size={48} />
        </a>
        <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <Linkedin size={48} />
        </a>
        <a href={`tel:${personalInfo.phone}`} aria-label="Phone">
          <Phone size={48} />
        </a>
        <a href={personalInfo.cvUrl} aria-label="Download CV" download>
          <FileDown size={48} />
        </a>
      </div>

      <nav style={{ display: 'flex', gap: '1.5cm', marginBottom: '1.5cm', justifyContent: 'center', fontSize: '2.0rem' }}>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#schooling">Education</a>
      </nav>

      <p className="summary-text" style={{ textAlign: 'left', fontSize: '1.5rem', marginTop: '0', lineHeight: '1.5' }}>{summary}</p>
    </section>
  );
}