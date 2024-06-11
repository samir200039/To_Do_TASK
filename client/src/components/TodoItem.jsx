import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [category, setCategory] = useState(todo.category);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, { title, category, completed: todo.completed });
    setEditing(false);
  };

  const handleToggleComplete = () => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed });
  };

  return (
    <li>
      {editing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title} - {todo.category}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleToggleComplete}>
            {todo.completed ? 'Incomplete' : 'Complete'}
          </button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
