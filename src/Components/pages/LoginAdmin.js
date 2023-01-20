import React from 'react'


import "./LoginPage.css"
import LogoFooter from '../images/LogoFooter.png'
import LoginForm from '../project/LoginForm.jsx'

function LoginAdmin({btnText}) {
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
            <LoginForm btnText="ENTER"/>
        </div>
    </div>
  )
}

export default LoginAdmin