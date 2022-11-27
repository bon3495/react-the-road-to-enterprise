import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  // Navigate,
  Routes,
  Route,
} from 'react-router-dom';
import { PathName } from './constants/defaultValues';
import { SignIn } from './views';
// import { Home, Login, Profile, Register } from './views';

const Register = React.lazy(() => import('./views/register'));

const App = () => {
  return (
    <div className="h-full w-full">
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path={PathName.SignIn} element={<SignIn />} />
            <Route path={PathName.Register} element={<Register />} />
            {/* <Route path="/profile/:userId" element={<Profile />} /> */}
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
