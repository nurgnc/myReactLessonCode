import React from 'react';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';
import CardHeader from '../Card/CardHeader';

function CardContainer(props) {
  return (
    <div className="card">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
}

export default CardContainer;
