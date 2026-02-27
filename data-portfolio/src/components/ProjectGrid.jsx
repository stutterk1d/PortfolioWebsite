import React, { useRef, useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PortfolioContext } from '../context/PortfolioContext';

// Helper component for the cinematic text effect
function CinematicParagraph({ textString }) {
  const paragraphRef = useRef(null);
  
  // Tracks the bounding box of this specific paragraph 
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 85%", "end 50%"]
  });

  // Splits the string into individual words 
  const wordArray = textString.split(" ");

  return (
    <p ref={paragraphRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
      {wordArray.map((singleWord, indexNumber) => {
        const stepSize = 1 / wordArray.length;
        const startPoint = indexNumber * stepSize;
        const endPoint = startPoint + stepSize;
        
        // Maps opacity to the exact scroll progress 
        const wordOpacity = useTransform(scrollYProgress, [startPoint, endPoint], [0.2, 1]);

        return (
          // Wraps each word inside a motion.span tag 
          <motion.span key={indexNumber} style={{ opacity: wordOpacity }}>
            {singleWord}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function ProjectGrid() {
  const { projects } = useContext(PortfolioContext);

  return (
     <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
       {projects.map((projectData, indexNumber) => (
         <div key={indexNumber}>
           <h3>{projectData.name}</h3>
           <a href={projectData.url} target="_blank" rel="noreferrer">View Repository</a>
           <p style={{ marginTop: '16px', fontWeight: 600 }}>{projectData.summary}</p>
           
           <CinematicParagraph textString={projectData.description} />
           
           <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
             {projectData.technologies.map((techItem, techIndex) => (
               <small key={techIndex}>{techItem}</small>
             ))}
           </div>
           <p style={{ marginTop: '24px', letterSpacing: '4px' }}>{projectData.sparkline}</p>
         </div>
       ))}
     </div>
  );
}