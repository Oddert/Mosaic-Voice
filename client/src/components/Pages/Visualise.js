import React from 'react'
import '../styles/Visualise.scss'

const Visualise = () => (
  <section className='Visualise'>
    <h1>Visualise</h1>
    <div className='Visualise-content'>
      <div className='buttons'>
        <a href='/recorder'>AI Feature Extractor <i className='fa fa-chevron-right'></i></a>
      </div>
      <h2>Analyse Voice</h2>
      <div className='buttons'>
        <a href='/recorder'>Pitch Over Time <i className='fa fa-chevron-right'></i></a>
        <a href='/recorder'>Resonance Over Time <i className='fa fa-chevron-right'></i></a>
      </div>
    </div>
  </section>
)

export default Visualise
