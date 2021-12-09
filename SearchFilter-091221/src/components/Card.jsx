import React, { useState } from 'react';

const cardStyle = {
  card: { width: '22rem' },
  cardTitle: { color: 'red', fontSize: '25px' },
  cardBody: {
    color: 'blue',
    fontSize: '20px',
  },
};

export default function Card(props) {
  const [counter, setCounter] = useState(1);

  const counterHandler = (event) => {
    if (event.target.name === 'plus') {
      setCounter(counter + 1);
    } else if (event.target.name === 'minus' && counter > 0) {
      setCounter(counter - 1);
    } else if (event.target.name === 'zero') {
      setCounter(0);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" style={cardStyle.cardTitle}>
          {counter}
        </h5>
        <h6>{props.userName}</h6>
        <p className="card-text" style={cardStyle.cardBody}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          name="plus"
          className="btn btn-primary card-link"
          onClick={counterHandler}
        >
          +
        </button>
        <button
          name="zero"
          className="btn btn-warning card-link"
          onClick={counterHandler}
        >
          reset
        </button>
        <button
          name="minus"
          className="btn btn-danger card-link"
          onClick={counterHandler}
          disabled={counter === 0 ? true : false}
        >
          -
        </button>
      </div>
    </div>
  );
}
