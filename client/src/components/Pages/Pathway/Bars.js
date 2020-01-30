import React from 'react'

const Bars = props => {
  function getBars () {
    const out = []
    for (let i=0; i<props.maxStep; i++) {
      out.push(
        <div
          key={`getbars_${i}`}
          className={`bar ${i <= props.currentStep ? 'active' : ''}`}>
        </div>
      )
    }
    return out
  }

  return (
    <div className='Bars'>
      { getBars() }
    </div>
  )
}

export default Bars
