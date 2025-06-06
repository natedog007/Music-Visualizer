import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {

  return (
    <>
    <div className='text-white min-h-screen flex flex-col items-center justify start bg-gradient-to-b from-gray-500 to-gray-600 px-4 py-12 pt-120'>
        <h1 className='text-6xl font-bold tracking-tight mb-8'>Error 404: PAGE NOT FOUND</h1>
        <Link to='/'>
            <button className='bg-indigo-300 p-2 text-md text-white rounded-lg shadow-lg border-2 border-indigo-300 hover:border-indigo-500'>HOME</button>
        </Link>
    </div>

    </>
  )
}

export default PageNotFound
