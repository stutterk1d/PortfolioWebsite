import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../context/PortfolioContext';

export default function ExperienceList() {
  const { experience } = useContext(PortfolioContext);

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1 // Cascades items into view [cite: 276, 277]
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 }, // Initial invisible state 
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring', // Applies organic physics 
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}
    >
      {experience.map((jobData, indexNumber) => (
        <motion.div key={indexNumber} variants={itemVariants}>
          <h3>{jobData.position} at {jobData.company}</h3>
          <small>{jobData.startDate} to {jobData.endDate}</small>
          <p style={{ fontWeight: 600, marginTop: '16px' }}>{jobData.summary}</p>
          <p>{jobData.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}