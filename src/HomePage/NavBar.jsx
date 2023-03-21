import React from "react";
import "../CSS/index.css";
import "../CSS/HomeCSS/MobileNav.css";
import { useState, useContext, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  navBar,
  SubMenuAbout,
  SubMenuProducts,
  SubMenuService,
} from "../constants/index";
import { MobileNav, Logo } from "./componentExport";
const LOCAL_STORAGE_KEY_LOGIN = "LoginForm";
const LOCAL_STORAGE_KEY_AUTOCAD = 'AutoCad_order'


const NavBar = () => {

  const {ref: navRef, inView: navVisible } = useInView()
  const [myAccountText, setMyAccountText] = useState('');
  const [LoginLink, setLoginLink] = useState('/Login');
  
  
  useEffect(() => {
    handleNavBar()
  }, [])

  const handleNavBar = () => {
    var nav_div = document.getElementById("navbar");
    var contentProduct_invisible = document.getElementById(
      "subnav__contnentProduct__Invisible"
    );
    var contentService_invisible = document.getElementById(
      "subnav__contnentService__Invisible"
    );
    var contentAbout_invisible = document.getElementById(
      "subnav__contnentAbout__Invisible"
    );
    var invisible = nav_div.offsetTop;
    
        nav_div.classList.add('navInvisible')
        nav_div.style.transition = 'none'
        contentProduct_invisible.classList.remove('contentProduct')
        contentProduct_invisible.classList.add('content__product__invisible')
        contentService_invisible.classList.add('content__service__invisible')
        contentAbout_invisible.classList.add('content__about__invisible')
      }


      const hamburger = document.getElementById("hamburgerId");
      const mobileNav = document.getElementById("mobileNavId");
      
      function handleBurger() {
        hamburger.classList.toggle("is-active");
        mobileNav.classList.toggle("is-active");
      }
      
      const registerJSON = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY_LOGIN)
      );
      const AutoCadJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_AUTOCAD))

      
      useEffect(() => {
        if (registerJSON !== null) {
          registerJSON.find((id) =>
            id.username !== ""
              ? setMyAccountText("My Account")
              : setMyAccountText("Log In")
          );
          setLoginLink("/my-account");
        } else setMyAccountText("Log In");
      }, []);

    
    const [CartNumber, setCartNumber] = useState(0); 
    useEffect(() => {
      if(AutoCadJSON !== null){
        setCartNumber([AutoCadJSON.length])
      }
    }, [AutoCadJSON])


  return (
    <>
    <div className='navBar' onLoad={handleNavBar} id='navbar' ref={navRef}>
      <div className="navLogo__invisible">
      </div>
      <Link to='/' className='navHome'>Home</Link>
      <span className='HomeSpan'></span>
      <div className="subNav">
        <button className='subNavBtn-products'>Products</button>
        <div className="subNav-content contentProduct" id='subnav__contnentProduct__Invisible'>
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
        <div className="subNav-content contentService" id='subnav__contnentService__Invisible'>
          <Link to='/service/AutoCad-designs'>AutoCad deisigns</Link>
          <span className='subSpan'></span>
          <Link to='/service/Third-party-purchase'>Third-party purchase</Link>
          <span className='subSpan'></span>
          <Link to='/service/Authentication'>Authentication</Link>
          <span className='subSpan'></span>
          
        </div>
      </div>
      <div className="subNav">
        <button className='subNavBtn'>About</button>
        <div className="subNav-content contentAbout" id='subnav__contnentAbout__Invisible'>
          <Link to='/about/Founders'>Founders</Link>
          <span className='subSpan'></span>
          <Link to='/about/Payment-options'>Payment Options</Link>
          <span className='subSpan'></span>
          <Link to='/about/Privacy-policy'>Privacy Policy</Link>
          <span className='subSpan'></span>
        </div>
      </div>
      <Link to='/Contact-us' className='btnLink'>
        <button className='contactBtn'>Contact Us</button>
      </Link>
      
         
      <Link to={LoginLink} className='btnLink'>
        <button className='loginBtn' id='logBtn'>
          {myAccountText}
          {myAccountText === 'My Account' ? 
          <div className='cart_number'>
            {CartNumber}
          </div> : ''}  
        </button>
      </Link>
      </div>
      <div className="hamburgerMenu">
        <button className="hamburger" id="hamburgerId" onClick={handleBurger}>
          <div className="hamburger-bar"></div>
        </button>
      </div>

      <div className="MobileNav" id="mobileNavId">
        <MobileNav />
      </div>
    </>
  )
}


export default NavBar;
