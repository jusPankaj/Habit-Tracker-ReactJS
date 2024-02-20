import React from 'react'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 text-white'>
      {/* <Navbar /> */}
      
      {/* <Overview /> */}
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/habits' element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App