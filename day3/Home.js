import React from 'react';
import '../assets/styles/Home.css';
import AutoCarousel from './AutoCarousel';
import Card from './Card';
import Footer from './Footer'; // Import the Footer component

// Import images from assets
import weddingImage from '../assets/images/wedding-organizers.jpg';
import corporateImage from '../assets/images/roadshow-event.jpg';
import birthdayImage from '../assets/images/birthday-party-planner.jpg';
import productLaunchImage from '../assets/images/product-launch.jpg';
import sportsEventImage from '../assets/images/sports-event-management.jpg';
import celebrityImage from '../assets/images/celebrity.jpg';

function Home() {
  return (
    <div>
        <div className="new">
            <AutoCarousel />
            <center><h1 className='wel'>Welcome to V3EVENTS</h1></center>
            <center><h4 className='hel'>Best Wedding & Event Management Company</h4></center>
            <div className="card-container">
                <Card
                    title="wedding-organizers"
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
               <Card
            title="Product Launch"
            text="Launch your product with our expertly managed events."
            imageUrl={productLaunchImage}
          />
           <Card
            title="Sports Event Management"
            text="Manage your sports events with professional planning and execution."
            imageUrl={sportsEventImage} 
          />
            <Card
            title="Celebrity Events"
            text="Host exclusive celebrity events with our expert planning."
            imageUrl={celebrityImage}
          />
            </div>
            <Footer /> 
        </div>
    </div>
  );
}

export default Home;
