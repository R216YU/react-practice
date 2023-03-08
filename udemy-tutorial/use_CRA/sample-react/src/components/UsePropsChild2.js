import React from 'react'
import "./UseProps.css";

const UsePropsChild2 = ({num, fn, bool, obj}) => {
  return (
    <div className='useProps'>
        <h2>props</h2>
        <h3>num: {num}</h3>
        <h3>fn: {fn("hey")}</h3>
        <h3>bool: {bool ? "true" : "false"}</h3>
        <ul>
            <h7>OBJ</h7>
            <li>{obj.name}</li>
            <li>{obj.age}</li>
        </ul>
    </div>
  )
}

export default UsePropsChild2