import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../assets/styles/UserPanel.css'; // Updated CSS import
import MyAccount from './MyAccount'; // Import from the components folder
import UpcomingEvents from './UpcomingEvents'; // Import from the components folder
import EditDetails from './EditDetails'; // Import from the components folder
import HelpCenter from './HelpCenter'; // Import from the components folder

const UserPanel = () => {
    return (
        <div className="user-panel">
            <div className="sidebaruser"> {/* Sidebar class name */}
                <ul>
                    <li><Link to="myaccount">My Account</Link></li>
                    <li><Link to="upcomingevents">Upcoming Events</Link></li>
                    <li><Link to="editdetails">Edit Details</Link></li>
                    <li><Link to="helpcenter">Help Center</Link></li>
                </ul>
            </div>
            <div className="content">
                <Routes>
                    <Route path="myaccount" element={<MyAccount />} />
                    <Route path="upcomingevents" element={<UpcomingEvents />} />
                    <Route path="editdetails" element={<EditDetails />} />
                    <Route path="helpcenter" element={<HelpCenter />} />
                    <Route path="/" element={
                        <div>
                            <h2>Welcome, User</h2>
                            <p>Here you can view and manage your bookings, update your profile, and access support.</p>
                            
                            <h3>Upcoming Bookings</h3>
                            <ul>
                                <li>Booking 1 - Event: Annual Gala, Date: 2024-08-10</li>
                                <li>Booking 2 - Event: Tech Conference, Date: 2024-09-15</li>
                                <li>Booking 3 - Event: Workshop, Date: 2024-10-20</li>
                            </ul>
                            
                            <h3>Recent Activities</h3>
                            <ul>
                                <li>Logged in from a new device on 2024-07-27</li>
                                <li>Updated profile information on 2024-07-25</li>
                                <li>Made a new booking on 2024-07-20</li>
                            </ul>

                            <h3>Notifications</h3>
                            <ul>
                                <li>Your booking for "Annual Gala" is confirmed for 2024-08-10.</li>
                                <li>You have a new message from an event organizer.</li>
                                <li>Your password will expire in 10 days. Please update it.</li>
                            </ul>

                            <h3>Booking Statistics</h3>
                            <p>Bookings Made: 5</p>
                            <p>Total Spending: $5000</p>
                        </div>
                    } />
                </Routes>
            </div>
        </div>
    );
};

export default UserPanel;
