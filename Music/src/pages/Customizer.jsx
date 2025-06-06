import React from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar'

function Customizer() {

 
  return (
    <>
      <NavBar/>
      <div className='min-h-screen flex flex-col items-center px-4 py-8 text-white bg-gradient-to-b from-indigo-500 to-indigo-400'>
        {/* Header */}
        <h1 className='text-4x1 md:text-5xl font-bold tracking-tight mb-8 mt-20'>Visualizer</h1>
        
        <div className='w-full lg:w-2/3 bg-black/30 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/10 flex items-center justify-center min-h-[200px] lg:min-h-[800px]'></div>        



      </div>

    </>
  )
}

export default Customizer
