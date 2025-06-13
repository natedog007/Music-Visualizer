import React from 'react'
import { useState } from 'react'
import NavBar from './components/NavBar'
import SongCard from './components/SongCard'


function App() {


  return (
    <>
      <NavBar/>
      <div className='min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-blue-400 to-green-300 px-4 py-12 pt-120'>
        {/*Title*/}
        <h1 className='text-4xl md:text-5xl font-bold text-white text-center mb-10 tracking-tight'>Custom Music Visualizer</h1>
        {/*Search/Upload*/}
        <input className="flex w-full max-w-md py-3 px-4 bg-white/10 border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-3 focus:ring-green-300 shadow-lg transition-all duration-300" placeholder="Search for songs..."/>

        <div className='flex md:grid-cols-5 grid-cols-3 gap-25 mt-10'>
          <SongCard/> 
        </div>

      </div>

    </>
  )
}

export default App
