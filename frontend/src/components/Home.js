// src/components/Home.js
import React from 'react';
import '../assets/styles/Home.css';
import AutoCarousel from './AutoCarousel';
import Card from './Card';

// Import images from assets
 import weddingImage from '../assets/images/wedding-organizers.jpg';
 import corporateImage from '../assets/images/roadshow-event.jpg'; 
import birthdayImage from '../assets/images/birthday-party-planner.jpg'; 
// import roadImage from '../assets/images/roadshow-event.jpg'; 

function Home() {
  return (
    <div>
      <AutoCarousel />
      <center><h1 className='wel'>Welcome to V3EVENTS</h1></center>
      <center><h4 className='hel'>Best Wedding & Event Management Company</h4></center>
      
      <div className="card-container">
        <Card
          title="wedding organizers"
          text="Let us handle your wedding planning with expertise and care."
          imageUrl={weddingImage}
        />
        <Card
          title="Corporate Events"
          text="We organize professional and memorable corporate events."
          imageUrl={corporateImage}
        />
        <Card
          title="Birthday Parties"
          text="Celebrate your special day with a fantastic birthday party."
          imageUrl={birthdayImage}
        />
         {/* <Card
          title="Road Shows"
          text="Promote your business with our road show event planning services."
          imageUrl={roadImage}
        /> */}
      </div>
    </div>
  );
}

export default Home;
