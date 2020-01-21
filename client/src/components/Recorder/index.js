import React, { useState } from 'react'

import Analyser from './Analyser'

const Record = props => {
  let [audio, setAudio] = useState(null)
  let [error, setError] = useState(null)

  async function getMicrophone () {
    const permission = await navigator.permissions.query({ name:'microphone' })
    if (permission.state === 'denied') {
      setError('You need to allow microphone permissions for that')
      return
    }
    const getAudio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    if (getAudio) setAudio(getAudio)
  }

  function stopMicrophone () {
    audio.getTracks().forEach(each => each.stop())
    setAudio(null)
  }

  // function toggleMicrophone () {
  //   if (audio) stopMicrophone()
  //   else getMicrophone()
  // }

  return (
    <div>
      {error ? error : ''}
      <button onClick={getMicrophone}>Record</button>
      <button onClick={stopMicrophone}>Stop</button>
      {audio ? <Analyser audio={audio} /> : ''}
    </div>
  )
}

export default Record
