import React from 'react';

function Form(props) {
  const { setTodos, todos } = props;
  function formSubmit(event) {
    event.preventDefault();
    if (!!event.target.todo.value) {
      console.log('1:', event.target.todo.value);
      setTodos((prev) => {
        const item = {
          id: todos.length + 1,
          title: event.target.todo.value,
          isCompleted: false,
        };
        return [item, ...prev];
      });
      console.log('title', item.title);
      event.target.todo.value = '';
    }
  }
  return (
    <>
      <form method="get" className="mb-3" onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="todoItem" className="form-label">
            Bir Task Ekleyin:
          </label>
          <input
            name="todo"
            type="text"
            className="form-control"
            id="todo"
            placeholder="task..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ekle
        </button>
      </form>
    </>
  );
}

export default Form;
