import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Footer />
      </div>
      <h1 className='my-5 font-sans font-bold text-2xl text-center'>Vite + React</h1>
      <p className="underline text-cyan-500 font-mono text-center">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
