import React, { useState, useEffect } from 'react'
import '../../styles/Path.scss'

import Bars from './Bars'
import Step from './Step'

const Pathway = ({ pathway }) => {
  console.log(pathway)
  const [path, setPath] = useState(pathway)
  const [step, setStep] = useState(1)

  function getPaths () {
    setPath(pathway)
  }

  function nextStep () {
    setStep(step + 1)
  }

  useEffect(getPaths, [])

  return (
    <section className='Pathway'>
      <h1>Pathways</h1>
      {
        path
          ? <>
              <Bars maxStep={path.levels[0].steps.length} currentStep={step} />
              <Step step={path.levels[0].steps[step]} />
            </>
          : 'no bars'
      }
    </section>
  )
}

export default Pathway
