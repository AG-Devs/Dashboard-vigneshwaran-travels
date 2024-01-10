import React from 'react'
import './Header.css'
import {Outlet} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <img src={require('../images/logo1.png')} alt='logo'></img>
        <h1>Vigneshwaran Travels</h1>
        <Outlet />
    </div>
  )
}

export default Header