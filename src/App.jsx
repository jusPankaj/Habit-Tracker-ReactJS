import React from 'react'
import Navbar from './components/Navbar'
import Overview from './components/Overview'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 text-white'>
      <Navbar />
      <Overview />
    </div>
  )
}

export default App