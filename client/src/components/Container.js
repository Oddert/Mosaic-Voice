import React from 'react'
import './styles/Container.scss'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Goals from './Pages/Goals'
import Header from './Header/'
import Home from './Pages/Home'
import Pathway from './Pages/Pathway/'
import Test from './Pages/Test'
import Tools from './Pages/Tools'
import Visualise from './Pages/Visualise'


import Recorder from './Recorder/'
import RecorderSecond from './RecorderSecond'

const ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`

const samplePath = {
  _id: 'ujhbf4378f83f93f3f',
  title: 'Breathing Excersise',
  levels: [
    {
      require_previous: false,
      description: 'basic training',
      steps: [
        {
          type: 'Instruction',
          title: 'Instruction',
          text_content: ipsum,
          engine: 'Pitch'
        },
        {
          type: 'Instruction',
          title: 'Instruction',
          text_content: ipsum,
          engine: 'Pitch'
        },
        {
          type: 'Instruction',
          title: 'Instruction',
          text_content: ipsum,
          engine: 'Pitch'
        },
        {
          type: 'Instruction',
          title: 'Instruction',
          text_content: ipsum,
          engine: 'Pitch'
        }
      ]
    },
    {
      require_previous: false,
      description: 'basic training',
      steps: [
        {
          type: 'Instruction',
          text_content: ipsum,
          engine: 'Pitch'
        }
      ]
    },
    {
      require_previous: false,
      description: 'basic training',
      steps: [
        {
          type: 'Instruction',
          text_content: ipsum,
          engine: 'Pitch'
        }
      ]
    }
  ]
}

function Container () {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/test' component={Test} />
      <Route exact path='/tools' component={Tools} />
      <Route exact path='/visualise' component={Visualise} />
      <Route exact path='/goals' component={Goals} />
      <Route exact path='/recorderold' component={Recorder} />
      <Route exact path='/recorder' component={RecorderSecond} />
      <Route path='/pathway'>
        <Pathway pathway={samplePath} />
      </Route>
      {/* Welcome to Mosaic, Joe */}
      <Header />
    </Router>
  )
}

export default Container
