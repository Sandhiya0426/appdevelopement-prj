import React from 'react';
import '../assets/styles/EditDetails.css'; // Updated CSS import

const EditDetails = () => {
    return (
        <div className="edit-details-container">
            <h1 className="edit-details-header">Edit Your Details</h1>
            <form className="edit-details-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="John Doe" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="john.doe@example.com" />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" />

                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditDetails;
