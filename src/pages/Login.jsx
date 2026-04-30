import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "../styles/Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("chatUsers") || "[]");

    // Find user with matching email + password
    const foundUser = users.find(
      (u) => u.email === formData.email && u.password === formData.password,
    );

    if (!foundUser) {
      setError("Invalid email or password");
      return;
    }

    // Update online status
    foundUser.online = true;
    localStorage.setItem("chatUsers", JSON.stringify(users));

    // Log in and redirect
    login(foundUser);
    navigate("/");
  };

  return (
    <div className="login-wrapper">
      <h1>Welcome to our chat-app</h1>
      <p>Please login to start exploring</p>
      <div className="loginpage">
        <form onSubmit={handleLogin}>
          {error && <p className="error">{error}</p>}

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </label>

          <button type="submit" className="onSubmit">
            Login
          </button>

          <span>
            <Link to="#">Forgot Password</Link>
          </span>

          <p>
            If you don't have an account{" "}
            <span>
              <Link to="/signup">Create new Account</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
