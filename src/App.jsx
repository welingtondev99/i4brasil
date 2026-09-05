import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import './components/home.css'

function App() {
  

  return (
    <>
      <section id="center">
        <Header/>
        <Home/>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
