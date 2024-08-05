import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/PaymentPage.css';
import { Link } from 'react-router-dom';
const PaymentPage = () => {
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate payment completion
        navigate('/payment-successfull');
    };

    return (
        <div className="payment-page">
            <div className="payment-container">
                <div className="payment-image"></div>
                <div className="payment-form">
                    <h1>Payment Details</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Card Number:
                            <input
                                type="text"
                                name="cardNumber"
                                value={paymentDetails.cardNumber}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Expiry Date:
                            <input
                                type="text"
                                name="expiryDate"
                                value={paymentDetails.expiryDate}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            CVV:
                            <input
                                type="text"
                                name="cvv"
                                value={paymentDetails.cvv}
                                onChange={handleChange}
                                required
                            />
                        </label>
                      <Link to="/paymentsuccessfull"> <button type="submit">Complete Payment</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
