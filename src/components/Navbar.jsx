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
                    <li><a href="/about">About</a></li>
                    <li><a href="/experience">Experience</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

            <motion.div 
                className="hero-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Hello, I am <span className="highlight">Nchore Anthony</span></h1>
                <p>I love building <strong>intelligent systems</strong>.</p>
                <p>I’m a <strong>Software Engineer</strong> and a <strong>Machine Learning Engineer</strong>.</p>
            </motion.div>
        </header>
    );
}
