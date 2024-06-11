import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { AuthProvider } from './context/AuthContext';
import { TodoProvider } from './context/TodoContext';
import { Container } from '@mui/material';
import Home from './components/Home';



const App = () => {
  return (
    <AuthProvider>
      <TodoProvider>
        <Router>
          <Container>
            <Routes>
              <Route path="/" element ={<Home/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/todos" element={<TodoList />} />
            </Routes>
          </Container>
        </Router>
      </TodoProvider>
    </AuthProvider>
  );
};

export default App;

 