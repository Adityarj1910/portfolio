import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import '../css/MyIntro.css';
import myImage from '../images/project.png';
import Footer from '../components/Footer';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    breakpoint: { max: 767, min: 464 },
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
      <div className='intro-body'>
        <Hamburgerstate />
        <div className='content-main'>
          <div className="content-head">
            <div className="left">
              <h1>So, Who am I?</h1>
              <p>Hey there! 👋
Welcome to my corner of the web! I’m Aditya, a passionate developer who lives and breathes code—but that's not all! When I’m not crafting seamless user experiences or solving tricky bugs, you’ll find me behind a camera, capturing the world one click at a time. 📸 While I’ve got a creative eye behind the camera, it’s in front of the screen where I really shine. I’m always on the lookout for the next big thing in tech and love pushing the boundaries of what’s possible.
And hey, just below, you’ll find a skill bar that shows what I’m all about—because who doesn’t love a good visual, right? So, if you’re looking for someone who can bring a blend of technical expertise, creative flair, and a dash of fun to the table—let’s connect! You can check out my CV below to see what I’ve been up to, and feel free to reach out. Let’s create something amazing together!</p>
              {/* <div className='sk'>Skills:</div> */}
              <div className="lower">
                <div className="skill">
                  <div className="center">
                    <div className="sub">C++</div>
                    <div className="prog">
                      <div className="a90"></div>
                    </div>
                  </div>
                  <div className="center">
                    <div className="sub">Java</div>
                    <div className="prog">
                      <div className="a70"></div>
                    </div>
                  </div>
                  <div className="center">
                    <div className="sub">Python</div>
                    <div className="prog">
                      <div className="a60"></div>
                    </div>
                  </div>
                  <div className="center">
                    <div className="sub">Problem Solving</div>
                    <div className="prog">
                      <div className="a80"></div>
                    </div>
                  </div>
                  <div className="center">
                    <div className="sub">JavaScript</div>
                    <div className="prog">
                      <div className="a80"></div>
                    </div>
                  </div>
                </div>
                <div className="skill">
                  <div className="center">
                    <div className="sub">HTML/CSS</div>
                    <div className="prog">
                      <div className="a80"></div>
                    </div>
                  </div>
                  <div className="center">
                    <div className="sub">React.js</div>
                    <div className="prog">
                      <div className="a70"></div>
                    </div>
                  </div>
                  <div className="center">
                    <div className="sub">SQL</div>
                    <div className="prog">
                      <div className="a65"></div>
                    </div>
                  </div>
                  <div className="center">
                    <div className="sub">Git/GitHub</div>
                    <div className="prog">
                      <div className="a60"></div>
                    </div>
                  </div>
                  <div className="center">
                    <div className="sub">Photography</div>
                    <div className="prog">
                      <div className="a90"></div>
                    </div>
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
                    <img src={imageUrl.url} alt="movie" onClick={imageUrl.url}/>
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="lr">
              <h3>Photography</h3>
              <p>Capturing Moments 📸
              When I’m not deep in code, you’ll likely find me with a camera in hand, chasing the perfect shot. Photography isn’t just a hobby—it’s my way of seeing the world from a different perspective. Whether it’s the vibrant colors of a sunset or the candid moments of everyday life, I love freezing those split seconds that tell a story. Just like in coding, it’s all about creativity, timing, and a bit of magic. Take a peek at some of my favorite captures—each one has a story of its own!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyIntro;