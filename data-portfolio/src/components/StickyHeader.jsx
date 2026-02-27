import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function StickyHeader({ refs }) {
  const { basics } = useContext(PortfolioContext);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky-header">
      <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <span style={{ fontWeight: 700, marginRight: '64px' }}>{basics.name}</span>
        <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection(refs.experience); }}>
          Experience
        </a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection(refs.projects); }}>
          Projects
        </a>
        <a href="#schooling" onClick={(e) => { e.preventDefault(); scrollToSection(refs.schooling); }}>
          Education
        </a>
      </nav>
    </header>
  );
}