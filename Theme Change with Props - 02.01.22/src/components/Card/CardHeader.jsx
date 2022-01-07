// 1. yöntem const {count} = props
// 2.yöntem: kullanılacak yerde {props.count}
//3.yönttem destructuring: function CardHeader({ count, ...props }) {

import React from 'react';

function CardHeader({ count, setCount, ...props }) {
  return (
    <div
      class="card-header"
      onMouseEnter={() => {
        setCount(count + 1);
      }}
    >
      Card header {count}{' '}
    </div>
  );
}

export default CardHeader;
