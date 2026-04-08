import React from "react";
import { Link } from "react-router";
import "../styles/App.css"

function Signup() {
  return (
    <div>
      <h1>welcome to our chat-app</h1>
      <p>please signup to start explor</p>
      <div className="loginpage">
        <form action="#">
          <label htmlFor="name">
            First Name:
            <input type="text" />
            Last Name:
            <input type="text" />
          </label>
          <label htmlFor="#">
            <input type="text" placeholder="Enter your email" required />
            <input type="email" />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm your password" required />
            <button className="onSubmit">Signup</button>
          </label>

          <p>
            If you already have an account
            <span>
              <button>
                <Link to="/login">Login</Link>
              </button>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Signup;
