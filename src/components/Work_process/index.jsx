import React from 'react'
import './index.css'
import work1 from '../../images/work1.jpg'
import work2 from '../../images/work2.jpg'
import work3 from '../../images/work3.jpg'
import work4 from '../../images/work4.jpg'

const Work_process = () => {
  return (
    <div className='services work'>
        <div className="container">
        <div className="services-header">
            <h5 className='services-subtitle'>Proceso de trabajo</h5>
            <h2 className='services-title'>¿Cómo trabajamos?</h2>
            <p className="work-subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, nobis quaerat ut dignissimos, nemo aliquam quae veritatis inventore sunt harum molestias illum expedita corporis quo accusamus eveniet eligendi id mollitia.</p>
        </div>
        <div className="work-content">
            <div className="work-card">
                <img src={work1} alt="" className="work-img" />
                <h4 className="work-card-title">Cita</h4>
            </div>

            <div className="work-card">
                <img src={work2} alt="" className="work-img" />
                <h4 className="work-card-title">Medico Experto</h4>
            </div>

            <div className="work-card">
                <img src={work3} alt="" className="work-img" />
                <h4 className="work-card-title">Consulta</h4>
            </div>

            <div className="work-card">
                <img src={work4} alt="" className="work-img" />
                <h4 className="work-card-title">Disfruta la vida</h4>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Work_process