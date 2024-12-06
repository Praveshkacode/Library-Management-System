import React, { useState } from 'react';

const UserManagement = () => {
  const [userType, setUserType] = useState('new'); // Corrected state declaration
  const [name, setName] = useState('');
  const [error, setError] = useState(''); // Removed unnecessary ```jsx

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError('Name is mandatory.');
      return;
    }
    // Submit logic here
    console.log('User  managed:', { userType, name });
    setError('');
    // Optionally reset the form or provide feedback
    setName(''); // Reset name after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Management</h2>
      <div>
        <label>User Type:</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}> {/* Fixed here */}
          <option value="new">New User</option>
          <option value="existing">Existing User</option>
        </select>
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Manage User</button>
    </form>
  );
};

export default UserManagement;