import React from 'react';
import '../Css/AdminHome.css'; 
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="admin-home">
      <header>
        <h1>Job Portal Admin</h1>
      </header>
      <main>
        <section className="statistics">
         <Link to="/Add"><div className="stat-card">Add Jobs</div></Link>
          <div className="stat-card">Delete Jobs</div>
          <div className="stat-card">Users: 10</div>
        </section>

      </main>
    </div>
  );
};

export default Admin;