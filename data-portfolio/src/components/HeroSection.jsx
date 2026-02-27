import React, { useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PortfolioContext } from '../context/PortfolioContext';

export default function HeroSection() {
  const { basics } = useContext(PortfolioContext);
  
  const { scrollYProgress } = useScroll();

  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const blurTransform = useTransform(scrollYProgress, [0, 0.2], ["blur(0px)", "blur(10px)"]);

  return (
    <section className="section-wrapper hero-wrapper">
      {/* Step 5: Apply the animations */}
      <motion.h1 style={{ opacity: opacityTransform, filter: blurTransform }}>
        {basics.name}
        <br />
        <span style={{ color: 'var(--text-system-gray)' }}>{basics.label}</span>
      </motion.h1>
    </section>
  );
}