import React, { useState } from 'react';
import Destination from '../components/Destination';
import image from '../img/milkyway.jpg';

const Destinations = () => {
  const [filter, setFilter] = useState('');
  const [suggestion, setSuggestion] = useState('');

  // Sample planets data
  const planets = [
    { name: 'Mercury', image: image, description: 'Planet Mercury description' },
    { name: 'Venus', image: image, description: 'Planet Venus description' },
    { name: 'Earth', image: image, description: 'Planet Earth description' },
    { name: 'Mars', image: image, description: 'Planet Mars description' },
    { name: 'Jupiter', image: image, description: 'Planet Jupiter description' },
    { name: 'Saturn', image: image, description: 'Planet Saturn description' },
    { name: 'Uranus', image: image, description: 'Planet Uranus description' },
    { name: 'Neptune', image: image, description: 'Planet Neptune description' },
    { name: 'Pluto', image: image, description: 'Planet Pluto description' },
    { name: 'Mars 2', image: image, description: 'Planet Mars 2 description' },
    { name: 'Mars 3', image: image, description: 'Planet Mars 3 description' },
    { name: 'Mars 4', image: image, description: 'Planet Mars 4 description' },
  ];

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  };

  const filteredPlanets = planets.filter((planet) =>
    planet.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSubmitSuggestion = (event) => {
    event.preventDefault();
    // Do something with the suggestion value, e.g., send it to a server
    console.log('Suggestion:', suggestion);
    setSuggestion('');
  };

  return (
    <div className="destinations-container">
      <h1 className="destinations-title">Destinations</h1>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter destinations"
          value={filter}
          onChange={handleFilterChange}
          className="filter-input"
        />
      </div>
      <div className="destinations-list">
        {filteredPlanets.map((planet, index) => (
          <Destination key={index} planet={planet} />
        ))}
      </div>
      <div className="suggestion-section">
        <h2 className="suggestion-title">These are some of the planets</h2>
        <h2 className="suggestion-title">If you have some other destination, we are open for suggestions</h2>
        <form onSubmit={handleSubmitSuggestion} className="suggestion-form">
          <textarea
            value={suggestion}
            onChange={handleSuggestionChange}
            className="suggestion-textarea"
            placeholder="Enter your suggestion here..."
          />
          <button type="submit" className="suggestion-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Destinations;
