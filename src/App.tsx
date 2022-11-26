import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { Home, Login, Profile, Register } from './views';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:userId" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
