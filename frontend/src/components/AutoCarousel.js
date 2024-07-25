import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../assets/styles/AutoCarousel.css'; 

import imgwed2 from '../assets/styles/imgwed2.jpeg';
import imgwed3 from '../assets/styles/imgwed3.jpg';

const images = [imgwed2, imgwed3];

const AutoCarousel = () => {
  return (
    <div className='car'>
      <Carousel interval={3000}> 
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default AutoCarousel;
