import React from 'react';
import '../assets/styles/Settings.css';

const Settings = () => {
    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <p>Update your account settings and preferences.</p>
            
            <div className="settings-section">
                <h2>Profile Information</h2>
                <form className="settings-form">
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" name="username" defaultValue="admin" />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" defaultValue="admin@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="tel" name="phone" defaultValue="+1234567890" />
                    </div>
                    <button type="submit">Update Profile</button>
                </form>
            </div>

            <div className="settings-section">
                <h2>Notification Preferences</h2>
                <form className="settings-form">
                    <div className="form-group">
                        <label>Email Notifications:</label>
                        <select name="emailNotifications" defaultValue="enabled">
                            <option value="enabled">Enabled</option>
                            <option value="disabled">Disabled</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>SMS Notifications:</label>
                        <select name="smsNotifications" defaultValue="enabled">
                            <option value="enabled">Enabled</option>
                            <option value="disabled">Disabled</option>
                        </select>
                    </div>
                    <button type="submit">Update Notifications</button>
                </form>
            </div>

            <div className="settings-section">
                <h2>Account Security</h2>
                <form className="settings-form">
                    <div className="form-group">
                        <label>Current Password:</label>
                        <input type="password" name="currentPassword" />
                    </div>
                    <div className="form-group">
                        <label>New Password:</label>
                        <input type="password" name="newPassword" />
                    </div>
                    <div className="form-group">
                        <label>Confirm New Password:</label>
                        <input type="password" name="confirmNewPassword" />
                    </div>
                    <button type="submit">Update Password</button>
                </form>
            </div>
        </div>
    );
};

export default Settings;
