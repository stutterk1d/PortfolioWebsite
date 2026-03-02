import React from 'react';

export default function ProjectGrid({ projects }) {
  return (
     <div style={{ display: 'flex', flexDirection: 'column', gap: '1.69cm' }}>
       {projects.map((projectData, indexNumber) => (
        <article key={indexNumber} style={{ fontSize: '1.5rem' }}>
           <h3>{projectData.name}</h3>
           <a href={projectData.url} target="_blank" rel="noreferrer">{projectData.linkLabel}</a>
           
           <ul style={{ marginTop: '0.42cm', paddingLeft: '0.6cm' }}>
             {projectData.description.map((bulletPoint, pointIndex) => (
               <li key={pointIndex} style={{ marginBottom: '0.2cm' }}>{bulletPoint}</li>
             ))}
           </ul>
           
           <div style={{ display: 'flex', gap: '0.42cm', marginTop: '0.63cm', color: 'var(--text-secondary)' }}>
             {projectData.technologies.map((techItem, techIndex) => (
               <small key={techIndex}>{techItem}</small>
             ))}
           </div>
         </article>
       ))}
     </div>
  );
}