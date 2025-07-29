import React from 'react';
import { motion } from 'framer-motion';
import '../styling/Experience.css';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Kaj Technologies',
    duration: 'Mar 2024 – June 2025',
    description: 'Led a team to build scalable data platforms and web apps for financial reporting. Increased product functionality by 35%. Integrated third-party APIs such as Daraja API for mobile payments. Led the API integration project, ensuring smooth implementation and alignment with business goals'
  },
  {
    role: 'Machine Learning Engineer and Software Engineer',
    company: 'Upwork',
    duration: 'April 2024 – July 2025',
    description: 'Worked on ML models to predict repayment likelihood and reduce default rates. Led a team of 4 developers in designing and developing software applications. Spearheaded the development of a new feature that increased customer engagement and satisfaction. Developed predictive models using machine learning algorithms like linear regression, decision trees, and Random Forests to generate insights from structured datasets. Implemented data preprocessing techniques to clean and prepare datasets for model training. Built end-to-end machine learning pipelines for clients, including: Data Preprocessing: Utilized Pandas, NumPy and scikit-learn to clean and transform datasets . Model Training: Applied scikit-learn for training and fine tuning models.  Deployment: Deployed predictive models using FastAPI, and Docker, ensuring scalability and reliability.'
  },
  
  {
    role: 'Volunteer Research Mathematician',
    company: 'Aga Khan Foundation',
    duration: 'Aug 2021 – Oct 2021',
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
