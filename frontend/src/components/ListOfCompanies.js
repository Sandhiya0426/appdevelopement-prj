import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/ListOfCompanies.css';

import pxl11 from '../assets/images/pxl11.jpg';
import pxl2 from '../assets/images/pxl2.jpg';
import pxl3 from '../assets/images/pxl3.jpg';
import pxl6 from '../assets/images/pxl6.jpg';
import pxl9 from '../assets/images/pxl9.jpg';
import pxl5 from '../assets/images/pxl5.jpg';
import pxl4 from '../assets/images/pxl4.jpg';
import pxl7 from '../assets/images/pxl7.jpg';
import plxx from '../assets/images/3a.jpg';

const companiesData = [
  {
    name: 'Gala Events',
    rating: 4.5,
    contact: 'contact@galaevents.com',
    phone: '+1 (555) 123-4567',
    quote: 'Turning dreams into reality, one event at a time.',
    imageUrl: pxl11,
  },
  {
    name: 'Premier Parties',
    rating: 4.7,
    contact: 'info@premierparties.com',
    phone: '+1 (555) 987-6543',
    quote: 'Creating unforgettable experiences.',
    imageUrl: pxl2,
  },
  {
    name: 'Elegant Gatherings',
    rating: 4.9,
    contact: 'hello@elegantgatherings.com',
    phone: '+1 (555) 234-5678',
    quote: 'Elegance and excellence in every event.',
    imageUrl: pxl3,
  },
  {
    name: 'Elite Celebrations',
    rating: 4.8,
    contact: 'info@elitecelebrations.com',
    phone: '+1 (555) 345-6789',
    quote: 'Where luxury meets celebration.',
    imageUrl: pxl7,
  },
  {
    name: 'Spotlight Events',
    rating: 4.6,
    contact: 'support@spotlightevents.com',
    phone: '+1 (555) 456-7890',
    quote: 'Shining a light on your special moments.',
    imageUrl: pxl5,
  },
  {
    name: 'Dream Weddings',
    rating: 4.9,
    contact: 'contact@dreamweddings.com',
    phone: '+1 (555) 678-9012',
    quote: 'Turning your dream wedding into reality.',
    imageUrl: pxl6,
  },
  {
    name: 'Festive Flair',
    rating: 4.8,
    contact: 'info@festiveflair.com',
    phone: '+1 (555) 789-0123',
    quote: 'Adding flair to every festive occasion.',
    imageUrl: pxl4,
  },
  {
    name: 'Ultimate Events',
    rating: 4.6,
    contact: 'support@ultimateevents.com',
    phone: '+1 (555) 890-1234',
    quote: 'The ultimate event experience.',
    imageUrl: plxx,
  },
  {
    name: 'Majestic Moments',
    rating: 4.7,
    contact: 'hello@majesticmoments.com',
    phone: '+1 (555) 901-2345',
    quote: 'Crafting majestic moments for you.',
    imageUrl: pxl9,
  },
];

const ListOfCompanies = ({ addToCart }) => {
  const navigate = useNavigate(); 

  const handleBookNow = () => {
    navigate('/booking'); // Navigate to the Booking page
  };
  
  return (
    <div className="list-of-companies">
      <h1>Discover Our Event Partners</h1>
      <div className="companies-container">
        {companiesData.map((company, index) => (
          <div className="company-card" key={index}>
            <img src={company.imageUrl} alt={company.name} className="company-image" />
            <h2>{company.name}</h2>
            <p><strong>Rating:</strong> {company.rating} ★</p>
            <p><strong>Contact:</strong> {company.contact}</p>
            <p><strong>Phone:</strong> {company.phone}</p>
            <p>{company.quote}</p>
            <div className="button-container">
              <button className="book-now-button" onClick={handleBookNow}>Book Now</button>
              <button className="add-to-cart-button" onClick={() => addToCart(company)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfCompanies;
