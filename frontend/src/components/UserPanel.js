// src/components/UserPanel.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/UserPanel.css';

const UserPanel = () => {
    return (
        <div className="user-panel">
            <div className="sidebar">
                <ul>
                    <li><Link to="/user/profile">Profile</Link></li>
                    <li><Link to="/user/events">My Events</Link></li>
                    <li><Link to="/user/settings">Settings</Link></li>
                    <li><Link to="/user/support">Support</Link></li>
                </ul>
            </div>
            <div className="content">
                <h2>Welcome, User</h2>
                <p>Here you can view and manage your events, update your profile, and more.</p>
                
                <h3>Upcoming Events</h3>
                <ul>
                    <li>Event 1 - Date: 2024-08-10</li>
                    <li>Event 2 - Date: 2024-09-15</li>
                    <li>Event 3 - Date: 2024-10-20</li>
                </ul>
                
                <h3>Recent Activities</h3>
                <ul>
                    <li>Logged in from a new device on 2024-07-27</li>
                    <li>Updated profile information on 2024-07-25</li>
                    <li>Booked a new event on 2024-07-20</li>
                </ul>

                <h3>Notifications</h3>
                <ul>
                    <li>Your event "Annual Gala" is confirmed for 2024-08-10.</li>
                    <li>You have a new message from the event organizer.</li>
                    <li>Your password will expire in 10 days, please update it.</li>
                </ul>

                <h3>Event Statistics</h3>
                <p>Events Attended: 5</p>
             
                <p>Total Spending: $5000</p>
            </div>
        </div>
    );
};

export default UserPanel;
