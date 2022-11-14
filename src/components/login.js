import React, { useEffect, useState } from 'react'
import {Link, Navigate} from 'react-router-dom';

function Login({users,setUsers,handleSub, login, inCorrectDetails})
 {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // Login form
  return (
    <>
    {login?<Navigate to="/dashboard"/>:<RenderForm handleSub={handleSub} inCorrectDetails={inCorrectDetails}/>}
         </>       
  )
}

function RenderForm({handleSub, inCorrectDetails}){
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();}
  return (
<>
    <div className="app">
    
       <div className="login-form">
         <div className="title">Student Login</div>
      <div className="form">

  <form onSubmit={(e)=> {handleSubmit(e);handleSub(e, user, password)}} >
    <div className="input-container">
      <label>Name </label>
      <input type="text"
        name="uname"
        value={user}
        onChange = {e=>setUser(e.target.value)}
        placeholder="Type your Student Name."
        required /> 
    </div>

    <div className="input-container">
      <label>Password: </label>
      <input type="password"
        name="pass"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Type your password."
        required />
    </div>
    <div className="button-container">
      <button type="submit"><span>Login</span></button>
    </div>
  </form>
    <Link to="/ForgotPassword">
         <p>Forgot your Password</p> 
    </Link>
    <div className={inCorrectDetails?"incorrect-details": "no-show"}>
      Wrong username or password
    </div>

</div>
</div>
    </div>
    
</>

  )
}

export default Login;