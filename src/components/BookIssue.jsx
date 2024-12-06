import React, { useState } from 'react';

const BookIssue = () => {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookName || !issueDate) {
      setError('Name of book and issue date are required.');
      return;
    }
    // Submit logic here
    console.log('Book issued:', { bookName, authorName, issueDate, returnDate });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Issue Book</h2>
      <div>
        <label>Name of Book:</label>
        <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} required />
      </div>
      <div>
        <label>Author Name:</label>
        <input type="text" value={authorName} readOnly />
      </div>
      <div>
        <label>Issue Date:</label>
        <input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} required />
      </div>
      <div>
        <label>Return Date:</label>
        <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Issue Book</button>
    </form>
  );
};

export default BookIssue;