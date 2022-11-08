import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login/>}>
      </Route>

      <Route path="/ForgotPassword" element={<ForgotPassword/>}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
