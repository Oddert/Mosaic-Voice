import React, { useState, useEffect } from 'react'

import AudioVis from './AudioVis'

const Analyser = props => {
  console.log(props)
  let [audioData, setAudioData] = useState(new Uint8Array(0))

  let audioContext = new (window.AudioContext || window.webkitAudioContext)()
  let analyser = audioContext.createAnalyser()
  let dataArray = new Uint8Array(analyser.frequencyBinCount)
  let source = audioContext.createMediaStreamSource(props.audio)
  source.connect(analyser)
  let rafId = requestAnimationFrame(tick)

  useEffect(() => {
    window.cancelAnimationFrame(rafId)
    console.log('unmount')
  }, [rafId])

  useEffect(() => {
    console.log('mount?')
  }, [])

  function tick () {
    analyser.getByteTimeDomainData(dataArray)
    setAudioData(dataArray)
    rafId = requestAnimationFrame(tick)
  }

  return (
    <div>
      <AudioVis audioData={audioData} />
    </div>
  )
}

export default Analyser
