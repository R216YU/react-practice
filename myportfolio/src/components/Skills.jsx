import React from 'react'

import { FaPython, FaHtml5, FaCss3 } from "react-icons/fa"
import { SiJavascript } from "react-icons/si"

const Skills = () => {
  return (

    <div id='skills' className='section'>

      <div className="text-center">
        <h2 className='text-3xl font-bold border-b-4 border-accent inline-block'>SKILLS</h2>
      </div>

      <div className='box'>
        <h3 className='text-2xl mb-4 text-center'>Python3</h3>
        <div className='flex justify-center items-center gap-8'>
          <div className="skill-icon">
            <FaPython className='text-9xl text-blue-500'></FaPython>
          </div>
          <div className="skill-text">
            <p className='leading-7 font-notoSans'>
              Python3は私が人生で初めて触れたプログラミング言語です。 <br />
              主にFlaskやDjangoといったwebフレームワークを利用します。 <br />
              今後はFastAPIを学習し、JSライブラリのReactと組み合わせてweb開発を行ってみたいです。 <br />
            </p>
          </div>
        </div>
      </div>

      <div className='box'>
        <h3 className='text-2xl mb-4 text-center'>JavaScript</h3>
        <div className='flex justify-center items-center gap-8'>
          <div className="skill-icon">
            <SiJavascript className='text-9xl text-yellow-500'></SiJavascript>
          </div>
          <div className="skill-text">
            <p className='leading-7 font-notoSans'>
              JavaScriptは現在、私が力を入れて学習している言語です。 <br />
              主に基礎文法や、ReactやVueといったライブラリについて学習しています。<br />
            </p>
          </div>
        </div>
      </div>

      <div className='box'>
        <h3 className='text-2xl mb-4 text-center'>HTML</h3>
        <div className='flex justify-center items-center gap-8'>
          <div className="skill-icon">
            <FaHtml5 className='text-9xl text-red-500'></FaHtml5>
          </div>
          <div className="skill-text">
            <p className='leading-7 font-notoSans'>
              CSSと組み合わせて利用しています。 <br />
            </p>
          </div>
        </div>
      </div>

      <div className='box'>
        <h3 className='text-2xl mb-4 text-center'>CSS</h3>
        <div className='flex justify-center items-center gap-8'>
          <div className="skill-icon">
            <FaCss3 className='text-9xl text-cyan-500'></FaCss3>
          </div>
          <div className="skill-text">
            <p className='leading-7 font-notoSans'>
              HTMLと組み合わせて利用しています。 <br />
              また、CSSフレームワークであるTailwindCSSも学習しています。 <br />
              当サイトもReactにTailwindCSSを導入し、利用しています。 <br />
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills