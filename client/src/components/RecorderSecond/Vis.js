import React from 'react'

class Vis extends React.Component {
  constructor (props) {
    super(props)
    this.canvas = React.createRef()
  }

  draw () {
    const { audioData } = this.props
    const cvs = this.canvas.current
    const { height, width } = cvs
    const context = cvs.getContext('2d')
    let x = 0
    const slideWidth = audioData.length ? (width * 1.0) / audioData.length : 0

    context.lineWidth = 2
    context.strokeStyle = '#2d3e50'
    context.clearRect(0, 0, width, height)
    context.beginPath()
    context.moveTo(0, height / 2)

    for (const item of audioData) {
      const y = (item / 255.0) * height
      context.lineTo(x ,y)
      x += slideWidth
    }
    context.lineTo(x, height / 2)
    context.stroke()
  }

  componentDidUpdate () {
    this.draw()
  }

  render () {
    return (
      <canvas width='300' height='300' ref={this.canvas} />
    )
  }
}

export default Vis
