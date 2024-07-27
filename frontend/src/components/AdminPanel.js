import React from 'react';
import { Link, Routes, Route, useMatch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Events from './Events';
import Bookings from './Bookings';

function AdminPanel() {
  let { path, url } = useMatch();

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <nav>
        <ul>
          <li>
            <Link to={`${url}/dashboard`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${url}/events`}>Events</Link>
          </li>
          <li>
            <Link to={`${url}/bookings`}>Bookings</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path={`${path}/dashboard`} element={<Dashboard />} />
        <Route path={`${path}/events`} element={<Events />} />
        <Route path={`${path}/bookings`} element={<Bookings />} />
      </Routes>
    </div>
  );
}

export default AdminPanel;
