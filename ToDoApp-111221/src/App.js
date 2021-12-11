import React, { useState } from 'react';
import './style.css';
import TodoItem from './components/TodoItem';

const todoItems = [
  { id: 1, title: 'Hi', isCompleted: true },
  { id: 2, title: 'Genc', isCompleted: false },
  { id: 3, title: 'Nur', isCompleted: true },
  { id: 4, title: 'Frontend', isCompleted: false },
  { id: 5, title: 'Javascript', isCompleted: true },
];

export default function App() {
  const [toDo, setToDo] = useState(todoItems);
  // const {item} = props; 2.yöntem
  // !! : başına koyduğumuz ifadenin varlığını kontrol eder.
  function formHandlerSubmit(event) {
    event.preventDefault();
    if (!!event.target[0].value) {
      const item = {
        id: toDo.length + 1,
        title: event.target[0].value,
        isCompleted: false,
      };

      setToDo([item, ...toDo]);
      event.target[0].value = '';
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <form className="mb-3" onSubmit={formHandlerSubmit}>
            <div className="mb-3">
              <label htmlFor="todoItem" className="form-label">
                Yapılacak İş
              </label>
              <input
                name="todoItem"
                type="text"
                className="form-control"
                id="todoItem"
                placeholder="yapılacak işinizi giriniz..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Ekle
            </button>
          </form>
          <ul className="list-group">
            {toDo.map((item) => (
              <TodoItem item={item} hello="hello" />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
