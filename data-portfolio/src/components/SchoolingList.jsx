import React from 'react';

export default function SchoolingList({ education }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.69cm' }}>
      {education.map((schoolData, indexNumber) => (
        <article key={indexNumber} style={{ fontSize: '1.2rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{schoolData.institution}</h3>
            <span style={{ fontWeight: 'bold' }}>{schoolData.location}</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2cm' }}>
            <span style={{ fontStyle: 'italic', fontWeight: 600 }}>{schoolData.degree}</span>
            <small>{schoolData.startDate} - {schoolData.endDate}</small>
          </div>
          
        </article>
      ))}
    </div>
  );
}