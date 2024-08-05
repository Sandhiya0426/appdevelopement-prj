import React from 'react';
import '../assets/styles/Dashboard.css'; 

const Dashboard = () => {
  // Example data
  const eventStats = {
    totalEvents: 25,
    totalBookings: 150,
    activeUsers: 80,
    upcomingEvents: 10,
    completedEvents: 15
  };

  const recentBookings = [
    { id: 1, event: 'Music Concert', user: 'John Doe', date: '2024-08-01', status: 'Confirmed' },
    { id: 2, event: 'Art Exhibition', user: 'Jane Smith', date: '2024-08-03', status: 'Pending' },
    { id: 3, event: 'Tech Talk', user: 'Bob Brown', date: '2024-08-05', status: 'Confirmed' },
  ];

  const recentFeedback = [
    { id: 1, user: 'Alice Green', feedback: 'Great event, well organized!' },
    { id: 2, user: 'Tom White', feedback: 'Good experience, but room for improvement.' },
    { id: 3, user: 'Lisa Black', feedback: 'Amazing event, had a lot of fun!' },
  ];

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      
      <div className="overview-section">
        <h2>Overview</h2>
        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Events</h3>
            <p>{eventStats.totalEvents}</p>
          </div>
          <div className="stat-card">
            <h3>Total Bookings</h3>
            <p>{eventStats.totalBookings}</p>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <p>{eventStats.activeUsers}</p>
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

      <div className="recent-bookings">
        <h2>Recent Bookings</h2>
        <ul>
          {recentBookings.map(booking => (
            <li key={booking.id}>
              <p>Event: {booking.event}</p>
              <p>User: {booking.user}</p>
              <p>Date: {booking.date}</p>
              <p>Status: {booking.status}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="recent-feedback">
        <h2>Recent Feedback</h2>
        <ul>
          {recentFeedback.map(feedback => (
            <li key={feedback.id}>
              <p>User: {feedback.user}</p>
              <p>Feedback: {feedback.feedback}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="notifications">
        <h2>Notifications</h2>
        <p>No new notifications</p>
      </div>
    </div>
  );
};

export default Dashboard;
