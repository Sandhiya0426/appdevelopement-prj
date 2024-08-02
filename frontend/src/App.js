import React from 'react';
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
import ListOfCompanies from './components/ListOfCompanies';

function App() {
    return (
        
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/adminpanel/*" element={<AdminPanel />} />
                    <Route path="/userpanel" element={<UserPanel />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} /> 
                    <Route path="/booking" element={<Booking />} />  
                    <Route path="/paymentpage" element={<PaymentPage />} />
                    <Route path="/listofcompanies" element={<ListOfCompanies />} />
                </Routes>
            </div>
        
    );
}

export default App;
