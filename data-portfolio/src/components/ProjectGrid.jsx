import React from 'react';

export default function ProjectGrid({ projects }) {
  return (
     <div style={{ display: 'flex', flexDirection: 'column', gap: '3.17cm' }}>
       {projects.map((projectData, indexNumber) => (
         <article key={indexNumber}>
           <h3>{projectData.name}</h3>
           <a href={projectData.url} target="_blank" rel="noreferrer">{projectData.linkLabel}</a>
           <p style={{ marginTop: '0.42cm', fontWeight: 600 }}>{projectData.summary}</p>
           
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