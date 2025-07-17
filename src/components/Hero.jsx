import React from 'react';
import { motion } from 'framer-motion';
import '../styling/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Nchore Antoine
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        Software Engineer · Machine Learning Engineer
      </motion.p>
    </section>
  );
}