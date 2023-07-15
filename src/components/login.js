import React, { useState } from "react";
import axios from "axios";

const Login = () => {


  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('')

  const handleEmailChange=(event)=>{
    setEmail(event.target.value)
  }

  const handlePasswordChange=(event)=>{
    setPassword(event.target.value)
  }

  const handleSubmit=async(event)=>{
    event.preventDefault();

    try {
      const response=await axios.post(
        "https://forgetpassword-backend-a7g0.onrender.com/api/login",
        {
          Email,
          Password
        }
      )
      window.alert("login successfully")
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-content">
          <h3 className="form-title">Login</h3>
          <div className="text-center"></div>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={Email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={Password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3 p-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        <div className="forget">
          <div class="reset-password">
            <p>
              {" "}
              Forget<a href="/resetPassword">Password?</a>
            </p>
          </div>

          <div class="signup">
            <p>
              Not a member?<a href="/register">Register</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
