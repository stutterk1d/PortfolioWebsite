import React from 'react';

export default function ExperienceList({ experience }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1cm' }}>
      {experience.map((jobData, indexNumber) => (
        <article key={indexNumber}>
          <h3>{jobData.position} at {jobData.company}</h3>
          <small>{jobData.startDate} to {jobData.endDate}</small>
          <p style={{ fontWeight: 600, marginTop: '0.42cm' }}>{jobData.summary}</p>
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