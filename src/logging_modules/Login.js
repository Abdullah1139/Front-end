import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistrationClick = () => {
    navigate('/register');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/sellItems');
    console.log('Login submitted');
  };

  return (
    <div className='login'>
      <center>
      <div className='loginForm'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?
        <button style={{width:"200px"}} onClick={handleRegistrationClick}>Register here</button>
      </p>
      </div>
      </center>
    </div>
  );
};

export default Login;
