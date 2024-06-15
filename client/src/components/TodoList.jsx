 

import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import CategoryFilter from './CategoryFilter';
import { Container, Typography, List } from '@mui/material';

const TodoList = () => {
  const { todos, addTodo, updateTodo, deleteTodo } = useContext(TodoContext);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Todo List</Typography>
      <TodoForm addTodo={addTodo} />
      <CategoryFilter />
      <List>
        {todos.map(todo => (
          <TodoItem  todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
