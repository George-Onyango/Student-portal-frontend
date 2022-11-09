import React, { useState } from 'react'
import {Link} from 'react-router-dom';


function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)


  const database = [
    {
      registrationNumber: "user1",
      password: "pass1"
    },
    {
      registrationNumber: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid registration number",
    pass: "invalid password"
  };


  //Prevent page reload
  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.registrationNumber === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  // Code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  // Login form
  const renderForm = (
    <div className="form">

      <form onSubmit={handleSubmit} >
        <div className="input-container">
          <label>Registration number </label>
          <input type="text"
            name="uname"
            placeholder="Type your Student Registration Number."
            required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password"
            name="pass"
            placeholder="Type your password."
            required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>

    </div>
  );



  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login to Student Portal</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>

      <Link to="/ForgotPassword">
        <p>Forgot your Password</p> 
        </Link>
    </div>
  )
}

export default Login

