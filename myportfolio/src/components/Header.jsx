import React from 'react'
import { Link } from 'react-router-dom'

import { FaGithub, FaInstagram,  } from "react-icons/fa"
import { SiWantedly  } from "react-icons/si"

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-header px-4 py-2'>
        <div className="container mx-auto md:flex justify-between items-center p-4">

            <div>
                <nav>
                    <ul className='flex gap-6'>
                        <li><Link to="/" className='text-3xl font-bold hover:text-theme duration-300'>ME</Link></li>
                        <li><Link to="/works" className='text-3xl font-bold hover:text-theme duration-300'>WORKS</Link></li>
                        <li><Link to="/skills" className='text-3xl font-bold hover:text-theme duration-300'>SKILLS</Link></li>
                    </ul>
                </nav>
            </div>

            <div>
                <ul className='flex gap-4'>
                    <li><a href="https://github.com/R216YU" target="_blank" rel="noopener noreferrer"><FaGithub className='react-icon text-purple-400 hover:text-purple-700' /></a></li>
                    <li><a href="https://www.instagram.com/r216yu/" target="_blank" rel="noopener noreferrer"><FaInstagram  className='react-icon text-pink-400 hover:text-pink-700'/></a></li>
                    <li><a href="https://www.wantedly.com/id/sr216" target="_blank" rel="noopener noreferrer"><SiWantedly  className='react-icon text-cyan-400 hover:text-cyan-700'/></a></li>
                </ul>
            </div>

        </div>

    </header>
  )
}

export default Header