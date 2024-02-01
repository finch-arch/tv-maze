import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieSummary = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [formData, setFormData] = useState({
    movieName: '',
  });

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        console.log('Fetching movie data...');
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        console.log('Movie data response:', response.data);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieData();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = () => {
    // Save form data to local storage
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Movie booked successfully!');
  };

 if (!movie || !movie.show) {
  console.log('Movie data not available yet...');
  return <div>Loading...</div>;
}

console.log('Rendering MovieSummary component with movie data:', movie);

return (
  <div>
    <h2>{movie.show}</h2>
    <img src={movie.show.image.original} alt={movie.show.name} />
    <p dangerouslySetInnerHTML={{ __html: movie.show.summary }}></p>
    <form>
      <label htmlFor="movieName">Movie Name:</label>
      <input
        type="text"
        id="movieName"
        name="movieName"
        value={formData.movieName}
        onChange={handleInputChange}
        readOnly
      />
      {/* Add more form fields here */}
      <button type="button" onClick={handleBooking}>
        Book Ticket
      </button>
    </form>
  </div>
);

};

export default MovieSummary;
