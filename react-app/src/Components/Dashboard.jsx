// Dashboard.js
import React, { useState } from 'react';
import '../Css/dashboard.css';

const Dashboard = () => {
  const [appliedJobsCount, setAppliedJobsCount] = useState(10);
  const [applicationsDeclined, setApplicationsDeclined] = useState(3);
  const [applicationsAccepted, setApplicationsAccepted] = useState(2);
  const [applicationsProgress, setapplicationsProgress] = useState(5);

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h3>Applied Jobs</h3>
        <p>{appliedJobsCount}</p>
      </div>
      <div className="dashboard-box">
        <h3 style={{color :"rgb(250, 10, 50)"}}>Declined</h3>
        <p style={{color :"red"}}>{applicationsDeclined}</p>
      </div>
      <div className="dashboard-box">
        <h3 style={{color :"powder green"}}>Accepted</h3>
        <p style={{color :"green"}}>{applicationsAccepted}</p>
      </div>
      <div className="dashboard-box">
        <h3 style={{color :"rgb(255, 225, 0)"}}>In Progress</h3>
        <p style={{color :"yellow"}}>{applicationsProgress}</p>
      </div>
    </div>
  );
};

export default Dashboard;
