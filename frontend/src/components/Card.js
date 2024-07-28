// src/components/Card.js
import React, { useState } from 'react';
import Booking from './Booking';
import '../assets/styles/Card.css';

const Card = ({ title, text, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <button className="card-button" onClick={openModal}>BOOK NOW</button>
      </div>
      <Booking isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Card;
