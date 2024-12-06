import React, { useState } from 'react';

const FinePay = () => {
  const [finePaid, setFinePaid] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (finePaid && !remarks) {
      setError('Remarks are required if fine is paid.');
      return;
    }
    // Submit logic here
    console.log('Fine payment processed:', { finePaid, remarks });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Pay Fine</h2>
      <div>
        <label>Fine Paid:</label>
        <input type="checkbox" checked={finePaid} onChange={(e) => setFinePaid(e.target.checked)} />
      </div>
      {finePaid && (
        <div>
          <label>Remarks:</label>
          <input type="text" value={remarks} onChange={(e) => setRemarks(e.target.value)} required />
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Confirm Payment</button>
    </form>
  );
};

export default FinePay;