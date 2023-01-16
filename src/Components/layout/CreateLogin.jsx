import React from 'react'
import {Link} from 'react-router-dom'

import "./CreateLogin.css"
import LogoFooter from '../images/LogoFooter.png'
import ProfileLogin from '../icons/ProfileLogin.png'
import PasswordIcon from '../icons/PasswordIcon.png'

function CreateLogin() {
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
            <form className='createlgforms'>
                <div className='crtaccname'>
                  <input name='fullname' placeholder='Enter your fullname' type="text" />
                  <span><img src={ProfileLogin} /></span>
                </div>
                <div className='crtaccmail'>
                  <input name='email' placeholder='Enter your e-mail' type="text" />
                  <span><img src={ProfileLogin} /></span>
                </div>
                <div className='crtaccpass'>
                  <input name='loginPass' placeholder='Enter your password' type="password" />
                  <span><img src={PasswordIcon} /></span>
                </div>
                <div className='crtaccpass'>
                  <input name='confirmpass' placeholder='reinsert your password' type="password" />
                  <span><img src={PasswordIcon} /></span>
                </div>
                <div className='crtacccheckbox'>
                  <input name="ageconfirm" type="checkbox" /><p>Read and Accept The Terms Of Conditions</p>
                </div>
            </form>
            <div className='crtbtn'>
                <button className='backlgbtn'>
                <Link to='/login'>BACK</Link>
                </button>
                <button className='createaccbtn'>
                  CONTINUE
                </button>
            </div>
        </div>
    </div>
  )
}

export default CreateLogin