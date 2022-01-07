import React, { useState } from 'react';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';
import CardHeader from '../Card/CardHeader';

function CardContainer(props) {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => setToggle(!toggle);

  return (
    <div
      className="card"
      onMouseLeave={toggleHandler}
      onMouseEnter={toggleHandler}
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
