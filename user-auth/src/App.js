import { Routes, Route } from 'react-router-dom';

import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Example from './Example';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {/* <Example /> */}
    </div>
  );
}

export default App;
