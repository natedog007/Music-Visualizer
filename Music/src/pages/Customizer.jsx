import React from 'react'
import { useState } from 'react'


function Customizer() {

  return (
    <>
      {/*Title*/}
      <h1 className='flex justify-center mt-8 text-6xl'>Custom Music Visualizer</h1>


      {/*Customizer Panel*/}
      <div className='flex'>
        <form>
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
        </form>
      </div>

      {/*Visualizer*/}


    </>
  )
}

export default Customizer
