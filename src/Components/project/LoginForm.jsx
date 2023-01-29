import React from 'react'
import {Link} from 'react-router-dom'

import styles from './LoginForm.module.css'
import { BsFillPersonFill, BsLock } from "react-icons/bs";
import LgInput from '../forms/LgInput.jsx'
import SubmitBtn from '../forms/SubmitBtn.jsx';

function LoginForm({ btnText }) {
  return(
    <div>
      <form>
        <div className={styles.loginforms}>
          <LgInput type="text" name='loginUser' placeholder='Enter Username or e-mail' icon={<BsFillPersonFill />} />
          <LgInput type="password" name='loginPass' placeholder='Enter your password' icon={<BsLock />} />
        </div>
        <div className={styles.forgotpass}>
          <Link to='/passrecover'>I forgot my password</Link>
        </div>
        <div className={styles.btns}>
          <button className={styles.dhabtn}>
            <Link to='/logincreate'>DON'T HAVE AN ACCOUNT</Link>
          </button>
          <Link to='/loginuser'><SubmitBtn text={btnText}/></Link>
        </div>
      </form>            
    </div>
  )
}

export default LoginForm