import React from 'react'
import imgBanner from '../../images/medico-banner.png'
import './index.css'

const Banner = () => {
  return (
    <div className=''>
    <div className='banner'>
     
        <div className="banner-img">
            <img src={imgBanner} alt="" />
        </div>
        <div className="banner-content">
            <h1 className="banner-title">Siempre estamos listos para ayudar</h1>
            <div className="banner-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit culpa qui perspiciatis nulla reprehenderit fugiat ab, dolores iste eum quam aut temporibus deserunt unde corporis, illo exercitationem cupiditate voluptatem dignissimos?</div>
            <button className="button banner-button">Contactenos</button>
        </div>
      
        
    </div>
    <div className='banner-divider'><svg viewBox="0 0 500 150" preserveAspectRatio="none" ><path d="M-18.34,-13.32 C150.00,150.00 411.68,-58.72 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" ></path></svg></div>  
    </div>
  )
}

export default Banner