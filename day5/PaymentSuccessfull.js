// PaymentSuccessfull.js
import React from 'react';
import '../assets/styles/PaymentSuccessfull.css'; // Make sure to import the CSS file

const PaymentSuccessfull = () => {
    return (
        <div className="payment-successfull-container">
            <div className="payment-successfull">
                <h1>Payment Successful</h1>
                <p>Your payment was processed successfully. Thank you!</p>
                <button>Go to Homepage</button>
            </div>
        </div>
    );
};

export default PaymentSuccessfull;
