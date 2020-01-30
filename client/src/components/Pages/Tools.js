import React from 'react'

import '../styles/Tools.scss'

const Tools = () => (
  <section className='Tools'>
    <h1>Tools</h1>
    <div className='Tools-content'>
      <h2>Quick Practice</h2>
      <div className='buttons'>
        <button>Breathing <i className='fa fa-chevron-right'></i></button>
        <button>Warm Up <i className='fa fa-chevron-right'></i></button>
        <button>Pitch Work <i className='fa fa-chevron-right'></i></button>
      </div>
      <h2>Analyse The Voice</h2>
      <div className='buttons'>
        <button>Pitch Recorder <i className='fa fa-chevron-right'></i></button>
        <button>Resonance Estmater <i className='fa fa-chevron-right'></i></button>
        <button>Connect to an EGG <i className='fa fa-chevron-right'></i></button>
        <button>Continous Listener <i className='fa fa-chevron-right'></i></button>
      </div>
    </div>
  </section>
)

export default Tools
