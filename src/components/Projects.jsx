import React from 'react';
import { motion } from 'framer-motion';
import '../styling/Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce web application with user authentication, product catalog, shopping cart functionality, and secure payment processing. Features include admin dashboard for inventory management, order tracking, and responsive design for optimal mobile experience.',
    image: '/api/placeholder/400/250', // Placeholder image - will be replaced with actual project screenshot
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    deployedLink: '#', // Will be updated with actual link
    githubLink: '#'   // Will be updated with actual link
  },
  {
    title: 'ML Prediction System',
    description: 'A machine learning application that predicts customer behavior and market trends using advanced algorithms. Built with Python and deployed using FastAPI, featuring data visualization dashboards, real-time predictions, and automated model retraining capabilities.',
    image: '/api/placeholder/400/250', // Placeholder image - will be replaced with actual project screenshot
    technologies: ['Python', 'FastAPI', 'TensorFlow', 'Pandas', 'Plotly'],
    deployedLink: '#', // Will be updated with actual link
    githubLink: '#'   // Will be updated with actual link
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface. Includes task assignment, progress tracking, deadline management, and integration with popular productivity tools.',
    image: '/api/placeholder/400/250', // Placeholder image - will be replaced with actual project screenshot
    technologies: ['React', 'Socket.io', 'Express.js', 'PostgreSQL'],
    deployedLink: '#', // Will be updated with actual link
    githubLink: '#'   // Will be updated with actual link
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