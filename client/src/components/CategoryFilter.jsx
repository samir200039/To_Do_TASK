import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TextField, Button } from '@mui/material';

const CategoryFilter = () => {
  const { todos, setFilteredTodos } = useContext(TodoContext);
  const [category, setCategory] = useState('');

  const handleFilter = () => {
    setFilteredTodos(todos.filter(todo => todo.category === category));
  };

  return (
    <div>
      <TextField
        label="Filter by Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleFilter} variant="contained" color="primary" fullWidth>
        Filter
      </Button>
    </div>
  );
};

export default CategoryFilter;
