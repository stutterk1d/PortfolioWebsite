import React from 'react';

export default function SchoolingList({ education }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.69cm' }}>
      {education.map((schoolItem, indexNumber) => (
        <article key={indexNumber}>
          <h3>{schoolItem.studyType} in {schoolItem.area}</h3>
          <p style={{ fontWeight: 600, marginTop: '0.21cm' }}>{schoolItem.institution}</p>
          <small style={{ color: 'var(--text-secondary)' }}>{schoolItem.startDate} to {schoolItem.endDate}</small>
        </article>
      ))}
    </div>
  );
}