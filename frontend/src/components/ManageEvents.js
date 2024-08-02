import React, { useState } from 'react';
import '../assets/styles/ManageEvents.css';

const ManageEvents = () => {
    const [events, setEvents] = useState([
        { id: 1, name: 'Annual Conference', date: '15th Aug 2024', description: 'A conference to discuss annual goals and achievements.' },
        { id: 2, name: 'Music Festival', date: '22nd Sep 2024', description: 'A festival featuring various music performances and bands.' }
    ]);

    const [eventCategories, setEventCategories] = useState([
        { id: 1, name: 'Conferences' },
        { id: 2, name: 'Festivals' },
        { id: 3, name: 'Workshops' },
        { id: 4, name: 'Meetups' }
    ]);

    const handleAddEvent = () => {
        // Logic to add new event
        console.log('Add new event');
    };

    const handleEditEvent = (id) => {
        // Logic to edit event
        console.log('Edit event', id);
    };

    const handleDeleteEvent = (id) => {
        // Logic to delete event
        console.log('Delete event', id);
        setEvents(events.filter(event => event.id !== id));
    };

    const eventStats = {
        totalEvents: events.length,
        upcomingEvents: events.filter(event => new Date(event.date) > new Date()).length,
        completedEvents: events.filter(event => new Date(event.date) <= new Date()).length,
    };

    return (
        <div className="manage-events-container">
            <h1>Manage Events</h1>
            <p>Manage your events efficiently. Add, update, or delete events as needed.</p>
            <button className="add-event-btn" onClick={handleAddEvent}>Add New Event</button>

            <div className="event-stats">
                <h2>Event Statistics</h2>
                <div className="stats-container">
                    <div className="stat-card">
                        <h3>Total Events</h3>
                        <p>{eventStats.totalEvents}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Upcoming Events</h3>
                        <p>{eventStats.upcomingEvents}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Completed Events</h3>
                        <p>{eventStats.completedEvents}</p>
                    </div>
                </div>
            </div>

            <div className="event-categories">
                <h2>Event Categories</h2>
                <ul>
                    {eventCategories.map(category => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </div>

            <div className="recent-activities">
                <h2>Recent Event Activities</h2>
                <ul>
                    {events.slice(0, 5).map(event => (
                        <li key={event.id}>
                            <p>Event: {event.name}</p>
                            <p>Date: {event.date}</p>
                            <p>Description: {event.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="event-list">
                <h2>All Events</h2>
                {events.map(event => (
                    <div key={event.id} className="event-item">
                        <div className="event-details">
                            <h3>{event.name}</h3>
                            <p>Date: {event.date}</p>
                            <p>Description: {event.description}</p>
                        </div>
                        <div className="event-actions">
                            <button onClick={() => handleEditEvent(event.id)}>Edit</button>
                            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageEvents;
