import { useState } from 'react';
import './App.css';
import Hero from './assets/component/Hero';
import Skills from './assets/component/Skills';
import Projects from './assets/component/Projects';
import About from './assets/component/About';
import Contact from './assets/component/Contact';
import Resume from './assets/component/Resume';


function App() {
  

  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Resume />
    </>
  )
}

export default App
