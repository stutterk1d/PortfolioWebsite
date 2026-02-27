import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';

export default function SimpleFooter() {
  const { basics } = useContext(PortfolioContext);

  return (
    <footer style={{ padding: '120px 0', textAlign: 'center', borderTop: '1px solid rgba(29, 29, 31, 0.1)', marginTop: '120px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
        <a href={`mailto:${basics.email}`}>Email</a>
        <a href={`https://github.com/${basics.github}`} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  );
}