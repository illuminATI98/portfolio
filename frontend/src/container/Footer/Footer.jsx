import React, { useState } from 'react';
import { client } from "../../client";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin, AiOutlineGithub, AiFillFacebook} from "react-icons/ai";
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    message: ""
  });
  const [isFormSubmittted, setIsFormSubmittted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {name, email, message} = formData;

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmittted(true);
      });
  }
  return (
    <div className='app__footer app__flex'>
      <motion.div
        whileInView={{x: [200,0], opacity: [0,1]}}
        transition={{duration: 2}}
        className='app__footer-title'
      >
        <h2 className='head-text'>
          Contact
          <span>Me</span>      
        </h2>  
      </motion.div>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <AiOutlineMail />
          <a href="mailto:attiladobi100@gmail.com" className='p-text'>attiladobi100@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <AiOutlinePhone />
          <a href="tel: +36 70 610-4039" className='p-text'>+36 70 610-4039</a>
        </div>
      </div>
      {!isFormSubmittted ?
      
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChange}/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Email' name='email' value={email} onChange={handleChange}/>
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name="message"
            onChange={handleChange}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}> {loading ? "Sending" : "Send Message"}</button>
      </div>
      : 
      <div>
        <h3 className='head-text'>Thank you for getting in touch</h3>
      </div>}
    </div>
  )
}

export default AppWrap(Footer, "contact")