import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div className= "bg-blue-500 p-2 flex">
      <p className='font-bold text-white p-3'>
        <Link href ="/">
          Home
        </Link>
      </p>
      <p className='font-bold text-white p-3'>
        <Link href ="/cubedemo">
          Cube Demo
        </Link>
      </p>
      <p className='font-bold text-white p-3'>
        <Link href ="/pokedex">
          Pokedex Demo
        </Link>
      </p>
    </div>
  )
}

export default NavBar