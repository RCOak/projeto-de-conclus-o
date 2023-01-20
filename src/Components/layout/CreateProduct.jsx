import React from 'react'

import "./CreateLogin.css"
import LogoFooter from '../images/LogoFooter.png'
import CreateLgForm from '../project/CreateLgForm.jsx'

function CreateProduct({ btnText }) {
  return(
    <div className='loginbody'>
        <div className='loginmask'>
        </div>
        <div className='crtaccbox'>
            <div className='loginlogo'>
              <img src={LogoFooter} alt='logo' />
            </div>  
            <div className='logintext'>
              <h1>Let's make your account</h1>
              <p>Enter your data and confirm your data and roll your attributes!</p>
            </div>
            <CreateLgForm btnText={"CONTINUE"}/>
        </div>
    </div>
  )
}

export default CreateProduct