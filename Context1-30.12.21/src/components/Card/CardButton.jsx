import React, { useState } from 'react';

function CardButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)} className="btn btn-primary">
      Like {'->'} {count}
    </button>
  );
}

export default CardButton;
