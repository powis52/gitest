import React, { useState, useContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { GlobalContext } from './GlobalContext';

import Login from './header/Login';
import Logo from "./header/Logo";


const Header = () => {

  const [linkArray, setLinkArray] = useState([
    {
      linkLoc: '/',
      linkname: 'Pagrindinis puslapis'
    },
    {
      linkLoc: '/apie',
      linkname: 'Apie'
    },
    {
      linkLoc: '/bureliai',
      linkname: 'Bureliai'
    },
    {
      linkLoc: '/kontaktai',
      linkname: 'Kontaktai'
    }
  ]);

  const [logDisplay, setLogDisplay] = useContext(GlobalContext);
  const [regDisplay, setRegDisplay] = useContext(GlobalContext);

  const displayLogin = (e) => {
    e.preventDefault();
    setLogDisplay({ login: !logDisplay.login });
    console.log(logDisplay);
  }

  const displayRegister = (e) => {
    e.preventDefault();
    setLogDisplay({ register: !logDisplay.register });
    console.log(logDisplay);
  }

  return (
    <div className='Header'>

      <Logo />
      <ul>
        {linkArray.map(link => (
          <li key={link.linkname}><Link to={link.linkLoc}>{link.linkname}</Link></li>
        ))}
      </ul>




      <button className="log-but" onClick={displayLogin}>Login</button>
      <button className="log-but" onClick={displayRegister}>Register</button>
      {/* {logDisplay ? <div className='bg-model'><div className='bg-mod'></div></div> : ""}
      {logDisplay ? <Login /> : ""} */}

    </div>
  )
}

export default Header;