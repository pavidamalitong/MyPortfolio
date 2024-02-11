import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ProjectDetails from './components/ProjectDetails'
import Education from './components/Education'
import Footer from './components/Footer'

function App() {

  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Skills/>
      <Experience/>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Education/>
      <Footer/>
      {openModal.state &&
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      }
      <SocialLinks/>
    </div>
  )
}

export default App
