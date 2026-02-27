import React from 'react';

/**
 * SectionWrapper: Enforces the 8-point grid and massive negative space.
 * @param {Object} props - Component props
 * @param {string} props.id - The HTML ID for navigation anchoring.
 * @param {React.Ref} props.sectionRef - The ref used by StickyHeader for smooth scrolling.
 */
const SectionWrapper = ({ children, id, sectionRef }) => {
  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className="section-wrapper"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;