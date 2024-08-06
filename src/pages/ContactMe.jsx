import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import { useNavigate } from 'react-router-dom';
import '../css/contactMe.css';
import Footer from '../components/Footer';

function ContactMe(){
  return(
    <>
      <div className='body'>
        {/* <div className='head'> */}
        <Hamburgerstate />
        {/* </div> */}
        <div className='contact-main'>
          <div className='content'>
            <div className="contInfo">
              <div className="contact">Contact Me</div>
              <div className="touch">Get in Touch</div>
              <div className="msg1">Drop me a line through the form below</div>
              <div className='msg2'> and we'll get back to you.</div>

              <form>
                <div className="name_wrapper">
                  <label>
                    <input className="first_name" id="first_name" type="text" placeholder="First Name*" />
                    <input className="last_name" id="last_name" type="text" placeholder="Last Name*" />
                  </label>
                  </div>

                  <div className='email_wrapper'>
                      <input className="email" id="email" type="text" placeholder="Email*" />
                  </div>

                  <div className='comments'>
                  <textarea id="comment" className="comment" rows="4" cols="100" placeholder='Please feel free to share your thoughts and reviews for me.' />
                  </div>

                  <div className='txtmsg'>*We will never share your data with anyone else</div>
                  <div className='submit'><button>Submit</button></div>
              </form>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) 
}
  
  export default ContactMe;
