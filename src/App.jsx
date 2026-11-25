import Header from './components/Header'
import IntroLoader from './components/IntroLoader'
import CinematicHero from './components/CinematicHero'
import NumbersBand from './components/NumbersBand'
import AboutSection from './components/AboutSection'
import NationalPresence from './components/NationalPresence'
import OdsSection from './components/OdsSection'
import RecognitionSection from './components/RecognitionSection'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <ScrollRestoration />
      <IntroLoader />
      <Header />
      <main>
        <CinematicHero />
        <NumbersBand />
        <AboutSection />
        <NationalPresence />
        <OdsSection />
        <RecognitionSection />
        <LocationSection />
      </main>
      <Footer />
      <Outlet />
    </>
  )
}

export default App
