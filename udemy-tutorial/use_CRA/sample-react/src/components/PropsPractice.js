import React from 'react'
import "./UseProps.css";

const PropsPractice = ({name, age, from}) => {
  return (
    <div className='practice'>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>From: {from}</h3>
    </div>
  )
}

export default PropsPractice