// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";
import AddMembership from "./components/AddMembership";
import BookIssue from "./components/BookIssue";
import ReturnBook from "./components/ReturnBook";
import FinePay from "./components/FinePay";
import UpdateMembership from "./components/UpdateMembership";
import UpdateBook from "./components/UpdateBook";
import UserManagement from "./components/UserManagement";
import Home from "./components/Home"; // Import the Home component

function App() {
  return (
    <Router>
      <div>
        {/* <h1>Library Management System</h1> */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for the Home component */}
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/add-membership" element={<AddMembership />} />
          <Route path="/issue-book" element={<BookIssue />} />
          <Route path="/return-book" element={<ReturnBook />} />
          <Route path="/pay-fine" element={<FinePay />} />
          <Route path="/update-membership" element={<UpdateMembership />} />
          <Route path="/update-book" element={<UpdateBook />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;