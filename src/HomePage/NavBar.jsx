import React from 'react'
import '../CSS/index.css'
import { useState, useContext } from 'react'
import {Link} from 'react-router-dom'


import {navBar, SubMenuAbout, SubMenuProducts, SubMenuService} from '../constants/index'

const NavBar = () => {






  return (
    <>
   
    <div className='navBar'>
      <Link to='/' className='navHome'>Home</Link>
      <span className='HomeSpan'></span>
      <div className="subNav">
        <button className='subNavBtn-products'>Products</button>
        <div className="subNav-content contentProduct">
          <Link to='/'>Product1</Link>
          <span className='subSpan'></span>
          <Link to='/'>Product2</Link>
          <span className='subSpan'></span>
          <Link to='/'>Product3</Link>
          <span className='subSpan'></span>
        </div>
      </div>
      <div className="subNav">
        <button className='subNavBtn'>Service</button>
        <div className="subNav-content contentService">
          <Link to='/'>AutoCad deisigns</Link>
          <span className='subSpan'></span>
          <Link to='/'>Third-party purchase</Link>
          <span className='subSpan'></span>
          <Link to='/'>Authentication</Link>
          <span className='subSpan'></span>
          
        </div>
      </div>
      <div className="subNav">
        <button className='subNavBtn'>About</button>
        <div className="subNav-content contentAbout">
          <Link to='/'>Founders</Link>
          <span className='subSpan'></span>
          <Link to='/'>Payment Options</Link>
          <span className='subSpan'></span>
          <Link to='/'>Privacy Policy</Link>
          <span className='subSpan'></span>
        </div>
      </div>
      <Link to='/Login' className='btnLink'>
        <button className='contactBtn'>Contact Us</button>
      </Link>
         
      <Link to='/Login' className='btnLink'>
        <button className='loginBtn' id='logBtn'>Log In</button>
      </Link>

      </div>
      
    </>
  )
}

export default NavBar
