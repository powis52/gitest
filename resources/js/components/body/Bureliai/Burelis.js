import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import BurelioInfo from './BurelioInfo';


const Burelis = ({ burelis }) => {

  const test = () => {
    console.log(burelis.kategorija);
  }

  const link = burelis.name;

  const navigate = useNavigate();

  const handleLink = () => {
    navigate(link, { state: { burelis } })
  }

  return (
    <div className='burelis'>
      <img src={burelis.foto} width="300px" height="300px" />
      <p>{burelis.kategorija}</p>
      <p>{burelis.pavadinimas}</p>
      {burelis.kaina === "0" ? <p>Nemokamas</p> : <p>{burelis.kaina} Eur</p>}
      <Link to={burelis.name}>Daugiau info</Link>
      {/* <button onClick={handleLink}>Daugiau info</button> */}
    </div>
  )
}

export default Burelis; 