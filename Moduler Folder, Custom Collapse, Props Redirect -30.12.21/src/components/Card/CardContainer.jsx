import React, { useState } from 'react';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';
import CardHeader from '../Card/CardHeader';

function CardContainer(props) {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="card"
      onMouseLeave={() => setToggle(!toggle)}
      onMouseEnter={() => setToggle(!toggle)}
    >
      <CardHeader count={count} setCount={setCount} />
      {toggle && (
        <>
          <CardBody />
          <CardFooter count={count} setCount={setCount} />
        </>
      )}
    </div>
  );
}

export default CardContainer;
