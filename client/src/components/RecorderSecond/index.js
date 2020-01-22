import React from 'react'

import Analyser from './Analyser'

class RecorderSecond extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      audio: null
    }
    this.getMicrophone = this.getMicrophone.bind(this)
    this.stopMicrophone = this.stopMicrophone.bind(this)
  }

  async getMicrophone () {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    })
    this.setState({ audio })
  }

  stopMicrophone () {
    this.state.audio.getTracks().forEach(e => e.stop)
    this.setState({ audio: null })
  }

  render () {
    return (
      <div>
        <button onClick={this.getMicrophone}>Start</button>
        <button onClick={this.stopMicrophone}>Stop</button>
        {this.state.audio ? <Analyser audio={this.state.audio} /> : ''}
      </div>
    )
  }
}

export default RecorderSecond
