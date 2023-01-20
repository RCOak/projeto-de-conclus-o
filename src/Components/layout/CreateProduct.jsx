import React from 'react'

import "./CreateLogin.css"
import LogoFooter from '../images/LogoFooter.png'

function CreateProduct() {
  return(
    <div className='loginbody'>
        <div className='loginmask'>
        </div>
        <div className='crtaccbox'>
            <div className='loginlogo'>
              <img src={LogoFooter} alt='logo' />
            </div>
        </div>
    </div>
  )
}

export default CreateProduct