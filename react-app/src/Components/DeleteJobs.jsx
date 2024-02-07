import React, { useState } from 'react';

const App = () => {
  const [allJobs, setAllJobs] = useState(() => {
    const storedJobs = localStorage.getItem('userJobs');
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  const handleAddJob = (newJob) => {
    const updatedJobs = [...allJobs, newJob];
    setAllJobs(updatedJobs);
    localStorage.setItem('userJobs', JSON.stringify(updatedJobs));
  };

  const handleDeleteJob = (jobToDelete) => {
    const updatedJobs = allJobs.filter((job) => job !== jobToDelete);
    setAllJobs(updatedJobs);
    localStorage.setItem('userJobs', JSON.stringify(updatedJobs));
  };

  return (
    <div>
      <h1>Job Tracker</h1>
      <JobForm onAdd={handleAddJob} />
      <JobList jobs={allJobs} onDelete={handleDeleteJob} />
    </div>
  );
};

export default App;
