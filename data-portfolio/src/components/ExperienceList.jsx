import React from 'react';

export default function ExperienceList({ experience }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.69cm' }}>
      {experience.map((jobData, indexNumber) => (
        <article key={indexNumber} style={{ fontSize: '1.5rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{jobData.company}</h3>
            <span style={{ fontWeight: 'bold' }}>{jobData.location}</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2cm' }}>
            <span style={{ fontStyle: 'italic', fontWeight: 600 }}>{jobData.position}</span>
            <small>{jobData.startDate} - {jobData.endDate}</small>
          </div>

          <ul style={{ marginTop: '0.42cm', paddingLeft: '0.6cm' }}>
            {jobData.description.map((bulletPoint, pointIndex) => (
              <li key={pointIndex} style={{ marginBottom: '0.2cm' }}>{bulletPoint}</li>
            ))}
          </ul>
          
        </article>
      ))}
    </div>
  );
}