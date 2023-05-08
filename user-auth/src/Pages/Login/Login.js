import { useState } from 'react';

import './Login.css';

const Login = () => {
  // state
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // event handlers
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (email.length < 6) {
      setEmailError('Email length is too short');
    } else {
      setEmailError('');
    }
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (password.length < 6) {
      setPasswordError('Password should be at least 8 letters');
    } else {
      setPasswordError('');
    }
  };
  const handleLoginClick = () => {
    alert(`Email: ${email}\nPassword: ${password} logged in.`);
  };

  return (
    <div className='login-component'>
      <div className='login-contents'>
        <h1>Enter your email and password to login.</h1>
        <form className='login-form'>
          <input
            className='user-input'
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={handleEmailChange}
          />
          {emailError === '' ? (
            <>
              <br />
            </>
          ) : (
            <p className='error-message'>{emailError}</p>
          )}
          <input
            className='user-input'
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError === '' ? (
            <>
              <br />
            </>
          ) : (
            <p className='error-message'>{passwordError}</p>
          )}
          <button
            className='user-input login-button'
            onClick={handleLoginClick}
          >
            Login !
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
