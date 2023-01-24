import React from 'react'

import './UserInfoForm.css'
import UserInput from '../forms/UserInput.jsx'
import SubmitBtn from '../forms/SubmitBtn.jsx';

function UserInfoForm({ btnText }) {
  return(
    <div>
            <form className="uiformbox">
                <div className="userinfform">
                    <div className="userinfform1">
                        <UserInput type="text" label='First Name' name='userfirstname' placeholder="User's Name"/>
                        <UserInput type="text" label='Last Name' name='userlastname' placeholder="User's Last Name"/>
                    </div>
                    <div className="userinfform2">
                        <UserInput type="text" label='Email' name='usermail' placeholder="User's e-mail" />
                        <UserInput type="text" label='Phone' name='userphone' placeholder="User's phone" />
                    </div>
                </div>
                <div className='userinfbtn'>
                    <SubmitBtn text={btnText}/>
                </div>
            </form>
    </div>
  )
}

export default UserInfoForm