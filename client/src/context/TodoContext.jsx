import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get('/api/todos', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTodos(response.data);
    };
    fetchTodos();
  }, []);

  const addTodo = async (title, category) => {
    const response = await axios.post('/api/todos', { title, category }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setTodos([...todos, response.data]);
  };

  const updateTodo = async (id, updatedTodo) => {
    const response = await axios.put(`/api/todos/${id}`, updatedTodo, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
