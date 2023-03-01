import React from 'react'
import '../CSS/index.css'
import LogoIMG from '../assets/HMG LOGO.png'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo-container'>
        <NavLink to='/Home'><img src ={LogoIMG}  alt="" className='logoImg'/></NavLink>
    </div>
  )
}

export default Logo