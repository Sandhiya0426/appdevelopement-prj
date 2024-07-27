// src/components/Card.js
import React from 'react';
import '../assets/styles/Card.css'; 
const Card = ({ title, text, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <button className="card-button">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Card;
