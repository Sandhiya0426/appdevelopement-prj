// src/components/Services.js
import React from 'react';
import '../assets/styles/Services.css';

const servicesData = [
    {
        title: 'Wedding Planning',
        description: 'Expert planning and coordination for your perfect wedding day.',
        icon: '💍'
    },
    {
        title: 'Corporate Events',
        description: 'Professional organization of corporate events, conferences, and meetings.',
        icon: '🏢'
    },
    {
        title: 'Birthday Parties',
        description: 'Fun and memorable birthday parties for all ages.',
        icon: '🎂'
    },
    {
        title: 'Music Festivals',
        description: 'Live music event planning and coordination.',
        icon: '🎸'
    },
    {
        title: 'Charity Events',
        description: 'Planning and execution of successful charity events and fundraisers.',
        icon: '❤️'
    },
    {
        title: 'Private Parties',
        description: 'Exclusive private party planning services.',
        icon: '🎉'
    }
];

const Services = () => {
    return (
        <div className="services">
            <h1>V3 Events Services</h1>
            <div className="services-list">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
