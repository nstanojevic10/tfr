import React, { useState } from 'react'
import './Results.scss'
import Ref90 from './Results1990-2000.json'
import Ref00 from './Results2000-2005.json'
import Ref05 from './Results2005-2010.json'
import Ref10 from './Results2010-2015.json'
import Ref15 from './Results2015-now.json'

function Results({ results }) {

const [ref90] = useState (Ref90)
const [ref00] = useState (Ref00)
const [ref05] = useState (Ref05)
const [ref10] = useState (Ref10)
const [ref15] = useState (Ref15)

  return (
    <div className='results'>
      <h1 className='col-10 offset-1'>{results.title}</h1>
      <p className='col-10 offset-1'>{results.text}</p>
      <h2>1990-2000</h2>
      {ref90.map(ref => {
        return (
          <div className='col-10 offset-1' key={ref.id}>
            {ref.id}. 
            <a href={ref.href} target="_blank" rel="noreferrer"> "{ref.ref}"</a><br/><br/>
          </div>
        )
        })}
      <h2>2000-2005</h2>
      {ref00.map(ref => {
        return (
          <div className='col-10 offset-1' key={ref.id}>
            {ref.id}. 
            <a href={ref.href} target="_blank" rel="noreferrer"> "{ref.ref}"</a><br/><br/>
          </div>
        )
        })}
      <h2>2005-2010</h2>
      {ref05.map(ref => {
        return (
          <div className='col-10 offset-1' key={ref.id}>
            {ref.id}. 
            <a href={ref.href} target="_blank" rel="noreferrer"> "{ref.ref}"</a><br/><br/>
          </div>
        )
        })}
      <h2>2010-2015</h2>
      {ref10.map(ref => {
        return (
          <div className='col-10 offset-1' key={ref.id}>
            {ref.id}. 
            <a href={ref.href} target="_blank" rel="noreferrer"> "{ref.ref}"</a><br/><br/>
          </div>
        )
        })}
      <h2>2015-NOW</h2>
      {ref15.map(ref => {
        return (
          <div className='col-10 offset-1' key={ref.id}>
            {ref.id}. 
            <a href={ref.href} target="_blank" rel="noreferrer"> "{ref.ref}"</a><br/><br/>
          </div>
        )
        })}
    </div>
  )
}

export default Results