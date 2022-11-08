import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const renderForm = (
    <div className="form">

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Registration Number:</label>
          <input type="text"
            placeholder="Enter Registration Number"
            required />
        </div>

        <div className="input-container">
          <label>Email Address:</label>
          <input type="text"
            placeholder="Enter Email Address"
            required />
        </div>

        <div className="button-container">
          <button type="submit">Submit</button>
        </div>

      </form>


    </div>
  )

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Forgot Password</div>
          {renderForm}

          <Link to="/">Login</Link>
        </div>

        
      </div>
  )
}

export default ForgotPassword