import React from 'react';

function TodoItem(props) {
  return <li className="list-group-item">{props.item.title}</li>;
}

export default TodoItem;
