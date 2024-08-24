import React from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import '../css/contactMe.css';
import Footer from '../components/Footer';

function ContactMe(){

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9f72dc69-4300-483b-822e-53b00ce19e96");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return(
    <>
      <div className='body'>
        <Hamburgerstate />
        <div className='contact-main'>
          <div className='content'>
            <div className="contInfo">
              <div className="contact">Contact Me</div>
              <div className="touch">Get in Touch</div>
              <div className="msg1">Drop me a line through the form below</div>
              <div className='msg2'> and we'll get back to you.</div>

              <form onSubmit={onSubmit} >

                <div className="name_wrapper">
                  <label>
                    <input className="first_name" name="first_name" id="first_name" type="text" placeholder="First Name*" required/>
                    <input className="last_name" name="last_name" id="last_name" type="text" placeholder="Last Name*" />
                  </label>
                </div>

                <div className='email_wrapper'>
                  <input className="email" name="email" id="email" type="email" placeholder="Email*" required/>
                </div>

                <div className='comments'>
                  <textarea id="comment" name="comment" className="comment" rows="4" cols="100" placeholder='Please feel free to share your thoughts and reviews for me.' />
                </div>

                <div className='txtmsg'>*We will never share your data with anyone else</div>
                <button  className='submit1'>Submit</button>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) 
}
  
export default ContactMe;
