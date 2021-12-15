import React, { useState } from 'react';
import './style.css';
import Form from './components/Form';
import todoItems from './data/todoItems';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState(todoItems);
  const todoItem = todos.map((item) => <TodoItem key={item.id} item={item} />);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <Form setTodos={setTodos} todos={todos}/>
          <ul className="list-group mt-5">{todoItem}</ul>
        </div>
      </div>
    </div>
  );
}
