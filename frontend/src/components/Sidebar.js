import React from 'react';
import { Link, useMatch } from 'react-router-dom';

function Sidebar() {
  let match = useMatch('/admin');

  return (
    <div className="sidebar">
      <ul>
        <li className={match ? 'active' : ''}>
          <Link to="/admin">Admin Panel</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
