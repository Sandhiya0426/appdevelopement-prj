// src/components/HelpCenter.js
import React from 'react';

const HelpCenter = () => {
    return (
        <div>
            <h2>Help Center</h2>
            <p>Welcome to the Help Center. Here you can find answers to frequently asked questions and get support.</p>
            
            <div className="faq-section">
                <h3>Frequently Asked Questions</h3>
                <div className="faq">
                    <h4>How do I reset my password?</h4>
                    <p>To reset your password, go to the login page and click on "Forgot Password". Follow the instructions sent to your email.</p>
                </div>
                <div className="faq">
                    <h4>How can I contact support?</h4>
                    <p>You can contact support via the "Support" link in the sidebar, or email us at support@example.com.</p>
                </div>
                <div className="faq">
                    <h4>How do I update my account details?</h4>
                    <p>To update your account details, go to the "Edit Details" section from the sidebar.</p>
                </div>
            </div>

            <style>{`
                .faq-section {
                    margin-top: 20px;
                }
                .faq {
                    margin-bottom: 15px;
                }
                .faq h4 {
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default HelpCenter;
