// components/Home.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';



const Home = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const API_URL = 'https://api.tvmaze.com/search/shows?q=all';
    
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  const handleDetailsClick = (showId) => {
    // Redirect to the movie summary page for the selected show
    navigate(`/movie/${showId}`);
  };

  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map(({ show }) => (
          <li key={show.id}>
            <Link to={`/movie/${show.id}`}>
              {show.name} - {show.genres && show.genres.join(', ')}
            </Link>
            <button onClick={() => handleDetailsClick(show.id)}>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
