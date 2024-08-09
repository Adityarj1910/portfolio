import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import Footer from '../components/Footer';
import '../css/Blogs.css';

// Import the card data and generateCard function from blog.js
import { cards as cardData, generateCard } from '../assets/blog.js';

function Blogs() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Generate cards using the generateCard function and set them in the state
    const generatedCards = cardData.map(card => generateCard(card.title, card.text, card.time));
    setCards(generatedCards);
  }, []);

  return (
    <>
      <div className='blog-body'>
        <Hamburgerstate />
        <div className='blog-main'>
          <div className="head">
            <h1>The Blogs</h1>
          </div>
        </div>
        <div className="blogsmain">
          <div className="blogs">
            {cards.map((card, index) => (
              <div key={index} className="blog">
                <div className="card-body">
                  <h3 className="card-title"><u>{card.title}</u></h3>
                  <p className="card-text">{card.text}</p>
                  <p className="card-time"><small className="text-body-secondary">{card.time}</small></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
