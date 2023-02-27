import React from 'react'
import "./loading.css"

function LoadingScene() {
  return (
    <div className='flex flex-col justify-center'>
        <h1 className="font-bold text-black absolute left-50%">Loading Scene...</h1>
        <div className="loader">
        </div>
    </div>
  )
}

export default LoadingScene