import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/HomeCSS/MobileNav.css'
const LOCAL_STORAGE_KEY_LOGIN = 'LoginForm'

const MobileNav = () => {

  const [myAccountText, setMyAccountText] = useState('');
  const [LoginLink, setLoginLink] = useState('/Login');
  
  const registerJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LOGIN))

  useEffect(() => {
    if(registerJSON !== null){
    registerJSON.find(id => id.username !== '' ? setMyAccountText('My Account'): setMyAccountText('Log In'));
    setLoginLink('/my-account')
  }
    else setMyAccountText('Log In')
  }, [])

  return (
    
    
    <>
        <div className="MobileList">
        <span className='HomeSpan'></span>
        <button className='liHome'>Home</button>
        <span className='HomeSpan'></span>
        <button className='liProducts'>Products</button>
        <span className='HomeSpan'></span>
        <div className="subNav-content contentProduct">
          <Link to='/'>Product1</Link>
          <span className='subSpan'></span>
          <Link to='/'>Product2</Link>
          <span className='subSpan'></span>
          <Link to='/'>Product3</Link>
          <span className='subSpan'></span>
        </div>
        <button className='liService'>Service</button>
        <span className='HomeSpan'></span>
        <div className="subNav-content contentService">
          <Link to='/service/AutoCad-designs'>AutoCad deisigns</Link>
          <span className='subSpan'></span>
          <Link to='/service/Third-party-purchase'>Third-party purchase</Link>
          <span className='subSpan'></span>
          <Link to='/service/Authentication'>Authentication</Link>
          <span className='subSpan'></span>
          
        </div>
        <button className='liAbout'>About</button>
        <span className='HomeSpan'></span>
        <div className="subNav-content contentAbout">
          <Link to='/about/Founders'>Founders</Link>
          <span className='subSpan'></span>
          <Link to='/about/Payment-options'>Payment Options</Link>
          <span className='subSpan'></span>
          <Link to='/about/Privacy-policy'>Privacy Policy</Link>
          <span className='subSpan'></span>
        </div>
        <button className='btnMobileList'>
            <Link to='/Contactus'>Contact Us</Link>
        </button>
        <span className='HomeSpan'></span>
        <button className='btnMobileList'>
            <Link to={LoginLink}>{myAccountText}</Link>
        </button>
        <span className='HomeSpan'></span>

           
        </div>
    </>
  )
}

export default MobileNav