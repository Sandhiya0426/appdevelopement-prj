import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './styles/AutoCarousel.css'; // Make sure this path is correct

// Import images
import imgwed2 from '../assets/imgwed2.jpeg'; // Ensure this path is correct
import imgwed3 from '../assets/imgwed3.jpg'; // Ensure this path is correct

const images = [imgwed2, imgwed3];

const AutoCarousel = () => {
  return (
    <div className='car'>
      <Carousel interval={3000}> {/* Set the interval in milliseconds */}
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
