import React from 'react';
import '../assets/styles/Reports.css';

const Reports = () => {
    // Example data
    const reportData = {
        totalRevenue: 25000,
        totalBookings: 150,
        totalEvents: 25,
        revenueByEvent: [
            { event: 'Annual Conference', revenue: 8000 },
            { event: 'Music Festival', revenue: 6000 },
            { event: 'Tech Summit', revenue: 5000 },
            { event: 'Charity Gala', revenue: 4000 }
        ],
        bookingsByMonth: [
            { month: 'January', bookings: 15 },
            { month: 'February', bookings: 20 },
            { month: 'March', bookings: 18 },
            { month: 'April', bookings: 22 },
            { month: 'May', bookings: 25 },
            { month: 'June', bookings: 30 },
            { month: 'July', bookings: 20 }
        ]
    };

    return (
        <div className="reports">
            <h1>Reports</h1>
            <p>Generate detailed reports of event performance and user engagement.</p>
            <button className="generate-report-btn">Generate New Report</button>

            <div className="report-summary">
                <h2>Revenue Summary</h2>
                <p>Total Revenue: ${reportData.totalRevenue}</p>
                <p>Total Bookings: {reportData.totalBookings}</p>
                <p>Total Events: {reportData.totalEvents}</p>
            </div>

            <div className="revenue-details">
                <h3>Revenue by Event</h3>
                <ul>
                    {reportData.revenueByEvent.map((item, index) => (
                        <li key={index}>
                            {item.event}: ${item.revenue}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bookings-by-month">
                <h3>Bookings by Month</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Bookings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.bookingsByMonth.map((item, index) => (
                            <tr key={index}>
                                <td>{item.month}</td>
                                <td>{item.bookings}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;
