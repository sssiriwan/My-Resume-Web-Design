import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Homepage'
import AboutmePage from './pages/AboutmePage'
import SkillPage from './pages/SkillPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactmePage from './pages/ContactmePage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume/aboutme" element={<AboutmePage/>} />
        <Route path="/resume/skill" element={<SkillPage/>} />
        <Route path="/resume/portfolio" element={<PortfolioPage/>} />
        <Route path="/resume/contact" element={<ContactmePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
