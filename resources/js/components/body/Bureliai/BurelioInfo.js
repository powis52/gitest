import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from "react-router-dom"


const BurelioInfo = ({ }) => {

  const [burelis, setBurelis] = useState({});
  const { burel } = useParams();


  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then((response) => {
      axios.get("http://127.0.0.1:8000/api/bureliai").then((response) => {
        const bur = response.data.find(b => b.name === burel);
        setBurelis(bur);

      })
    })
  }, [])

  return (
    <div className='burelio-info'>
      <h3>{burelis.pavadinimas}</h3>
      <h4>{burelis.kategorija}</h4>
      <p>{burelis.kaina}</p>
    </div>
  )
}

export default BurelioInfo;