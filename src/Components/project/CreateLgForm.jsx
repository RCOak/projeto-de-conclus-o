import React from 'react'
import {Link} from 'react-router-dom'
import { useState,  } from 'react';

import styles from './CreateLgForm.module.css'
import { BsFillPersonFill, BsLock } from "react-icons/bs";
import LgInput from '../forms/LgInput.jsx'
import SubmitBtn2 from '../forms/SubmitBtn2.jsx';
import CheckBox from '../forms/CheckBox.jsx';

function CreateLgForm({ btnText, checktext, handleSubmit, userData }) {
  
  const [username, setUsername] = useState(userData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(username)
    //console.log(username)
  }

  function handleChange(e) {
    setUsername({ ...username, [e.target.name]: e.target.value })
    //console.log(username)
  }
   
  return(
    <div>
      <form onSubmit={submit} className={styles.loginforms}>
        <LgInput type="text" name='username' placeholder='Enter your Username' icon={<BsFillPersonFill />} handleOnChange={handleChange} />
        <LgInput type="text" name='email_address' placeholder='Enter your e-mail' icon={<BsLock />} handleOnChange={handleChange} />
        <LgInput type="password" name='password_hash' placeholder='Enter your password' icon={<BsLock />} handleOnChange={handleChange} />
        <LgInput type="password" name='repassword_hash' placeholder='Reinsert your password' icon={<BsLock />} handleOnChange={handleChange} />
        <CheckBox checktext='I read and accept the Terms and Conditions'/>
        <div className={styles.btns}>
          <button className={styles.backlgbtn2}>
            <Link to='/login'>BACK</Link>
          </button>
          <SubmitBtn2 text={btnText}/>
        </div>
      </form>
    </div>
  )
}

export default CreateLgForm