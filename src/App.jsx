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
        <Route path="" element={<AboutmePage/>} />
        <Route path="" element={<SkillPage/>} />
        <Route path="" element={<PortfolioPage/>} />
        <Route path="" element={<ContactmePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
