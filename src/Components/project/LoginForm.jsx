import React from 'react'
import {Link} from 'react-router-dom'

import styles from './LoginForm.module.css'
import { BsFillPersonFill, BsLock } from "react-icons/bs";
import LgInput from '../forms/LgInput.jsx'
import SubmitBtn from '../forms/SubmitBtn.jsx';

function LoginForm({ btnText }) {
  return(
    <div>
            <form className={styles.loginforms}>
                  <LgInput type="text" name='loginUser' placeholder='Enter Username or e-mail' icon={BsFillPersonFill} />
                  <LgInput type="password" name='loginPass' placeholder='Enter your password' icon={BsLock} />
                <div className={styles.forgotpass}>
                  <a href="">I forgot my password</a>
                </div>
            </form>
            <div className={styles.btns}>
                <button className={styles.dhabtn}>
                <Link to='/logincreate'>DON'T HAVE AN ACCOUNT</Link>
                </button>
                <SubmitBtn text={btnText}/>
            </div>
    </div>
  )
}

export default LoginForm