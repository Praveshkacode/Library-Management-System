// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container"> {/* Apply the CSS class */}
      <h2>Welcome to the Library Management System</h2>
      <p>
        This application allows you to manage books, memberships, and more.
      </p>
      <p>
        Use the links below to explore different functionalities:
      </p>
      <ul>
        <li>
          <Link to="/add-book">Add Book</Link>
        </li>
        <li>
          <Link to="/add-membership">Add Membership</Link>
        </li>
        <li>
          <Link to="/issue-book">Issue Book</Link>
        </li>
        <li>
          <Link to="/return-book">Return Book</Link>
        </li>
        <li>
          <Link to="/pay-fine">Pay Fine</Link>
        </li>
        <li>
          <Link to="/update-membership">Update Membership</Link>
        </li>
        <li>
          <Link to="/update-book">Update Book</Link>
        </li>
        <li>
          <Link to="/user-management">User  Management</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;