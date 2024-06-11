import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import CategoryFilter from './CategoryFilter';
import { Container, Typography, List } from '@mui/material';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Todo List</Typography>
      <TodoForm />
      <CategoryFilter />
      <List>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Container>
  );
};

export default TodoList;

// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from './AuthContext';
// import TodoItem from './TodoItem';
// import TodoForm from './TodoForm';
// import CategoryFilter from './CategoryFilter';

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const { authData } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchTodos = async () => {
//       const response = await axios.get('http://localhost:5000/todos', {
//         headers: { Authorization: authData.token },
//       });
//       setTodos(response.data);
//     };
//     fetchTodos();
//   }, [authData]);

//   const addTodo = async (title, category) => {
//     const response = await axios.post(
//       'http://localhost:5000/todos',
//       { title, category },
//       {
//         headers: { Authorization: authData.token },
//       }
//     );
//     setTodos([...todos, response.data]);
//   };

//   const updateTodo = async (id, updatedTodo) => {
//     const response = await axios.put(`http://localhost:5000/todos/${id}`, updatedTodo, {
//       headers: { Authorization: authData.token },
//     });
//     setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
//   };

//   const deleteTodo = async (id) => {
//     await axios.delete(`http://localhost:5000/todos/${id}`, {
//       headers: { Authorization: authData.token },
//     });
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <CategoryFilter />
//       <TodoForm addTodo={addTodo} />
//       <ul>
//         {todos.map(todo => (
//           <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
