import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {

  return (
    <>
    <div>
        <h1 className='flex justify-center text-lg mt-10'>PAGE NOT FOUND</h1>
        <Link to='/'>
            <button className='bg-blue-400 p-3 rounded-lg flex justify-center'>HOME</button>
        </Link>
    </div>

    </>
  )
}

export default PageNotFound
