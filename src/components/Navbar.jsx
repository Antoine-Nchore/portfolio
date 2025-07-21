import React from 'react';
import { motion } from 'framer-motion';
import '../styling/Navbar.css';

export default function Navbar() {
    return (
        <header className="nav-container">
            <nav className="nav">
                <motion.div 
                    className="nav-logo"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>Anthony Nchore</h3>
                </motion.div>
                <ul className="nav-links">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#tech-blog">Tech Blog</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>

            <motion.div 
                className="hero-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Hello, I am <span className="highlight">Anthony Nchore</span></h1>
                <p>I am a Software Engineer.</p>
            </motion.div>
        </header>
    );
}
