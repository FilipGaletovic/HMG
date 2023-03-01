import React from "react";
import AutoCadPageContent from "./AutoCadPageContent";
import { NavBar, Logo, Footer } from "../HomePage/componentExport";
import "../CSS/AutoCadCSS/AutoCadPage.css";
import LogoIMG from '../assets/HMG LOGO.png'
import { Link } from "react-router-dom";


const AutoCadPage = () => {
  return (
    <>
      <div className="autoCad_nav">
        <div className="autoCad_nav__logo">
         <Link to='/Home'><img src={LogoIMG} alt="" /></Link>
        </div>
            <NavBar/>
        </div>
      <div className="autoCadPage_content">
        <AutoCadPageContent />
      </div>
      <div className="autoCadPage_footer">
        <Footer />
      </div>
    </> 
  );
};
export default AutoCadPage;
