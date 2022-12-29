import React from 'react'
import Card from '../Card'
import './index.css'

const Department = () => {
  return (
    <div className='department'>
       <div className="container">
        <div className="title-header">
                <h5 className='subtitle'>Departamentos</h5>
                <h2 className='title'>Los dentistas son especialistas</h2>
        </div>
        <p className='department-title'>¡Hemos reunido solo a especialistas calificados con una amplia experiencia de forma gratuita para cualquier problema!</p>
       <div className="cards">
        <Card title={"Gran red de clínicas"} description={"Sample text. Click to select the Text Element."}></Card>
        <Card title={"Dentistas profesionales"} description={"Sample text. Click to select the Text Element."}></Card>
        <Card title={"Materiales duraderos"} description={"Sample text. Click to select the Text Element."}></Card>
       </div>
       </div>
    </div>
  )
}

export default Department