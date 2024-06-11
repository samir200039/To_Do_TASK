import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '22px',
    margin: '10px',
    cursor: 'pointer'
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button style={buttonStyle} onClick={handleRegister}>Register</button>
      <button style={buttonStyle} onClick={handleSignIn}>Login</button>
    </div>
  );
}

export default Home;
