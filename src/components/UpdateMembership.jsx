import React, { useState } from 'react';

const UpdateMembership = () => {
  const [membershipNumber, setMembershipNumber] = useState('');
  const [duration, setDuration] = useState('6 months');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!membershipNumber) {
      setError('Membership number is mandatory.');
      return;
    }
    // Submit logic here
    console.log('Membership updated:', { membershipNumber, duration });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Membership</h2>
      <div>
        <label>Membership Number:</label>
        <input type="text" value={membershipNumber} onChange={(e) => setMembershipNumber(e.target.value)} required />
      </div>
      <div>
        <label>Duration:</label>
        <select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="6 months">6 Months</option>
          <option value="1 year">1 Year</option>
          <option value="2 years">2 Years</option>
        </select>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Update Membership</button>
    </form>
  );
};

export default UpdateMembership;