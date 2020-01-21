import React from 'react'
import './styles/Container.scss'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Goals from './Pages/Goals'
import Header from './Header/'
import Home from './Pages/Home'
import Recorder from './Recorder/'
import Test from './Pages/Test'
import Tools from './Pages/Tools'
import Visualise from './Pages/Visualise'

function Container () {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/test' component={Test} />
      <Route exact path='/tools' component={Tools} />
      <Route exact path='/visualise' component={Visualise} />
      <Route exact path='/goals' component={Goals} />
      <Route exact path='/recorder' component={Recorder} />
      {/* Welcome to Mosaic, Joe */}
      <Header />
    </Router>
  )
}

export default Container
