import React, { useState } from 'react';
import TodoForm from './TodoForm';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <input key={todo.id} onClick={() => completeTodo(todo.id)} name="todo" type="checkbox">
        
      </input>
      <label htmlFor="todo">{todo.text}</label>
      <div className='icons'>
        <input
          type="image"
          src="https://img.icons8.com/windows/32/undefined/delete-forever.png"
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'/>
        <input
          type="image"
          src="https://img.icons8.com/material-outlined/24/undefined/edit--v1.png"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;