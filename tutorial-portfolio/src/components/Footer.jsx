import React from 'react'

import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <footer className='container w-1/2 mx-auto border-t border-gray-600 p-10'>
        <ul className='flex gap-5 justify-center mb-5'>
            <li><a href="https://github.com/R216YU" className='text-purple-500 text-3xl hover:text-purple-700 duration-300'><FaGithub></FaGithub></a></li>
            <li><a href="https://twitter.com/home" className='text-blue-500 text-3xl hover:text-blue-700 duration-300'><FaTwitter></FaTwitter></a></li>
            <li><a href="https://www.instagram.com/r216yu/" className='text-pink-500 text-3xl hover:text-pink-700 duration-300'><FaInstagram></FaInstagram></a></li>
        </ul>
        <p className='text-center'><small>&copy;2023 R216YU</small></p>
    </footer>

  )
}

export default Footer