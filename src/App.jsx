import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="app">
      <Hero />
      <Experience />
      <Contact />
    </main>
  );
}