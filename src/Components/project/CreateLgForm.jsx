import React from 'react'
import {Link} from 'react-router-dom'

import styles from './CreateLgForm.module.css'
import { BsFillPersonFill, BsLock } from "react-icons/bs";
import LgInput from '../forms/LgInput.jsx'
import SubmitBtn2 from '../forms/SubmitBtn2.jsx';
import CheckBox from '../forms/CheckBox.jsx';

function CreateLgForm({ btnText, checktext }) {
  return(
    <div>
            <form className={styles.loginforms}>
                  <LgInput type="text" name='fullname' placeholder='Enter your full name' icon={BsFillPersonFill} />
                  <LgInput type="text" name='email' placeholder='Enter your e-mail' icon={BsLock} />
                  <LgInput type="password" name='loginPass' placeholder='Enter your password' icon={BsLock} />
                  <LgInput type="password" name='reloginPass' placeholder='Reinsert your password' icon={BsLock} />
                  <CheckBox checktext='I read and accept the Terms and Conditions'/>
            </form>
            <div className={styles.btns}>
                <button className={styles.backlgbtn2}>
                <Link to='/login'>BACK</Link>
                </button>
                <SubmitBtn2 text={btnText}/>
            </div>
    </div>
  )
}

export default CreateLgForm