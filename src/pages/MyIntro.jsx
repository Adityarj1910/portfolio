import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import '../css/MyIntro.css';
import myImage from '../images/project.png';
import Footer from '../components/Footer';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cpp from '../assets/c++.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import mysql from '../assets/mysql.png';
import python from '../assets/python.png';
import git from '../assets/git.png';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';

export const sliderImageUrl = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img4 },
  { url: img5 },
  { url: img6 },
  { url: img7 },
  { url: img8 },
  { url: img9 },
  { url: img10 }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  }
};

function MyIntro() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Hamburgerstate />
      <div className='intro-body'>
        <div className='content-main'>
          <div className="content-head">
            <div className="left">
              <h1>So, Who am I?</h1>
              <div className="content-body">
                <p>Hey there! 👋
                  Welcome to my corner of the web!  I'm Aditya—a developer who loves to craft seamless user experiences and tackle tricky bugs. But that's not all—when I'm not coding, I'm out capturing the world one photo at a time. 📸
                  <br />
                  {/* {line} */}
                  Curious about my skills? Scroll down to see my skill bar—because who doesn't love a good visual? If you're after someone who blends technical expertise with creative flair (and a bit of fun), let's connect! Check out my other section in this website, and don't hesitate to reach out. Let's create something amazing together!

                </p>
                {/* <div className='sk'>Skills:</div> */}
                <div className="skill">
                  <div className="image">
                    <img src={cpp} alt='C++' />
                    <p>C++</p>
                  </div>
                  <div className="image">
                    <img src={html} alt='HTML' />
                    <p>HTML</p>
                  </div>
                  <div className="image">
                    <img src={css} alt='CSS' />
                    <p>CSS</p>
                  </div>
                  <div className="image">
                    <img src={js} alt='Javascript' />
                    <p>Javascript</p>
                  </div>
                  <div className="image">
                    <img src={react} alt='React js' />
                    <p>React js</p>
                  </div>
                  <div className="image">
                    <img src={mysql} alt='MySQL' />
                    <p>MySQL</p>
                  </div>
                  <div className="image">
                    <img src={python} alt='Python' />
                    <p>Python</p>
                  </div>
                  <div className="image">
                    <img src={git} alt='Git' />
                    <p>Git</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <img src={myImage} alt='me' className='self' />
            </div>
          </div>
        </div>
        <div className='grand'>
          <div className="parent">
            <Carousel
              responsive={responsive}
              draggable={false}
              autoPlay={true}
              autoPlaySpeed={5000}
              swipeable={true}
              showDots={false}
              infinite={true}
              partialVisible={true}
              dotListClass="custom-dot-list-style"
            >
              {sliderImageUrl.map((imageUrl, index) => {
                return (
                  <div className="slider" key={index}>
                    <img src={imageUrl.url} alt="movie" onClick={imageUrl.url} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="lr">
            <h2>Photography</h2>
            <p>Capturing Moments 📸
              When I'm not deep in code, you'll likely find me with a camera in hand, chasing the perfect shot. Photography isn't just a hobby—it's my way of seeing the world from a different perspective. Whether it's the vibrant colors of a sunset or the candid moments of everyday life, I love freezing those split seconds that tell a story. Just like in coding, it's all about creativity, timing, and a bit of magic. Take a peek at some of my favorite captures—each one has a story of its own!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyIntro;