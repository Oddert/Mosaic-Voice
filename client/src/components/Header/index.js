import React from 'react'
import { useRouteMatch } from 'react-router-dom'

import '../styles/Header.scss'

import Back from './Back'
import Settings from './Settings'

const Header = () => {
  const home = useRouteMatch('/').isExact;
  return (
    <nav className='Header'>
      {
        home
          ? <Settings />
          : <Back />
      }
    </nav>
  )
}

export default Header
