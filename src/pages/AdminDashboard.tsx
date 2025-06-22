import React from "react";
import "./AdminDashboard.css"; // Import CSS file

const AdminDashboard: React.FC = () => {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard.</p>
            <div className="admin-actions">
                <button className="admin-button">Manage Users</button>
                <button className="admin-button">View Reports</button>
                <button className="admin-button">Settings</button>
                <button className="admin-button">Logs</button>
                <button className="admin-button">Content Management</button>
                <button className="admin-button">Notifications</button>
                <button className="admin-button">Support</button>
                <button className="admin-button">...</button>
            </div>
            <div className="admin-stats">
                <div className="stat-card">
                    <h2>Total Users</h2>
                    <p>1,234</p>
                </div>
                <div className="stat-card">
                    <h2>Total Documents</h2>
                    <p>567</p>
                </div>
                <div className="stat-card">
                    <h2>Total Workshops</h2>
                    <p>89</p>
                </div>
                <div className="stat-card">
                    <h2>Total Feedbacks</h2>
                    <p>456</p>
                </div>
                <div className="stat-card">
                    <h2>Total Reports</h2>
                    <p>12</p>
                </div>
                <div className="stat-card">
                    <h2>Total Notifications</h2>
                    <p>34</p>
                    </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
