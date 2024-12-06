import React, { useState } from 'react';

const AddMembership = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('6 months');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError('Name is mandatory.');
      return;
    }
    // Submit logic here
    console.log('Membership added:', { name, duration });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Membership</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Duration:</label>
        <select value={ duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="6 months">6 Months</option>
          <option value="1 year">1 Year</option>
          <option value="2 years">2 Years</option>
        </select>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Add Membership</button>
    </form>
  );
};

export default AddMembership;