import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    upcomingEvents: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    // Fetch statistics data from the server
    axios.get('/api/dashboard-stats')
      .then(response => {
        setStats(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the dashboard stats!', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat">
          <h2>Total Bookings</h2>
          <p>{stats.totalBookings}</p>
        </div>
        <div className="stat">
          <h2>Upcoming Events</h2>
          <p>{stats.upcomingEvents}</p>
        </div>
        <div className="stat">
          <h2>Total Revenue</h2>
          <p>${stats.totalRevenue}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
