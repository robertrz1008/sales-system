import React from 'react'
import "../styles/Navbar.css"
import { useAppContext } from '../../context/AppContext'
import { AppContextIn } from '../../Interface/AppIn'

function Navbar() {

  const {title} = useAppContext() as AppContextIn

  return (
    <div className='navbar-con'>
        <h2>{title}</h2>
    </div>
  )
}

export default Navbar