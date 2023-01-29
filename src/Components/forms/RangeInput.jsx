import React from 'react'

import './RangeInput.css'

function RangeInput({ minvalue, maxvalue }) {
  return(
    <div>
        <label></label>
        <input type="range" min={minvalue} max={maxvalue} class="slider" id="myRange" />
    </div>
  )
}

export default RangeInput