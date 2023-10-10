import React from 'react'
import './Introduction.scss'

function Introduction({logo, introduction}) {
  return (
      <div className='row introduction'>
        <div className='col-md-2 offset-md-1 intro1'>
          <img className='logo-introduction' src={logo} alt="logo"/>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-1 vit'>{introduction.vit}</div>
        <div className='col-xs-12 col-sm-12 col-md-6 intro2'>
          <h1 className='naslov'>{introduction.title}</h1>
          <p className='text'>{introduction.text1}<br/>{introduction.text2}</p>
        </div>
        <footer><b>TFR Technology Srl</b> P.IVA 04079660967</footer>
      </div>
  )
}

export default Introduction