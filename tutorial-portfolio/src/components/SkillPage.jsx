import React from 'react'
import { FaPython } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';

const SkillPage = () => {
  return (

    <div id='SkillPage' className='container mx-auto px-20 py-40'>
      <div className='text-center'>
        <h2 className="text-4xl font-bold inline-block border-b-8 border-blue-500">My Skills</h2>
      </div>

      <div className='w-1/3 mx-auto my-20'>

        <div className='border-b border-gray-600 flex p-2 mt-10'>
          <h4 className='icon text-blue-500'><FaPython></FaPython></h4>
          <div className='ml-20'>
            <h3 className="text-xl font-semibold">Python</h3>
            <p className='mt-2'>
              Django, Flask, FastAPI <br />
            </p>
          </div>
        </div>
        <div className='border-b border-gray-600 flex p-2 mt-10'>
          <h4 className='icon text-yellow-500'><IoLogoJavascript></IoLogoJavascript></h4>
          <div className='ml-20'>
            <h3 className="text-xl font-semibold">JavaScript</h3>
            <p className='mt-2'>
              React <br />
            </p>
          </div>
        </div>
        <div className='border-b border-gray-600 flex p-2 mt-10'>
          <h4 className='icon text-red-500'><IoLogoHtml5></IoLogoHtml5></h4>
          <div className='ml-20'>
            <h3 className="text-xl font-semibold">HTML</h3>
            <p className='mt-2'>
              HTML5<br />
            </p>
          </div>
        </div>
        <div className='border-b border-gray-600 flex p-2 mt-10'>
          <h4 className='icon text-cyan-500'><IoLogoCss3></IoLogoCss3></h4>
          <div className='ml-20'>
            <h3 className="text-xl font-semibold">CSS</h3>
            <p className='mt-2'>
              CSS3, TailwindCSS<br />
            </p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default SkillPage