import React, { useState, createContext, useEffect } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const [logDisplay, setLogDisplay] = useState({ login: false, register: false });


  return (
    <GlobalContext.Provider value={[logDisplay, setLogDisplay]}>
      {props.children}
    </GlobalContext.Provider>
  )
}