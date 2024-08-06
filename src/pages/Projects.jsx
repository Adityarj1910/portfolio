import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hamburgerstate from '../components/Hamburgerstate';
import Footer from '../components/Footer';
import '../css/Projects.css';

import img1 from '../images/projects/port1.png';
import img2 from '../images/projects/port2.png';
import img3 from '../images/projects/port3.png';

export const sliderImageUrl = [
  { url: img1 },
  { url: img2 },
  { url: img3 }
];

function Projects() {
  return (
    <>
      <Hamburgerstate />
      <div className='projects'>
        <div className="heading">
          <h1>Projects</h1>
        </div>

        <div className="project1">
          <div className="project-info">
            <div className="title">
              <h3>Portfolio</h3>
            </div>
            <div className="about">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, delectus, placeat laboriosam adipisci rerum fugiat veritatis sed cum cupiditate earum. Facilis tempora accusamus nulla ex, quasi nam aliquam quo?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel non inventore ipsum fuga qui illo eum facere atque eius ullam neque at ratione quod cum, officiis perspiciatis ex necessitatibus aliquam maiores dolore quisquam enim aliquid unde. Adipisci enim animi quas.
              </p>
            </div>
          </div>
          <div className="cor">
            <div className="cor-images">
              <Carousel className='coors'
                showThumbs={false} autoPlay infiniteLoop interval={4000}>
                {sliderImageUrl.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={`img${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="project2">
          <div className="cor2">
            <div className="cor-images2">
              <Carousel className='coors'
                showThumbs={false} autoPlay infiniteLoop interval={4000}>
                {sliderImageUrl.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={`img${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="project-info">
            <div className="title">
              <h3>Portfolio</h3>
            </div>
            <div className="about">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, delectus, placeat laboriosam adipisci rerum fugiat veritatis sed cum cupiditate earum. Facilis tempora accusamus nulla ex, quasi nam aliquam quo?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel non inventore ipsum fuga qui illo eum facere atque eius ullam neque at ratione quod cum, officiis perspiciatis ex necessitatibus aliquam maiores dolore quisquam enim aliquid unde. Adipisci enim animi quas.
              </p>
            </div>
          </div>
        </div>

        <div className="project1">
          <div className="project-info">
            <div className="title">
              <h3>Portfolio</h3>
            </div>
            <div className="about">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, delectus, placeat laboriosam adipisci rerum fugiat veritatis sed cum cupiditate earum. Facilis tempora accusamus nulla ex, quasi nam aliquam quo?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel non inventore ipsum fuga qui illo eum facere atque eius ullam neque at ratione quod cum, officiis perspiciatis ex necessitatibus aliquam maiores dolore quisquam enim aliquid unde. Adipisci enim animi quas.
              </p>
            </div>
          </div>
          <div className="cor">
            <div className="cor-images">
              <Carousel className='coors'
                showThumbs={false} autoPlay infiniteLoop interval={4000}>
                {sliderImageUrl.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={`img${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="project2">
          <div className="cor2">
            <div className="cor-images2">
              <Carousel className='coors'
                showThumbs={false} autoPlay infiniteLoop interval={4000}>
                {sliderImageUrl.map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={`img${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="project-info2">
            <div className="title2">
              <h3>Portfolio</h3>
            </div>
            <div >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, delectus, placeat laboriosam adipisci rerum fugiat veritatis sed cum cupiditate earum. Facilis tempora accusamus nulla ex, quasi nam aliquam quo?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel non inventore ipsum fuga qui illo eum facere atque eius ullam neque at ratione quod cum, officiis perspiciatis ex necessitatibus aliquam maiores dolore quisquam enim aliquid unde. Adipisci enim animi quas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects;
