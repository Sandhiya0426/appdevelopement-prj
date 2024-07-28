// src/components/Booking.js
import React, { useState } from 'react';
import '../assets/styles/Booking.css';

const Booking = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [mobile, setMobile] = useState('');
  const [eventType, setEventType] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here
    console.log('Booking Info:', { name, date, mobile, eventType });
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        {isBooked ? (
          <div className="success-message">
            Booking Successful!
          </div>
        ) : (
          <>
            <h2>Book Now</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Booking Date:</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number:</label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="eventType">Event Type:</label>
                <input
                  type="text"
                  id="eventType"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Confirm Booking</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;
