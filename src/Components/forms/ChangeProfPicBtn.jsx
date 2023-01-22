import React from 'react'

import "./changeprofpicbtn.css";
import { BsFillCameraFill } from "react-icons/bs";

function ChangeProfPicBtn() {
  return(
    <div className="cppbox">
        <label className='cppbtn' for="cppinsert">
            <span className='cppicon'><BsFillCameraFill /></span>
        </label>
        <input type="file" name="cppinsert" id="cppinsert" />
    </div>
  )
}

export default ChangeProfPicBtn