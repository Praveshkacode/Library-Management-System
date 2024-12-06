import React, { useState } from 'react';

const ReturnBook = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookName || !serialNo) {
      setError('Name of book and serial number are required.');
      return;
    }
    // Submit logic here
    console.log('Book returned:', { bookName, authorName, serialNo, issueDate, returnDate });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Return Book</h2>
      <div>
        <label>Name of Book:</label>
        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} required />
      </div>
      <div>
        <label>Author Name:</label>
        <input type="text" value={authorName} readOnly />
      </div>
      <div>
        <label>Serial No:</label>
        <input type="text" value={serialNo} onChange={(e) => setSerialNo(e.target.value)} required />
      </div>
      <div>
        <label>Issue Date:</label>
        <input type="date" value={issueDate} readOnly />
      </div>
      <div>
        <label>Return Date:</label>
        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Return Book</button>
    </form>
  );
};

export default ReturnBook;