// src/components/AdminPanel.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/AdminPanel.css';

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <div className="sidebar">
                <ul>
                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin/manage-events">Manage Events</Link></li>
                    <li><Link to="/admin/reports">Reports</Link></li>
                    <li><Link to="/admin/settings">Settings</Link></li>
                    <li><Link to="/admin/user-info">User Info</Link></li>
                </ul>
            </div>
            <div className="content">
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
                    <li>Samantha </li>
                    <li>Deepika padukone</li>
                    <li>Mukesh Ambani</li>
                    <li>Nita ambani</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminPanel;
