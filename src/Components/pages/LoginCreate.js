import React from "react";
import { useNavigate } from 'react-router-dom'

import CreateLogin from "../layout/CreateLogin.jsx"
import CreateLgForm from "../project/CreateLgForm.jsx";
import './LoginCreate.css'
function LoginCreate() {

    const history = useNavigate()

    function createUser(user) {

        fetch('http://127.0.0.1:5000/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      //redirect
      history('/loginconfirm')
    })
    .catch((err) => console.log(err))
    }

    return (
    <div>
        <CreateLogin hSubmit={createUser} />
    </div>
    )
}

export default LoginCreate;