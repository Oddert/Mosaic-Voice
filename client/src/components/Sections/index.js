import React from 'react'
import '../styles/Sections.scss'

import goals from '../../resources/icons/goals.svg'
import visualise from '../../resources/icons/visualise.svg'
import tools from '../../resources/icons/tools.svg'

import Section from './Section'

const Sections = () => {
  return (
    <div className='Sections'>
      <Section
        logo={ tools }
        alt={ `tools logo` }
        title={ `Training Tools` }
        src={ `/tools` }
      />
      <Section
        logo={visualise}
        alt={`visualise logo`}
        title={`Visualise Your Voice`}
        src={`/visualise`}
      />
      <Section
        logo={goals}
        alt={`goals logo`}
        title={`Goal Attainment`}
        src={`goals`}
      />
    </div>
  )
}

export default Sections
