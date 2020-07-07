import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { GlobalContext } from "../GlobalContext"

function Register() {

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    repassword: ""
  })


  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState, [id]: value
    }))
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (state.password !== state.repassword) {
      alert("Password does not match.")
    } else {
      putResgistration();
    }

  }


  axios.defaults.withCredentials = true;

  function putResgistration() {
    return (

      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(

        axios.post(
          'http://127.0.0.1:8000/api/register',
          state,
          {
            validateStatus: function (status) {
              return status < 600; // Reject only if the status code is greater than or equal to 500
            }
          }
        ).then(
          (res) => {
            setTimeout(() => {
              location.replace('http://127.0.0.1:8000/');
            },
              2000)
          }).catch(e => {
            console.log(e.response)
          })
      )
    )
  }


  const [logDisplay, setLogDisplay] = useContext(GlobalContext);

  const displayReg = (e) => {
    e.preventDefault();
    setLogDisplay(!logDisplay.register);
  }

  return (
    <div className='login-header'>
      <button onClick={displayReg}>X</button>
      <label className="reg-label">Name</label>
      <input id="name" className="reg-input" type="text" value={state.name} onChange={handleChange} autoComplete="off" ></input>

      <label className="reg-label">Email</label>
      <input id="email" className="reg-input" type="email" value={state.email} onChange={handleChange} autoComplete="off"></input>

      <label className="reg-label">Password</label>
      <input id="password" className="reg-input" type="password" value={state.password} onChange={handleChange} autoComplete="off"></input>

      <label className="reg-label">Re-Password</label>
      <input id="repassword" className="reg-input" type="password" value={state.repassword} onChange={handleChange} autoComplete="off"></input>

      <button className="reg-but" type="submit" onClick={handleClick}>Submit</button>
    </div>
  )
};

export default Register;