import React from 'react'
import { Link } from 'react-router-dom'

const Section = ({ logo, alt, title, src }) => {
  return (
    <Link to={ src } className='section'>
      <img src={ logo } alt={ alt } />
      <div className='title'>
        <p>{ title }</p>
        <i className='fa fa-chevron-right'></i>
      </div>
    </Link>
  )
}

export default Section
