import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider, GlobalContext } from "./GlobalContext";
import axion from "axios"

import Index from "./Index";
import Header from './Header';
import Home from './body/Home';
import Apie from './body/Apie';
import Bureliai from './body/Bureliai';
import Kontaktai from './body/Kontaktai';

const App = () => {

  // useEffect(() => {
  //   axios.defaults.withCredentials = true;
  //   console.log("logina");
  //   axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then((response) => {
  //     document.getElementById("demo").innerHTML = "My First JavaScript";
  //   })
  // }, [])

  return (
    <div className="App">

      <GlobalProvider>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}
