// src/components/AdminPanel.js
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import '../assets/styles/AdminPanel.css';
import Dashboard from './Dashboard';  // Import from the components folder
import ManageEvents from './ManageEvents';  // Import from the components folder
import Reports from './Reports';  // Import from the components folder
import Settings from './Settings';  // Import from the components folder
import UserInfo from './UserInfo'; 

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <div className="sidebarA">
                <ul>
                    <li><Link to="dashboard">Dashboard</Link></li>
                    <li><Link to="manage-events">Manage Events</Link></li>
                    <li><Link to="reports">Reports</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                    <li><Link to="user-info">User Info</Link></li>
                </ul>
            </div>
            <div className="content">
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="manage-events" element={<ManageEvents />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="user-info" element={<UserInfo />} />
                    <Route path="/" element={
                        <div>
                            <h2>Recent Bookings</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Event</th>
                                        <th>Price</th>
                                        <th>Payment</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Annual Conference</td>
                                        <td>$3000</td>
                                        <td>Paid</td>
                                        <td>Confirmed</td>
                                    </tr>
                                    <tr>
                                        <td>Team Building</td>
                                        <td>$1500</td>
                                        <td>Pending</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td>Music Festival</td>
                                        <td>$5000</td>
                                        <td>Paid</td>
                                        <td>Confirmed</td>
                                    </tr>
                                    <tr>
                                        <td>Charity Ball</td>
                                        <td>$2000</td>
                                        <td>Paid</td>
                                        <td>Confirmed</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2>Recent Customers</h2>
                            <ul>
                                <li>Samantha</li>
                                <li>Deepika Padukone</li>
                                <li>Mukesh Ambani</li>
                                <li>Nita Ambani</li>
                            </ul>
                        </div>
                    } />
                </Routes>
            </div>
        </div>
    );
};

export default AdminPanel;
