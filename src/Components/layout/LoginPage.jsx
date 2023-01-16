import React from 'react'
import {Link} from 'react-router-dom'

import "./LoginPage.css"
import LogoFooter from '../images/LogoFooter.png'
import ProfileLogin from '../icons/ProfileLogin.png'
import PasswordIcon from '../icons/PasswordIcon.png'

function LoginPage() {
  return(
    <div className='loginbody'>
        <div className='loginmask'>
        </div>
        <div className='loginbox'>
            <div className='loginlogo'>
              <img src={LogoFooter} alt='logo' />
            </div>  
            <div className='logintext'>
              <h1>Welcome back</h1>
              <p>Enter your data and roll initiative!</p>
            </div>
            <form className='loginforms'>
                <div className='lguser'>
                  <input name='loginUser' placeholder='Enter Username or e-mail' type="text" />
                  <span><img src={ProfileLogin} /></span>
                </div>
                <div className='lgpass'>
                  <input name='loginPass' placeholder='Enter your password' type="password" />
                  <span><img src={PasswordIcon} /></span>
                </div>
                <div className='forgotpass'>
                  <a href="">I forgot my password</a>
                </div>
            </form>
            <div className='lgbtn'>
                <button className='dhabtn'>
                <Link to='/logincreate'>DON'T HAVE AN ACCOUNT</Link>
                </button>
                <button className='lgenterbtn'>
                  ENTER
                </button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage