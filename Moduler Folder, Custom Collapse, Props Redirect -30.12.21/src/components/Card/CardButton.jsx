import React, { useState } from 'react';

function CardButton({ count, setCount }) {
  return (
    <button
      onClick={() => setCount((prev) => prev + 1)}
      onMouseLeave={() => setCount(count + 1)}
      className="btn btn-primary"
    >
      Like {'->'} {count}
    </button>
  );
}

export default CardButton;
