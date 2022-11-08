import './App.css';
import {Route,Routes} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Login from './components/login';
import ForgotPassword from './components/forgotPassword';
function App() {
  return (
    <>
    
    <Routes>
    <Route path="/" element={<Login/>} />
      <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      <Route path="/dashboard/*" element={<Dashboard />}/>
      </Routes>
    </>
  );
}

export default App;
