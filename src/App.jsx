import React from 'react';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function App() {
  
  return (
    <main className="app">
      <Navbar />
      <Experience />
      <Contact />
    </main>
  );
}