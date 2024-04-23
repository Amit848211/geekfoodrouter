import React from 'react'
import img from '../image/1.png'

function Header() {
  return (
    <div className='w-full h-[100vh]'>
        <img src={img} alt='amit' className='w-full h-full object-cover'></img>
    </div>
  )
}

export default Header