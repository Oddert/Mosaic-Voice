import React, { createRef, useEffect } from 'react'

const AudioVis = props => {
  let canvas = createRef()

  function draw () {
    console.log('draw()')
    navigator.permissions.query({name:'microphone'}).then(function(result) {
      console.log(result)
    })
    // const { audioData } = props
    // if (!audioData) return
    // const cvs = canvas.current
    // const { height, width } = cvs
    // const ctx = cvs.getContext('2d')
    // let x = 0
    // const slideWidth = (width * 1.0) / audioData.length
    //
    // ctx.lineWidth = 2
    // ctx.strokeStyle = '#000000'
    // ctx.clearRect(0, 0, width, height)
    // ctx.beginPath()
    // ctx.moveTo(0, height)
    //
    // for (const item of audioData) {
    //   const y = (item / 255.0) * height
    //   ctx.lineTo(x, y)
    //   console.log({ x, y })
    //   x += slideWidth
    // }
    // ctx.lineTo(x, height / 2)
    // ctx.stroke()
  }

  useEffect(() => {
    draw()
  }, [])

  return (
    <canvas width='300' height='300' ref={canvas} onClick={draw} />
  )
}

export default AudioVis
