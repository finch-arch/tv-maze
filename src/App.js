// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieSummary from './components/MovieSummary';

function App() {
  return (
    <BrowserRouter>
        <div className="container">
        <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/movie/:id" element={<MovieSummary/>} />
        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
