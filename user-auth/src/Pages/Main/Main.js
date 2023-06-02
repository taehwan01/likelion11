import { useNavigate } from 'react-router-dom';

import './Main.css';
import { useEffect } from 'react';

const Main = () => {
  // hooks
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='main'>
      <h1>This is the Main page.</h1>
      <button className='main-button' onClick={() => navigate('/login')}>
        Login
      </button>
      <button className='main-button' onClick={() => navigate('/register')}>
        Register
      </button>
    </div>
  );
};

export default Main;
