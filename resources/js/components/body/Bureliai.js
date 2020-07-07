import React, { useState, useEffect, useContext } from 'react'

import Burelis from "./Bureliai/Burelis"
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import BurelioInfo from './Bureliai/BurelioInfo';



const Bureliai = () => {

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then((response) => {
      axios.get("http://127.0.0.1:8000/api/bureliai").then((response) => {
        setBurelis(response.data);
      })
    })
  }, [])

  const [burelis, setBurelis] = useState([]);

  const navigate = useNavigate();

  return (
    <div className='bureliai'>

      {burelis.map(bur => (
        <div key={bur.id}>
          <Burelis burelis={bur} />
          {/* <Link to={bur.name} burelis={bur}>daugiau info</Link> */}
        </div>
      ))}
    </div>
  )
}

export default Bureliai;

// {burelis.map(bur => (
//   <div key={bur.id}>
//     <Burelis burelis={bur} />
//     <Route path={bur.name} element={<Burelis burelis={bur} />} />
//   </div>
// ))}