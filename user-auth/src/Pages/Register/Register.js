import { useState } from 'react';

import './Register.css';

const Register = () => {
  // state
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [confirmPasswordValidation, setConfirmPasswordValidation] =
    useState(false);

  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  const passwordRegex = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  ); // Example1!2

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
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (password !== confirmPassword) {
      setConfirmPasswordError('Differed from the first password.');
    } else {
      setConfirmPasswordError('');
      setConfirmPasswordValidation(true);
    }
  };
  const handleLoginClick = () => {
    alert(`Email: ${email}\nPassword: ${password} logged in.`);
  };

  return (
    <div className='login-component'>
      <div className='login-contents'>
        <h1>Fill in the form to register.</h1>
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
          <input
            className='user-input'
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {confirmPasswordValidation ? (
            <>
              <br />
            </>
          ) : (
            <p className='error-message'>{confirmPasswordError}</p>
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

export default Register;
