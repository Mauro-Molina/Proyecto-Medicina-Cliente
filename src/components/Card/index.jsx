import React from 'react'
import './index.css'
import Indice from '../../images/índice.png'

const Card = ({title, description}) => {
  return (
    <div className='card'>
        <div className="card-indice">
            <img src={Indice} alt="" />
        </div>
        <div className="card-content">
            <h1 className="card-title">{title}</h1>
            <p className='card-description'>{description}</p>
        </div>
    </div>
  )
}

export default Card