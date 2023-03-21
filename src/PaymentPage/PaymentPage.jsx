import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react';
import '../CSS/PaymentCSS/PaymentPage.css'
import { Footer, NavBar} from '../HomePage/componentExport'
import PaypalImg from '../assets/paypal-logo.png'
import CreditCardImg from '../assets/CreditCard_icons.png'
import DebitCardImg from '../assets/DebitCard_icons.png'
import PayPalCheckout from './paypalCheckout';
import { v4 as uuidv4 } from 'uuid';
import { PayPalButtons, PayPalScriptProvider  } from '@paypal/react-paypal-js';
const LOCAL_STORAGE_KEY_PAYMENT = 'PaymentPage'


const PaymentPage = () => {

    const [activeSection, setActiveSection] = useState(0);
    const [CreditCardNumber, setCreditCardNumber] = useState();
    const [CreditCardNumber1, setCreditCardNumber1] = useState();
    const [CreditCardNumber2, setCreditCardNumber2] = useState();
    const [CreditCardNumber3, setCreditCardNumber3] = useState();
    const [CreditCardNumber4, setCreditCardNumber4] = useState();
    const [CreditCardName, setCreditCardName] = useState();
    const [CreditCardCVV, setCreditCardCVV] = useState();
    const [CreditCardDate, setCreditCardDate] = useState();
    

    const paymentContainer = document.getElementById('paymentContainerId')
    const payment_section_one = document.getElementById('paymentSectionOneId')
    const payment_section_two = document.getElementById('paymentSectionTwoId')
    const payment_section_three = document.getElementById('paymentSectionThreeId')
    const paypalForm = document.getElementById('paypalForm_Id')
    const CreditCardForm = document.getElementById('CreditCardForm_Id')

   
    
    
    const product = {
        name: 'PayPal Link subscription', 
        price: 0
    }
    const Form_style_visible = {
        'opacity' : 1,
        'visibility': 'visible',
        'transitionDelay': '200ms'
    }
    const Form_style_hidden = {
        'opacity' : 0,
        'visibility': 'hidden',
        'transitionDelay': '0ms'
    }

    if(activeSection !== 0) 
        paymentContainer.style.height = '600px';

        const [PaymentInfo, setPaymentInfo] = useState ( () =>  {
            const PaymentJSON = localStorage.getItem(LOCAL_STORAGE_KEY_PAYMENT)
              return JSON.parse(PaymentJSON)     
    })
    
        useEffect(() => {
            localStorage.setItem(LOCAL_STORAGE_KEY_PAYMENT, JSON.stringify(PaymentInfo))
        }, [PaymentInfo])

    
    switch (activeSection) {
        case 1:
            payment_section_two.classList.add('payment_section_two');
            payment_section_three.classList.add('payment_section_three');
            Object.assign(paypalForm.style, Form_style_visible)
            Object.assign(CreditCardForm.style, Form_style_hidden)

            break;
        case 2:
            payment_section_one.classList.remove('payment_section_one')
            payment_section_two.classList.remove('payment_section_two')
            payment_section_three.classList.add('payment_section_three')
            Object.assign(paypalForm.style, Form_style_hidden)
            Object.assign(CreditCardForm.style, Form_style_visible)
            break;
        case 3:
            payment_section_one.classList.remove('payment_section_one')
            payment_section_two.classList.remove('payment_section_two')
            payment_section_three.classList.remove('payment_section_three')
            Object.assign(paypalForm.style, Form_style_hidden)
            Object.assign(CreditCardForm.style, Form_style_hidden)
            break;
    }
    
    
    
    const handleBtnSave = () => {
        if(CreditCardNumber1 || CreditCardNumber2 || CreditCardNumber3 || CreditCardNumber4)
        setCreditCardNumber(CreditCardNumber1.toString() + 
        CreditCardNumber2.toString() + CreditCardNumber3.toString()
        + CreditCardNumber4.toString())
        else return;

        if(CreditCardNumber < 1000000000000000){
            console.log("rorrw")
        }
        const newPayment_CreditCard = {
            id: uuidv4(),
            CreditCardNumber: 
            CreditCardNumber1.toString() + 
            CreditCardNumber2.toString() + CreditCardNumber3.toString()
            + CreditCardNumber4.toString(),
            CVV: CreditCardCVV,
            NameOnCard: CreditCardName
        }
        if(activeSection === 2){
            setPaymentInfo([newPayment_CreditCard])
        }

    } 

    const CardNumberRef = useRef();

    useEffect(() => {
        CardNumberRef.current.focus();
    }, [activeSection])



   
  return (
    <>
        <div className="paymentNav">
            <NavBar />
        </div>
       

        <div className="paymentContainer__main">
            <h2>Select a payment method:</h2>
        
        <form className='paypalForm' id='paypalForm_Id'>
            <h3>Continue by logging in your PayPal account</h3>
            <PayPalCheckout product={product}/>
        </form>

        
        <form className='CreditCardForm' id='CreditCardForm_Id'>
            <h3>Please fill all the inputs with valid information</h3>
            <layout className='CreditCardLayout'>
                <img src={CreditCardImg} alt="" className='creditImg' />
                <i className='grid-one'>
                <label>Card number</label>
                <div className='credit_number_flex'>
                    <input type='text' 
                           className='input_credit_number'
                           placeholder='2345'
                           maxLength={4}
                           required
                           value={CreditCardNumber1}
                           onChange={(e) => setCreditCardNumber1(e.target.value)}
                           ref={CardNumberRef}
                           />
                    <input type='text' 
                           className='input_credit_number'
                           placeholder='5678'
                           pattern="^[0-9]{4}$"
                           maxLength={4}
                           required
                           value={CreditCardNumber2}
                           onChange={(e) => setCreditCardNumber2(e.target.value)}/>
                    <input type='text' 
                           className='input_credit_number'
                           placeholder='3456'
                           pattern='^[0-9]{4}$'
                           maxLength={4}
                           required
                           value={CreditCardNumber3}
                           onChange={(e) => setCreditCardNumber3(e.target.value)}/>
                    <input type='text' 
                           className='input_credit_number'
                           placeholder='9786'
                           pattern='^[0-9]{4}$'
                           maxLength={4}
                           requiredvalue={CreditCardNumber4}
                           onChange={(e) => setCreditCardNumber4(e.target.value)}/>
                </div>
                <label>Name</label>
                <input type='text' 
                       className='input_credit_two' 
                       value={CreditCardName}
                       onChange={(e) => setCreditCardName(e.target.value)}/>
                </i>
                <div>
                    <label>CVV</label>
                    <input type='text'
                           placeholder='345'
                           maxLength={3}
                           value={CreditCardCVV}
                           onChange={(e) => setCreditCardCVV(e.target.value)} />
                    <label>Expiry date</label>
                    <input type='date' />
                </div>
            </layout>
        </form>

            <div className="paymentContainer__grid" id='paymentContainerId'>
                <div className="payment_section" id='paymentSectionOneId'>
                    <div className="input_one">
                        <input type='radio' 
                               value='PayPal' 
                               name='payment'
                               id='paypalRadioID' 
                               onClick={() => setActiveSection(1)}
                        />
                        <h3>PayPal</h3>
                    </div>
                    <img src={PaypalImg} alt="" draggable='false'/>
                </div>
                <div className="payment_section" id='paymentSectionTwoId'>
                    <div className="input_two">
                        <input type='radio' 
                               name='payment'
                               value='CreditCard' 
                               id='creditRadioID' 
                               onClick={() => setActiveSection(2)}
                            />
                        <h3>Credit Card</h3>
                    </div>
                    <img src={CreditCardImg} alt="" draggable='false'/>
                </div>
                <div className="payment_section" id='paymentSectionThreeId'>
                    <div className="input_three">
                        <input type="radio" 
                               value='DebitCard' 
                               name='payment'
                               id='DebitRadioID'
                               onClick={() => setActiveSection(3)}
                            />
                        <h3>Debit Card</h3>
                    </div>
                    <img src={DebitCardImg} alt="" draggable='false'/>
                </div>
            </div>
            <div className="saveContainer">
                <button className='payment_btnSave' 
                        id='payment_btnSave_Id'
                        onClick={handleBtnSave}
                        >
                        Save Changes
                </button>
            </div>
        </div>

        <div className="paymentFooter">
            <Footer />
        </div>
       
    </>
  )
}

export default PaymentPage