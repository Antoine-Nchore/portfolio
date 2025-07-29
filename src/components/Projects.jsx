import React from 'react';
import { motion } from 'framer-motion';
import '../styling/Projects.css';

const projects = [
  {
    title: 'BreeLarry',
    description: 'A full-stack e-commerce web application with, product catalog, shopping cart functionality, and secure payment processing. Features include admin dashboard for inventory management, order tracking, and responsive design for optimal mobile experience.',
    image: 'https://pagecreative.co.uk/wp-content/uploads/2023/10/AdobeStock_223290240-1-2-scaled.jpeg',
    technologies: ['Python', 'React', 'Flask', 'Postgres', 'Daraja API'],
    deployedLink: 'https://phase-2-project-five.vercel.app/',
    githubLink: 'https://github.com/Antoine-Nchore/e-commerce-frontend, https://github.com/Antoine-Nchore/e-commerce-backend' 
  },
  {
    title: 'Diabetes Prediction Model',
    description: 'This project focuses on building a machine learning model to predict the likelihood of diabetes in patients based on medical features such as glucose levels, BMI, age, and insulin levels. The goal is to support early diagnosis and intervention.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2xIbXcm8VcNxLi44s-6ppfpR4zHJpedyuA&s', 
    technologies: ['Python', 'FastAPI', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn',],
    deployedLink: '#',
    githubLink: 'https://github.com/Antoine-Nchore/d-risk-model'   
  },
  {
    title: 'Elimika',
    description: 'This project is a web-based e-learning system designed to enhance digital education by allowing learners to log in, access class materials, provide feedback, rate courses, and track their learning progress. It supports a personalized learning experience and fosters interaction between students and educators.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQglMO3s50FETkspMTwYwh8b7B4rLkN2iAQ2Q&s', 
    technologies: ['React', 'Flask', 'Python', 'PostgreSQL'],
    deployedLink: 'https://elimika.vercel.app/',
    githubLink: 'https://github.com/NathanSachombe/Elimika-Backend, https://github.com/NathanSachombe/Elimika-Frontend/tree/main/elimika'
  },
  {
    title:'NeuroMath',
    description:"MathMind is an intelligent math reasoning system that combines Optical Character Recognition (OCR), symbolic computation, and large language models (LLMs) to solve complex math problems from both text and images. It interprets hand-written or printed math expressions from images (including flowcharts and diagrams), translates them into symbolic form using OCR (EasyOCR/PyTesseract), and solves them using SymPy or a locally hosted LLM.",
    image:"https://mymathsclub.com/wp-content/uploads/2024/07/0dc62925-e449-4108-9fa2-7c0823f7bb56.webp",
    technologies:['LLM Integration (LLaVA)', 'Symbolic Math Engine', 'OCR Tools', ' Image Understanding (diagrams, flowcharts)', 'RAG: Retrieval-Augmented Generation for enhanced context-based solutions','Python, FastAPI (for the backend), Git'],
    deployedLink:'#',
    githubLink:'https://github.com/Antoine-Nchore/math_ai'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="project-card"
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMkEyQTJBIi8+CjxwYXRoIGQ9Ik0xNzUgMTAwSDIyNVYxNTBIMTc1VjEwMFoiIGZpbGw9IiM0NDQiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDEwQzE0LjQ3NzIgMTAgMTAgMTQuNDc3MiAxMCAyMEMxMCAyNS41MjI4IDE0LjQ3NzIgMzAgMjAgMzBDMjUuNTIyOCAzMCAzMCAyNS41MjI4IDMwIDIwQzMwIDE0LjQ3NzIgMjUuNTIyOCAxMCAyMCAxMFpNMjAgMjZDMTcuNzkwOSAyNiAxNiAyNC4yMDkxIDE2IDIyQzE2IDE5Ljc5MDkgMTcuNzkwOSAxOCAyMCAxOEMyMi4yMDkxIDE4IDI0IDE5Ljc5MDkgMjQgMjJDMjQgMjQuMjA5MSAyMi4yMDkxIDI2IDIwIDI2WiIgZmlsbD0iIzQ0NCIvPgo8L3N2Zz4KPC9zdmc+';
                }}
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live-link"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}