import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootPage from './pages/auth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<>Home</>} />
          <Route path="login" element={<AuthRootPage />} />
          <Route path="register" element={<AuthRootPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
