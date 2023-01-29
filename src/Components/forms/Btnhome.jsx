import React from 'react'

import "./Btnhome.module.css";

function Btnhome({ text }) {
  return(
    <button className='btnhome'>
        {text}
    </button>
  )
}

export default Btnhome