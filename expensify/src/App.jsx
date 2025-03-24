import { useState } from 'react';
import { Route , Routes, Navigate } from 'react-router';
import LandingPage from '../src/Components/LandingPage/LandingPage';
import SignUp from '../src/Components/SignUp/SignUp';

function App() {

  return (
    <>
          <Routes>
          <Route
            path="/"
            element={<LandingPage/>}
          />
          <Route
            path="/signup"
            element={<SignUp/>}
          />
          </Routes>
    </>
  )
}

export default App
