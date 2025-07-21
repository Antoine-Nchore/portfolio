import React from 'react';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About'; 
import './App.css';

export default function App() {
  return (
    <main className="app">
      <Navbar />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
