import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/styles/AutoCarousel.css'; 

import v3_f1 from '../assets/images/v3_f1.jpg';
import v3_f4 from '../assets/images/v3_f4.jpg';
import v3_f2 from '../assets/images/v3_f2.jpg'

const images = [v3_f2,v3_f1,v3_f4,];

const AutoCarousel = () => {
  return (
    <div className='car'>
      <Carousel interval={3000}> 
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
            <Carousel.Caption className='carousel-caption'>
              <h3>V3 Events Services  </h3>
              <p>We Plan Your Dream Destination Weddings and Events</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default AutoCarousel;
