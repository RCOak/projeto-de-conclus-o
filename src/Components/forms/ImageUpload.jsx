import React from 'react'

import './ImageUpload.css'


function ImageUpload({ type, name, placeholder, handleOnChange, value, text }) {
  return(
    <div>
      <label className="imageform_control" for="picture__input">
        <input
            type={type}
            name={name}
            id="picture__input"
            placeholder={placeholder}
            onChange={handleOnChange}
            value={value} 
        />
        {text}
      </label>
    </div>
  )
}

export default ImageUpload