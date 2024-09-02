import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hamburgerstate from '../components/Hamburgerstate';
import Footer from '../components/Footer';
import '../css/Projects.css';

import Portfolio from '../images/projects/port1.png';
import issuetracker from '../images/projects/issue-tracker.png';
import ytclone from '../images/projects/yt-clone.png';
import jsdom from '../images/projects/js-dom.png';
import medibuddy from '../images/projects/medibuddy.png';



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
              <h3>Personal Portfolio</h3>
            </div>
            <div className="about">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, delectus, placeat laboriosam adipisci rerum fugiat veritatis sed cum cupiditate earum. Facilis tempora accusamus nulla ex, quasi nam aliquam quo?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel non inventore ipsum fuga qui illo eum facere atque eius ullam neque at ratione quod cum, officiis perspiciatis ex necessitatibus aliquam maiores dolore quisquam enim aliquid unde. Adipisci enim animi quas.
              </p>
            </div>
          </div>
          <div className="cor">
            <div className="cor-images">
              <img src={Portfolio} alt="" className="coors" />
            </div>
          </div>
        </div>
        <hr />
        <div className="project2">
          <div className="cor">
            <div className="cor-images">
              <img src={issuetracker} alt="" className="coors" />
            </div>
          </div>
          <div className="project-info">
            <div className="title">
              <h3>Issue Tracker</h3>
            </div>
            <div className="about">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, delectus, placeat laboriosam adipisci rerum fugiat veritatis sed cum cupiditate earum. Facilis tempora accusamus nulla ex, quasi nam aliquam quo?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel non inventore ipsum fuga qui illo eum facere atque eius ullam neque at ratione quod cum, officiis perspiciatis ex necessitatibus aliquam maiores dolore quisquam enim aliquid unde. Adipisci enim animi quas.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="project1">
          <div className="project-info">
            <div className="title">
              <h3>Youtube Clone</h3>
            </div>
            <div className="about">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, delectus, placeat laboriosam adipisci rerum fugiat veritatis sed cum cupiditate earum. Facilis tempora accusamus nulla ex, quasi nam aliquam quo?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel non inventore ipsum fuga qui illo eum facere atque eius ullam neque at ratione quod cum, officiis perspiciatis ex necessitatibus aliquam maiores dolore quisquam enim aliquid unde. Adipisci enim animi quas.
              </p>
            </div>
          </div>
          <div className="cor">
            <div className="cor-images">
              <img src={ytclone} alt="" className="coors" />
            </div>
          </div>
        </div>
        <hr />
        <div className="project2">
          <div className="cor">
            <div className="cor-images">
              <img src={jsdom} alt="" className="coors" />
            </div>
          </div>
          <div className="project-info">
            <div className="title">
              <h3>Javascript - DOM</h3>
            </div>
            <div className="about">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, delectus, placeat laboriosam adipisci rerum fugiat veritatis sed cum cupiditate earum. Facilis tempora accusamus nulla ex, quasi nam aliquam quo?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel non inventore ipsum fuga qui illo eum facere atque eius ullam neque at ratione quod cum, officiis perspiciatis ex necessitatibus aliquam maiores dolore quisquam enim aliquid unde. Adipisci enim animi quas.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="project1">
          <div className="project-info">
            <div className="title">
              <h3>Medibuddy</h3>
            </div>
            <div className="about">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, delectus, placeat laboriosam adipisci rerum fugiat veritatis sed cum cupiditate earum. Facilis tempora accusamus nulla ex, quasi nam aliquam quo?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel non inventore ipsum fuga qui illo eum facere atque eius ullam neque at ratione quod cum, officiis perspiciatis ex necessitatibus aliquam maiores dolore quisquam enim aliquid unde. Adipisci enim animi quas.
              </p>
            </div>
          </div>
          <div className="cor">
            <div className="cor-images">
              <img src={medibuddy} alt="" className="coors" />
            </div>
          </div>
        </div>
        <hr />
        <div className="space"></div>
      </div>
      <Footer />
    </>
  )
}

export default Projects;
