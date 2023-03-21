import React from "react";
import "../CSS/ContactCSS/ContactUs.css";
import { useState, useContext, useRef, useEffect } from "react";
import { NavBarMain, Logo, Footer } from "../HomePage/componentExport";
import emailjs from '@emailjs/browser';
const LOCAL_STORAGE_KEY_LOGIN = 'LoginForm'


const ContactUs = () => {

  const btnEdit = document.getElementById('btn_edit_personal_input_Id')
  const btnSave = document.getElementById('btn_save_personal_input_Id')
  const registerJSON = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LOGIN))



  const [username, setUsername] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  const inputRef = useRef();

  const form = useRef();

  const handleSendButton = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_szkvchm', 'template_krhjed9', form.current, 'pqQ0JCcURx7PL6WmE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  const handleEditButton = (e) => {
    e.preventDefault();
    document.getElementById('personal_info_overlay_Id').style.display = 'none'
    inputRef.current.focus();
    btnEdit.style.display = 'none'
    btnSave.style.display = 'block'
  }
  const handleSaveButton = (e) => {
    e.preventDefault();
    document.getElementById('personal_info_overlay_Id').style.display = 'block'
    btnEdit.style.display = 'block'
    btnSave.style.display = 'none'
  }

  useEffect(() => {
    if(!registerJSON){
      inputRef.current.focus();
      document.getElementById('personal_info_overlay_Id').style.display = 'none'
    }
  }, []);

  useEffect(() => {
    if(registerJSON !== null){
    registerJSON.find(id => id.username !== '' ? setUsername(id.username) : setUsername(''))
    registerJSON.find(id => id.company !== '' ? setCompany(id.company) : setCompany(''))
    registerJSON.find(id => id.email !== '' ? setEmail(id.email) : setEmail(''))
    registerJSON.find(id => id.country !== '' ? setAdress(id.country) : setAdress(''))
    registerJSON.find(id => id.id !== '' ? setPhone(id.id) : setPhone(''))
    }
    else{
      setAdress('')
      setCompany('')
      setEmail('')
      setPhone('')
      setUsername('')
      
    }
  }, [])

  return (
    <>
    <div className="Logo-about">
            <div className="Logo_container">
            <Logo />
            </div>
            <NavBarMain />
        </div>
      <div className="contact_container_main">
        <form className="contact_form" ref={form}>
          <h2>Contact Us</h2>
          <div className="personal_info_overlay" 
               id="personal_info_overlay_Id"></div>
          <div className="contact_personal_inputs">

            <label htmlFor="Name">Name</label>
            <input type="text" 
                   ref={inputRef} 
                   value={username}
                   id='input_username_Id'
                   onChange={(e) => setUsername(e.target.value)}
                   />
            <label htmlFor="Company">Company</label>
            <input type="text" 
                   value={company}
                   id='input_company_Id'
                   onChange={(e) => setCompany(e.target.value)}
                   />
            <label htmlFor="Phone">Phone Number</label>
            <input type="text"
                   value={phone}
                   id='input_phone_Id' 
                   onChange={(e) => setPhone(e.target.value)}
                   />
            <label htmlFor="Adress">Adress</label>
            <input type="text"
                   value={adress}
                   id='input_adress_Id' 
                   onChange={(e) => setAdress(e.target.value)}
                   />
            <label htmlFor="Email">Email</label>
            <input type="text" 
                   value={email}
                   id='input_email_Id'
                   onChange={(e) => setEmail(e.target.value)}
                   />
          </div>
          
          <button
            className="btn_edit_personal_input"
            id="btn_edit_personal_input_Id"
            onClick={handleEditButton}
          >
            Edit
          </button>
          <button className="btn_save_personal_input"
                  id="btn_save_personal_input_Id"
                  onClick={handleSaveButton}
          >Save</button>
          <h4 className="textArea_Title">Write-up</h4>
          <textarea className="textArea"
                    id="textArea_Id"
                    value={textAreaValue}
                    onChange={(e) => setTextAreaValue(e.target.value)}
                    placeholder='Write here about your request, questions...'
          />
          <button className="btn_send" onClick={handleSendButton}>Send</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
