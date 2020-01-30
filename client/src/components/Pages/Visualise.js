import React from 'react'
import '../styles/Visualise.scss'

const Visualise = () => (
  <section className='Visualise'>
    <h1>Visualise</h1>
    <div className='Visualise-content'>
      <div className='buttons'>
        <button>AI Feature Extractor <i className='fa fa-chevron-right'></i></button>
      </div>
      <h2>Analyse Voice</h2>
      <div className='buttons'>
        <button>Pitch Over Time <i className='fa fa-chevron-right'></i></button>
        <button>Resonance Over Time <i className='fa fa-chevron-right'></i></button>
      </div>
    </div>
  </section>
)

export default Visualise
