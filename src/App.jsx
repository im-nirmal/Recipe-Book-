
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'



function App() {
  

  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/home' element={<Home />} />
          
        </Routes>
      <Footer />

    </>
  )
}

export default App
