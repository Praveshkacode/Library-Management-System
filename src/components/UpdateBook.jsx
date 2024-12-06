import React, { useState } from 'react';

const UpdateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('book');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      setError('All fields are mandatory.');
      return;
    }
    // Submit logic here
    console.log('Book updated:', { title, author, type });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Book</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="book">Book</option>
          <option value="movie">Movie</option>
        </select>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Update Book</button>
    </form>
  );
};

export default UpdateBook;