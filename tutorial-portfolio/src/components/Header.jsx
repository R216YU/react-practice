import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <header className='w-full py-5 px-10 bg-gray-800 text-white sm:fixed t-0 z-10'>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className='text-3xl'>Portfolio</h1>
        </div>

        <nav>
          <ul className='flex gap-4'>
            <li className='hover:text-green-400 duration-300'><Link to="/">HOME</Link></li>
            <li className='hover:text-green-400 duration-300'><Link to="/skill">SKILL</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header