import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';
import { login } from '../Service/Api';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegistrationClick = () => {
    navigate('/register');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginDetails).then((res) => {
      localStorage.setItem('token', res.data.token)

    }
    )
    navigate('/')
  };


  return (
    <div className='login'>
      <center>
        <div className='loginForm'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Email'
              value={loginDetails.email}
              onChange={handleInputChange}
              required
            />
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={loginDetails.password}
              onChange={handleInputChange}
              required
            />
            <button type='submit'>Login</button>
          </form>
          <p>
            Don't have an account?
            <button style={{ width: '200px' }} onClick={handleRegistrationClick}>
              Register here
            </button>
          </p>
        </div>
      </center>
    </div>
  );
};

export default Login;
