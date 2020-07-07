import React, { useState, useReducer } from 'react'
import axios from "axios"
import { parseJSON } from 'jquery';

function LoginTest() {

  const url = "http://127.0.0.1:8000";

  const [logInfo, setLogInfo] = useState({
    email: "",
    password: ""
  })

  const [user, setUser] = React.useState([]);

  const testUser = () => {
    axios.defaults.withCredentials = true;
    axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then((response) => {
      axios.get("http://127.0.0.1:8000/api/user").then((response) => {
        setUser(response.data);
        console.log(response);
        setTimeout(() => { console.log(response) }, 1000);
      })
    })
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { placeholder, value } = e.target;
    setLogInfo(prevState => ({
      ...prevState, [placeholder]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    console.log("logina");
    axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then((response) => {
      axios.post("http://127.0.0.1:8000/api/login", {
        email: logInfo.email,
        password: logInfo.password
      }).then((response) => {
        console.log(response);
      })
    })
  }

  const handleLogout = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    console.log("logina");
    axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then((response) => {
      axios.get("http://127.0.0.1:8000/api/logout").then((response) => {
        console.log(response);

      })
    })
  }




  return (
    <div>
      <form>
        <label>Email</label>
        <input placeholder="email" type="text" onChange={handleChange} value={logInfo.email}></input>
        <label>Password</label>
        <input placeholder="password" type="text" onChange={handleChange} value={logInfo.password}></input>
        <br />
        <button type="submit" onClick={handleSubmit}>Login</button>
        <button type="submit" onClick={handleLogout}>logout</button>

        <button type="button" onClick={testUser}>Test user</button>
        <p>userinfo</p>
      </form>

      <div key={user.id}>
        <h2>{user.id}</h2><br />
        <h3>{user.name}</h3><br />
      </div>

    </div>
  )
};

export default LoginTest;