import { useState } from 'react';

import './Login.css';

const Login = () => {
  // state
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);

  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  const passwordRegex = new RegExp(
    '/^.*(?=^.{8,15}$)(?=.*d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/',
  );

  // event handlers
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!emailRegex.test(email)) {
      setEmailError('Email is not valid');
    } else {
      setEmailError('');
      setEmailValidation(true);
    }
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (!passwordRegex.test(password)) {
      setPasswordError('Password is not valid');
    } else {
      setPasswordError('');
      setPasswordValidation(true);
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
            disabled={emailValidation || passwordValidation}
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
