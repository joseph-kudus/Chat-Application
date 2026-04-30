import React from "react";
import { Link } from "react-router";
import "../styles/Login.css"

function Login() {
  return (
    <div className="login-wrapper">
      <h1>welcome to our chat-app</h1>
      <p>please login to start explor</p>
      <div className="loginpage">
        <form action="#">
          <label htmlFor="#">
            Email:
            <input type="text" placeholder="Enter your email" required />
            Password:
            <input type="password" placeholder="Password" required />
            <button className="onSubmit">Login</button>
          </label>
          
          <span>
            <Link to="/">Forgot Password</Link>
          </span>
          <p>
            If you don't have an account
            <span>
              <button>
                <Link to="/signup">Create new Account</Link>
              </button>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
