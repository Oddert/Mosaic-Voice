import React from 'react'

const Back = () => {
  const goBack = () => window.history.back()
  return (
    <button
      onClick={goBack} 
      className='nav_back'
      name='navigate back'
      title='back'
    >
      <i className='fa fa-chevron-left'></i>
    </button>
  )
}

export default Back
