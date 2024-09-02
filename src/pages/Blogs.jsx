import React, { useEffect, useState } from 'react';
import Hamburgerstate from '../components/Hamburgerstate';
import Footer from '../components/Footer';
import '../css/Blogs.css';

// Import the card data and generateCard function from blog.js
// import { cards as cardData, generateCard } from '../assets/blog.js';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://newsdata.io/api/1/news?apikey=pub_51609daa31b2bd4d5b50eb64a051089f002c2&q=Cricket&language=en',
};


// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

function Blogs() {
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   // Generate cards using the generateCard function and set them in the state
  //   const generatedCards = cardData.map(card => generateCard(card.title, card.text, card.time));
  //   setCards(generatedCards);
  // }, []);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const articles = response.data.results; // Adjust if necessary based on actual API response

        // Map the fetched articles to the format your component expects
        const generatedCards = articles.map(article => ({
          title: article.title,
          text: article.description,
          time: new Date(article.pubDate).toLocaleString(), // Adjust the date format based on API response
        }));

        setCards(generatedCards);
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
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
                  <h3 className="card-title">{card.title}</h3>
                  <hr />
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
