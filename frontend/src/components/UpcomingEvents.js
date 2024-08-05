import React from 'react';
import '../assets/styles/UpcomingEvents.css'; // Updated CSS import

const UpcomingEvents = () => {
    return (
        <div className="events-container">
            <h1 className="events-header">Your Upcoming Events</h1>
            <div className="event-item">
                <h4>Annual Gala</h4>
                <p>Date: 2024-08-10</p>
                <p>Location: City Hall, Main Street</p>
                <p>Details: Join us for an elegant evening with live music and fine dining.</p>
            </div>
            <div className="event-item">
                <h4>Tech Conference</h4>
                <p>Date: 2024-09-15</p>
                <p>Location: Tech Arena, Silicon Valley</p>
                <p>Details: A day of talks and workshops from industry leaders.</p>
            </div>
            <div className="event-item">
                <h4>Workshop</h4>
                <p>Date: 2024-10-20</p>
                <p>Location: Community Center, Oak Street</p>
                <p>Details: Hands-on workshop on new technologies.</p>
            </div>
        </div>
    );
};

export default UpcomingEvents;
