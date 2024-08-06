import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import { useNavigate } from 'react-router-dom';
import '../css/home.css'
import myImage from '../images/project4.png';
import resume from '../assets/Aditya-Resme.pdf'
import Footer from '../components/Footer';
// import { useNavigate } from 'react-router-dom';

function Home(){
  const navigate = useNavigate();

  const contactMe = () => {
    navigate('/contactMe'); 
  };


  return(
    <>
      <div className='main-body'>
        {/* <div className='head'> */}
        <Hamburgerstate />
        {/* </div> */}
        <div className='main'>
          <div className='content'>
            <div className="devInfo">
              <div className="hello">Hey, I am</div>
              <div className="name">Aditya Raj</div>
              <div className="info">Developer, Athelete, Photographer, A fun loving Guy.</div>
              <div className="home-buttons">
                <a href={resume} target="_blank"><button>Download CV</button></a>
                <button onClick={contactMe}>Contact Me</button>
              </div>
            </div>
            <div className="devPic"><img src={myImage} alt='me' /></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home;