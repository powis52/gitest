import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider, GlobalContext } from "./GlobalContext";


import Login from "./header/Login";
import Register from "./header/Register";
import Header from './Header';
import Home from './body/Home';
import Apie from './body/Apie';
import Bureliai from './body/Bureliai';
import Kontaktai from './body/Kontaktai';
import NotFound from './NotFound';
import BurelioInfo from "./body/Bureliai/BurelioInfo"

const Index = () => {
  const [logDisplay, setLogDisplay] = useContext(GlobalContext);


  return (
    <div className='index'>

      {logDisplay.login ? <div className='bg-model-log'><Login /><div className='bg-mod'></div></div> : ""}
      {logDisplay.register ? <div className='bg-model-reg'><Register /><div className='bg-mod'></div></div> : ""}
      {/* {logDisplay ? <Login /> : ""} */}
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/apie/' element={<Apie />} />
        <Route path='/bureliai/*' element={<Bureliai />} />
        <Route path='/bureliai/:burel' element={<BurelioInfo />} />
        <Route path='/kontaktai/' element={<Kontaktai />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <footer>FOOTER</footer>
    </div>

  );
}

export default Index;