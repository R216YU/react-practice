import React from 'react'
import logo from '../images/thumb.jpg'
import work from '../images/works.png'

const HomePage = () => {
  return (
    
    <div id='HomePage' className='container mx-auto'>
        <div className='sm:flex h-screen justify-center items-center gap-5 mx-auto'>
            <div className='sm:w-1/4'>
                <img src={logo} alt="logo" className='logo' />
            </div>
            <div className='sm:w-1/4 sm:mt-0 mt-10'>
                <h3 className="text-2xl border-b-2 border-green-500 inline mx-auto">R216YU</h3>
                <p className='mt-5'>
                    I'm an Amateur Web Engineer. <br />
                    I like Python3, JavaScript, HTML, CSS. <br />
                    I often use Django, Flask, TailwindCSS. <br />
                    I wanna practice React, FastAPI. <br />
                </p>
            </div>
        </div>

        <div className='h-screen'>
            <div className="text-center">
                <h2 className="text-3xl font-bold border-b-8 border-blue-500 inline-block">Works</h2>
            </div>
            <div className="flex justify-center gap-8 mt-20">
                <div><img src={work} alt="work image" className='work' /></div>
                <div><img src={work} alt="work image" className='work' /></div>
            </div>
        </div>
    </div>

  )
}

export default HomePage