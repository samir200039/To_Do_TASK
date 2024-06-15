


import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, category); 
    setTitle('');
    setCategory('');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component="h2" gutterBottom>Add New Todo</Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Add Todo
        </Button>
      </Box>
    </Container>
  );
};

export default TodoForm;
