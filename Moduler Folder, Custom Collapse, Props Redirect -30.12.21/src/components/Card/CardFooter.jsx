import React from 'react';
import CardButton from '../Card/CardButton';

function CardFooter({ count, setCount }) {
  return (
    <div className="card-footer">
      Card footer
      <div>
        <CardButton count={count} setCount={setCount} />{' '}
      </div>
    </div>
  );
}

export default CardFooter;
