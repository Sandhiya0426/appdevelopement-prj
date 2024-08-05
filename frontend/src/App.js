import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import UserPanel from './components/UserPanel';
import Services from './components/Services';
import Contact from './components/Contact';  
import Booking from './components/Booking';
import PaymentPage from './components/PaymentPage';
import PaymentSuccessfull from './components/PaymentSuccessfull';
import ListOfCompanies from './components/ListOfCompanies';
import MyAccount from './components/MyAccount';
import UpcomingEvents from './components/UpcomingEvents';
import EditDetails from './components/EditDetails';
import HelpCenter from './components/HelpCenter';
import Cart from './components/Cart';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (company) => {
        setCartItems((prevItems) => [...prevItems, company]);
    };

    return (
        <div className="App">
            <Navbar cartCount={cartItems.length} /> {/* Pass cart count */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/adminpanel/*" element={<AdminPanel />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/booking" element={<Booking />} />  
                <Route path="/paymentpage" element={<PaymentPage />} />
                <Route path="/paymentsuccessfull" element={<PaymentSuccessfull />} />
                <Route path="/listofcompanies" element={<ListOfCompanies addToCart={addToCart} />} />
                <Route path="/userpanel/*" element={<UserPanel />} />
                <Route path="/myaccount" element={<MyAccount />} />
                <Route path="/upcomingevents" element={<UpcomingEvents />} />
                <Route path="/editdetails" element={<EditDetails />} />
                <Route path="/helpcenter" element={<HelpCenter />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            </Routes>
        </div>
    );
}

export default App;
