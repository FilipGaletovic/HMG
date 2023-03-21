import React from 'react'
import styles from './styles'
import { useState } from 'react';
import {Route, Routes, NavLink} from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import LogInPage from './LogInPage/LogInPage';
import RegisterPage from './RegisterPage/RegisterPage';
import FoundersPage from './FoundersPage/FoundersPage';
import PaymentPage from './PaymentPage/PaymentPage';
import PrivacyPolicyPage from './PrivacyPolicyPage/PrivacyPolicy';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import ContactUs from './ContactPage/ContactUs';
import AutoCadPage from './AutoCadPage/AutoCadPage';
import AuthenticationPage from './AuthenticationPage/AuthenticationPage'
import ThirdPartyPage from './ThirdPartyPurchasePage/ThirdPartyPage'

 const App = () => (
    <>
    <PayPalScriptProvider options={{"client-id": "AUERKjED_jTLmiKCt76h6tkcbvBe3USsCv8RJFbbUGq0-maDCkwvIOzuXfvur74P5tn6_2REJjL3X9UD"}}>
    <div>
      <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path='/Home' element={ <HomePage />}/>
        <Route path='/service/AutoCad-designs' element={ <AutoCadPage />}/>
        <Route path='/service/Third-party-purchase' element={ <ThirdPartyPage />}/>
        <Route path='/service/Authentication' element={ <AuthenticationPage />}/>
        <Route path='/about/Founders' element={ <FoundersPage />}/>
        <Route path='/about/Payment-options' element={ <PaymentPage />}/>
        <Route path='/about/Privacy-policy' element={ <PrivacyPolicyPage />}/>
        <Route path='/Login' element={<LogInPage />}/>
        <Route path='/Register' element={ <RegisterPage /> } />
        <Route path='/Contact-us' element={ <ContactUs /> } />
      </Routes>
      </div>
      </PayPalScriptProvider>
      </>
  
 );
 export default App

