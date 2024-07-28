// src/components/Dashboard.js
import React from "react";
import '../assets/styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Recent Orders</h2>
      <div className="recent-orders">
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
              <td>Wedding</td>
              <td>$1200</td>
              <td>Paid</td>
              <td>Confirmed</td>
            </tr>
            <tr>
              <td>Birthday Party</td>
              <td>$500</td>
              <td>Pending</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Corporate Event</td>
              <td>$2000</td>
              <td>Paid</td>
              <td>Confirmed</td>
            </tr>
            <tr>
              <td>Anniversary</td>
              <td>$750</td>
              <td>Paid</td>
              <td>Confirmed</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Recent Customers</h2>
      <div className="recent-customers">
        <ul>
          <li>Alice Johnson</li>
          <li>Bob Smith</li>
          <li>Charlie Davis</li>
          <li>Diana Moore</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
