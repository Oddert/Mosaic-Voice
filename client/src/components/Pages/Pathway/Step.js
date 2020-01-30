import React from 'react'

const Step = props => {
  return (
    <div className='Step--wrapper'>
      <div className='Step'>
        <h2>{ props.step.title }</h2>
        <p>{ props.step.text_content }</p>
        <div className='buttons'>
          <button><i className='fa fa-chevron-left'></i> Previous</button>
          <button className='Next-step'>Next <i className='fa fa-chevron-right'></i></button>
        </div>
      </div>
    </div>
  )
}

export default Step
