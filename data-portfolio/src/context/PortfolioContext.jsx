import React, { createContext } from 'react';
import portfolioData from '../portfolio.json';

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const { experience, projects, schooling, basics } = portfolioData;

  return (
    <PortfolioContext.Provider value={{ experience, projects, schooling, basics }}>
      {children}
    </PortfolioContext.Provider>
  );
};