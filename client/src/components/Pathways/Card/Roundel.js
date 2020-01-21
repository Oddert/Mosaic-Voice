import React from 'react'

const Roundel = ({ title, streak }) => {
  const markers = []

  for (let i = 0; i < streak.max; i++) markers.push(
    <div
      className={`marker ${i <= streak.on ? 'active' : 'inactive'}`}
      key={`marker_${i}`}
    />
  )

  return (
    <div className='Roudel'>
      <div className='indicator'>
      <div className='indicator-inner'>
        <div className='indicator-inner-blue'>
          { streak.on }
        </div>
      </div>
      </div>
      <p className='indicator_annotation'>day streak</p>
      <div className='markers'>
        { markers }
      </div>
    </div>
  )
}

export default Roundel
