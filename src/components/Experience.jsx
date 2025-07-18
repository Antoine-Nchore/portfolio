import React from 'react';
import { motion } from 'framer-motion';
import '../styling/Experience.css';

const experiences = [
  {
    role: 'Machine Learning Engineer Intern',
    company: 'TenSpot',
    duration: 'April 2021 – Dec 2024',
    description: 'Worked on ML models to predict repayment likelihood and reduce default rates.'
  },
  {
    role: 'Software Engineer',
    company: 'Kaj Technologies',
    duration: 'Mar 2023 – Nov 2023',
    description: 'Led a team to build scalable data platforms and web apps for financial reporting.'
  },
  {
    role: 'Volunteer Data Scientist',
    company: 'Aga Khan Foundation',
    duration: 'Aug 2022 – Oct 2022',
    description: 'Analyzed health survey data to inform public health interventions in Kenya.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="experience-card"
          >
            <h3>{exp.role}</h3>
            <p className="company">{exp.company} · {exp.duration}</p>
            <p className="description">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
