import React from 'react';
import '../assets/styles/MyAccount.css'; // Updated CSS import

const MyAccount = () => {
    return (
        <div className="account-container">
            <h1 className="account-header">My Account Overview</h1>
            <div className="account-details">
                <label>Name:</label>
                <p>John Doe</p>
                <label>Email:</label>
                <p>john.doe@example.com</p>
                <label>Date of Birth:</label>
                <p>1990-01-01</p>
                <label>Gender:</label>
                <p>Male</p>
            </div>
            <button className="account-button">Edit Profile</button>
        </div>
    );
};

export default MyAccount;
