import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LandingPage } from './components/landing.jsx'
import  NavBar  from './components/navBar.jsx'
import { Footer }  from './components/footer.jsx'
import { AboutUs } from './components/about.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <LandingPage />
    <AboutUs />
    <Footer />
  </StrictMode>,
)
