 


import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todos', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setTodos(response.data);
      } catch (err) {
        console.error('Error fetching todos:', err);
        setError('Error fetching todos');
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (title, category) => {
    try {
      const response = await axios.post('http://localhost:5000/api/todos', { title, category }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTodos([...todos, response.data]);
    } catch (err) {
      console.error('Error adding todo:', err);
      setError('Error adding todo');
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTodo, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
    } catch (err) {
      console.error('Error updating todo:', err);
      setError('Error updating todo');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      console.error('Error deleting todo:', err);
      setError('Error deleting todo');
    }
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, error }}>
      {children}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </TodoContext.Provider>
  );
}; 