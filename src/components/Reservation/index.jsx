import React from 'react'
import './index.css'
import work3 from '../../images/work3.jpg'
import work4 from '../../images/work4.jpg'

const Reservation = () => {
  return (
    <div className='reservation'>
        <div className="container">
        <div className="appointment">
           <div className="appointment-content">
                <span>
                <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 60 60"><use href="#svg-279e"></use></svg>
                </span>
                <h2 className='reservation-title'>Reservar Cita</h2>
                <a href="" className='reservation-btn'>Solicitar Ahora</a>
           </div>
           <div className="best_medical-img">
            <img src={work3} alt="" className="reservation-img" />
           </div>
        </div>

        <div className="best_medical">
           <div className="best_medical-content">
           <span>
            <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 60 60"><use href="#svg-279e"></use></svg>
            </span>
            <h2 className="reservation-title">Encuentre los mejores medicos</h2>
            <a href="" className="reservation-btn">Reservar Ahora</a>
           </div>
           <div className="best_medical-img">
            <img src={work4} alt="" className="reservation-img" />
           </div>
        </div>
    </div>
    </div>
  )
}

export default Reservation