import React from 'react';
import '../assets/styles/UserInfo.css';

const UserInfo = () => {
    const customers = [
        {
            name: 'Samantha',
            email: 'samantha@example.com',
            membershipLevel: 'Premium',
            registrationDate: '2023-01-15',
            lastLogin: '2024-07-30',
            bio: 'A loyal customer who frequently attends our events.'
        },
        {
            name: 'Deepika Padukone',
            email: 'deepika@example.com',
            membershipLevel: 'Standard',
            registrationDate: '2023-05-22',
            lastLogin: '2024-07-28',
            bio: 'Regular attendee and enthusiastic participant in events.'
        }
    ];

    const organizers = [
        {
            name: 'Mukesh Ambani',
            email: 'mukesh@example.com',
            membershipLevel: 'VIP',
            registrationDate: '2022-11-10',
            lastLogin: '2024-07-25',
            bio: 'High-profile organizer with a passion for exclusive events.'
        },
        {
            name: 'Nita Ambani',
            email: 'nita@example.com',
            membershipLevel: 'Premium',
            registrationDate: '2023-02-18',
            lastLogin: '2024-07-27',
            bio: 'Renowned organizer known for luxury and high-end events.'
        }
    ];

    return (
        <div className="user-info-container">
            <h1>User Info</h1>
            <p>View and manage user information for both customers and organizers.</p>
            
            <div className="user-category">
                <h2>Customers</h2>
                <div className="user-list">
                    {customers.map((user, index) => (
                        <div className="user-item" key={index}>
                            <h3>{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Membership Level: {user.membershipLevel}</p>
                            <p>Registered on: {user.registrationDate}</p>
                            <p>Last login: {user.lastLogin}</p>
                            <p>Bio: {user.bio}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="user-category">
                <h2>Organizers</h2>
                <div className="user-list">
                    {organizers.map((user, index) => (
                        <div className="user-item" key={index}>
                            <h3>{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Membership Level: {user.membershipLevel}</p>
                            <p>Registered on: {user.registrationDate}</p>
                            <p>Last login: {user.lastLogin}</p>
                            <p>Bio: {user.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
