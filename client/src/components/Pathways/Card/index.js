import React from 'react'

import Roundel from './Roundel'
import Title from './Title'
import TrainingLink from './TrainingLink'
import PageLink from './PageLink'

const Card = props => {
  return (
    <div className='Pathways-card'>
      <Title title={props.title} />
      <Roundel {...props} />
      <TrainingLink {...props} />
      <PageLink {...props} />
    </div>
  )
}

export default Card
