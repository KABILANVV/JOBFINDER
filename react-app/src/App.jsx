import React, { useState } from 'react';
import SignIn from './Components/log';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the Home component (replace with the correct path)
import Home from './pages/Home';
import Navbar from './Components/NavBar';
import About from './pages/about';
import "./App.css" 
import SignUp from './Components/sign';
import Admin from './pages/Admin';
import Dashboard from './Components/Dashboard';
import AddJobs from './Components/addJobs';
import UserJobsList from './Components/UserJobList';
// Initialize state with data from localStorage
const App = () => {
  const [allJobs, setAllJobs] = useState(() => {
    const storedJobs = localStorage.getItem('userJobs');
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  // Update localStorage and state when a new job is added
  const handleAddJob = (newJob) => {
    const updatedJobs = [...allJobs, newJob];
    setAllJobs(updatedJobs);
    localStorage.setItem('userJobs', JSON.stringify(updatedJobs));
  };
  return (
    <div>
    <div className="body">
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/Add' element={<AddJobs onAddJob={handleAddJob} />} />
        <Route path='/Userlist' element={<UserJobsList userJobs={allJobs}/>}/>
          </Routes>
          </BrowserRouter>
          </div>
          <div className='body2'>
          </div>
          </div>
          );
        };
        
        // <Route path="/Dashboard" element={<Home />} />
export default App;
