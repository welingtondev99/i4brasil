import Header from './components/Header'
import Home from './components/Home'
import NationalPresence from './components/NationalPresence'
import './App.css'
import './components/home.css'

function App() {
  

  return (
    <>
      <section id="center">
        <Header/>
        <Home/>
        <NationalPresence/>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
