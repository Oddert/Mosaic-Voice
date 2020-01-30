import React from 'react'

const TrainingLink = props => {
  return (
    <a
      className='Pathway-button TrainingLink'
      href={`/pathway?_id=${props._id}`}
    >
      Training Link
    </a>
  )
}

export default TrainingLink
