// UserJobsList.jsx
import React from 'react';

const UserJobsList = ({ userJobs }) => {
  return (
    <div>
      <h2>User Jobs</h2>
      <ul>
        {userJobs.map((job, index) => (
          <li key={index}>
            {job.jobTitle} at {job.companyName}, located in {job.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserJobsList;