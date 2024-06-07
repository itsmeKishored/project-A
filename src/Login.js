import React, { useState } from 'react';
import './App1.css';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
  };

  return (
    <div className='login-container'>
      <center>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input 
            type='text' 
            id='username' 
            name='username' 
            value={username} 
            onChange={handleUsernameChange} 
            required 
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input 
            type='password' 
            id='password' 
            name='password' 
            value={password} 
            onChange={handlePasswordChange} 
            required 
          />
        </div>
        <button type='submit'>Login</button>
      </form></center>
    </div>
  );
}

export default Login;
