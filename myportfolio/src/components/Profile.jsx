import React from 'react'

import thumb from '../images/thumb.jpg'

const Profile = () => {
  return (

    <div id='profile' className='section h-screen font-notoSans'>

      <div className='py-20'>

        <div className='mx-auto md:flex justify-center gap-20 items-center'>

          <div className="profile-image">
            <img src={thumb} alt="Profile thumbnail" className='thumb' />
          </div>

          <div>
            <h2 className='font-poppins text-2xl font-bold mb-5'>Ryu Suzuki <span className='text-sm font-normal'>(Nihon Univ. Economics)</span> </h2>
            <p className='text-xl leading-loose'>
              I am Amateur Web Engineer. <br />
              I often use Python3, JavaScript & HTML+CSS. <br />
              Now I'm practicing Flask, Django, React & TailwindCSS. <br />
              Futurely I wanna be 'Fullstack Web Engineer'. <br />
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Profile