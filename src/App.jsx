import React from 'react';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

export default function App() {
  return (
    <main className="app">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
