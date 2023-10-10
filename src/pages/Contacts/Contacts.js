import React from 'react'
import './Contacts.scss'
// import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
// import { FaFacebook , FaLinkedin} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';




function Contact({ contacts }) {
  return (
    <div className='row contact'>
      <div className='col-md-2 offset-md-1 contact1'>
        <h1>{contacts.title}</h1>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-1 vit'>{contacts.vit}</div>
      <div className='col-xs-8 offset-xs-2 col-sm-12 col-md-6 contact2'>
        <div className='info'>
          <a href='mailto:info@tfrtechnology.it' className='text'><FontAwesomeIcon icon={faEnvelope} className='social' />info@tfrtechnology.it</a>
        </div>
        <div className='info'>
          <a href='tel:+0432479788' className='text'><FontAwesomeIcon icon={faPhone} className='social' />0432/479788</a>
        </div>
        <div className='info'>
          <a href='https://www.google.com/maps/place/T.F.R.+TECHNOLOGY+S.R.L./@46.0895267,13.2309722,17z/data=!3m1!4b1!4m5!3m4!1s0x477a3579f6a55555:0x18fe0aa1ec5954ff!8m2!3d46.0895267!4d13.2331609' className='text'><FontAwesomeIcon icon={faLocationPin} className='social' />
            Viale Tricesimo, 103/19 33100 Udine – ITALY</a>
        </div>
        <div className='info'>
          <a href='https://www.facebook.com/easymyo/' target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faFacebook} className='social-icon' /></a>
          <a href='https://www.linkedin.com/company/tfr-technology-s-r-l-/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='social-icon' /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact