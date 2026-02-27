import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { PortfolioContext } from '../context/PortfolioContext';

export default function SchoolingList() {
  const { schooling } = useContext(PortfolioContext);

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
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
      {schooling.map((schoolItem, indexNumber) => (
        <motion.div key={indexNumber} variants={itemVariants}>
          <h3>{schoolItem.studyType} in {schoolItem.area}</h3>
          <p style={{ fontWeight: 600, marginTop: '8px' }}>{schoolItem.institution}</p>
          <small>{schoolItem.startDate} to {schoolItem.endDate}</small>
        </motion.div>
      ))}
    </motion.div>
  );
}