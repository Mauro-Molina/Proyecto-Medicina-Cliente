import React from 'react'
import './index.css'
import imgNotiCard from '../../images/noti_card.jpg'

const Noticies_Card = () => {
  return (
    <div className='noticies-card'>
        <img src={imgNotiCard} alt="" className='noticies-card-img'/>
        <h3 className="noticies-card-title">Titulo</h3>
        <p className="noticies-card-description">lorem</p>
        <button className='button'>Leer Mas..</button>
    </div>
  )
}

export default Noticies_Card