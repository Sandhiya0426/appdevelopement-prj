import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Booking.css';

const Booking = () => {
    const [eventDetails, setEventDetails] = useState({
        name: '',
        date: '',
        numberOfGuests: 1,
        type: '',
        description: '',
        specialRequests: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate booking completion and navigate to payment page
        navigate('/paymentpage');
    };

    return (
        <div className="booking-page">
            <div className="booking-container">
                <h1>Book Your Event</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="eventName">Event Name:</label>
                    <input
                        id="eventName"
                        type="text"
                        name="name"
                        value={eventDetails.name}
                        onChange={handleChange}
                        placeholder="Enter event name"
                        required
                    />

                    <label htmlFor="eventDate">Date:</label>
                    <input
                        id="eventDate"
                        type="date"
                        name="date"
                        value={eventDetails.date}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="guestCount">Number of Guests:</label>
                    <input
                        id="guestCount"
                        type="number"
                        name="numberOfGuests"
                        value={eventDetails.numberOfGuests}
                        onChange={handleChange}
                        min="1"
                        required
                    />

                    <label htmlFor="eventType">Event Type:</label>
                    <select
                        id="eventType"
                        name="type"
                        value={eventDetails.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday</option>
                        <option value="corporate">Corporate</option>
                        <option value="conference">Conference</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="eventDescription">Event Description:</label>
                    <textarea
                        id="eventDescription"
                        name="description"
                        value={eventDetails.description}
                        onChange={handleChange}
                        placeholder="Provide a brief description of the event"
                        rows="4"
                    />

                    <label htmlFor="specialRequests">Special Requests:</label>
                    <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={eventDetails.specialRequests}
                        onChange={handleChange}
                        placeholder="Any special requests or requirements?"
                        rows="3"
                    />

                    <button type="submit">Proceed to Payment</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;
