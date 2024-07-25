import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/AutoCarousel.css'

import imgwed2 from '../assets/imgwed2.jpeg';
import imgwed3 from '../assets/imgwed3.jpg';

// import hd from '../assets/Images/hd.jpg';
// import i5 from '../assets/Images/i5.jpg';
// import new1 from '../assets/Images/new1.jpg';
const images = [
  imgwed2, imgwed3
];

const AutoCarousel = () => {
  return (
    <div className='car'>
    <Carousel interval={3000} /* Set the interval in milliseconds */>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
       {/* <br /><h2 style={{color:'white',textAlign:'center'}}>CATOGERIES</h2><br />
    <Cardofcat/> */}
    </div>
  );
};

export default AutoCarousel;