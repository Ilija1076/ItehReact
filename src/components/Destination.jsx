import React from 'react';

const Destination = ({ planet }) => {
  return (
    <div className="destination-card">
      <div className="destination-image-container">
        <img src={planet.image} alt={planet.name} className="destination-image" />
      </div>
      <div className="destination-content">
        <h3 className="destination-name">{planet.name}</h3>
        <p className="destination-description">{planet.description}</p>
      </div>
    </div>
  );
};

export default Destination;

