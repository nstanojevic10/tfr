import React from 'react'
import './Aim.scss'

function Aim({ logo, aim }) {
  return (
    <div className='row aim'>
      <div className='col-md-2 offset-md-1 aim1'>
        <img className='logo' src={logo} alt="logo" />
      </div>
      <div className='col-xs-12 col-sm-12 col-md-1 vit'>{aim.vit}</div>
      <div className='col-xs-12 col-sm-12 col-md-6 aim2'>
        <h1 className='naslov'>{aim.title}</h1>
        <p className='text'>{aim.text}</p>
      </div>
    </div>
  )
}

export default Aim