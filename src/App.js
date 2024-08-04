import React, { useState, useEffect } from 'react';
import './index.css';
import Quote from './component/Quote';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('http://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <Quote quote={quote} author={author} />
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default App;
