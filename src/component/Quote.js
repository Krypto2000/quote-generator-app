import React from 'react';

const Quote = ({ quote, author }) => {
  return (
    <div>
      <p className="quote">"{quote}"</p>
      <p className="author">- {author}</p>
    </div>
  );
};

export default Quote;
