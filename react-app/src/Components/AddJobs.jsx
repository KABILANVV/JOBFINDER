// AddJobs.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './AddJobs.css';

const AddJobs = ({ onAddJob }) => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      jobTitle,
      companyName,
      location,
    };
    onAddJob(newJob);
    setJobTitle('');
    setCompanyName('');
    setLocation('');

    // Navigate to the '/Userlist' route after adding the job
    navigate('/Userlist');
  };

  return (
    <div className="add-job-form">
      <h2>Add Job</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />

        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJobs;