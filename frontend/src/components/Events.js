// src/components/Event.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure you have axios installed

// Component to display individual event details
function Event({ event }) {
  return (
    <div className="event-card">
      <img src={event.imageUrl} alt={event.title} />
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      <p>Price: ${event.price}</p>
    </div>
  );
}

// Main Events component to fetch and display a list of events
function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events data from API
    axios.get('/api/events') // Replace with your API endpoint
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events data:', error);
      });
  }, []);

  return (
    <div className="events-container">
      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.length > 0 ? (
          events.map(event => (
            <Event key={event.id} event={event} />
          ))
        ) : (
          <p>No events available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default Events;
