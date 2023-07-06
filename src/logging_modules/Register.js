import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';
import { register } from '../Service/Api';

const Register = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = user;
    console.log(user);
    await register({ name, email, password, confirmPassword });
  };
  

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <center>
        <div className='regForm'>
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Name'
              value={user.name}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Email'
              value={user.email}
              onChange={handleChange}
              required
            />
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={user.password}
              onChange={handleChange}
              required
            />
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type='submit'>Register</button>
            <button onClick={handleLoginClick}>Login</button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Register;
