import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function SignIn() {

  return (
    <>
    <NavBar />
    <div className='text-white min-h-screen flex flex-col items-center justify start bg-gradient-to-b from-sky-400 to-blue-200 px-4 py-12 pt-120'>
        <h1>Sign-In</h1>
    </div>

    </>
  )
}

export default SignIn
