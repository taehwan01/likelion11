import { useNavigate } from 'react-router-dom';

import './Main.css';

const Main = () => {
  // hooks
  const navigate = useNavigate();

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
