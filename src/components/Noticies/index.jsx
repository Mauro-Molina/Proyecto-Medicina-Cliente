import React from 'react'
import Noticies_Card from '../Noticies_Card'
import './index.css'

const Noticies = () => {
  return (
    <div className='noticies'>
        <div className="container">
        <div className="title-header">
                <h5 className='subtitle'>Noticias</h5>
                <h2 className='title'>¿Que va pasando en nuestro hospital?</h2>
        </div>
        <div className='noti-card'>
            <Noticies_Card></Noticies_Card>
            <Noticies_Card></Noticies_Card>
            <Noticies_Card></Noticies_Card>
        </div>
        </div>
    </div>
  )
}

export default Noticies