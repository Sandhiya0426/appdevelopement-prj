import React from 'react';
import '../assets/styles/Cart.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p><strong>Contact:</strong> {item.contact}</p>
                <p><strong>Phone:</strong> {item.phone}</p>
                <p>{item.quote}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
