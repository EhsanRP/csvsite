import React from 'react';
import Profile from "./Profile";
import Links from "./Links";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Profile/>
            <Links/>
        </div>
    );
};

export default Dashboard;