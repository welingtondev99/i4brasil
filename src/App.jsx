import Header from './components/Header'
import Home from './components/Home'
import NationalPresence from './components/NationalPresence'
import './App.css'
import './components/home.css'
import Footer from './components/Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'


function App() {
  

  return (
    <>
      <ScrollRestoration/>
      <Header/>
      <section id="center">
        <Home/>
      </section>
      <section className='desingCenter'>
        <NationalPresence/>
      </section>
      <div className="ticks"></div>
      <section id="spacer"></section>
      <Outlet/>
    </>
  )
}

export default App
