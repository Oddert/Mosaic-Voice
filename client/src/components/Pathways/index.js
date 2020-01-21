import React from 'react'
import '../styles/Pathways.scss'

import Card from './Card/'

import pathways from '../../resources/pathways.js'

const Pathways = () => (
// console.log({pathways})
  <div className='Pathways'>
    <div className='cards'>
      {
        pathways.map(each => <Card key={each._id} {...each} />)
      }
    </div>
  </div>
)

export default Pathways
