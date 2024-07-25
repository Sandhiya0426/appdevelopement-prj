import React from 'react';
import '../assets/styles/Home.css'
import AutoCarousel from './AutoCarousel'; 

function Home() {
    return (
        <div>
            <AutoCarousel/>
            <center><h1 className='wel'></h1></center>
            <center><h4 className='hel'>MAKE EVERY OCCASION UNFORGETTABLE WITH OUR EXPERT EVENT ORGANIZERS!</h4></center>
           {/* <AutoCarousel/> */}

        </div>
    );
}

export default Home;
