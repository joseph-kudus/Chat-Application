import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseconfig";

import "../styles/Login.css";

function Signup() {
  const [username, setUsername] = useState;
  const [email, setEmail] = useState;
  const [password, setPassword] = useState;
  const [confirmpassword, setConfirmPassword] = useState;
  const [msg, setMsg] = useState;
  const [loading, setLoading] = useState;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMsg("Your account is created, now login");
    } catch (err) {
      setMsg("err.message");
    } finally {
      loading(false)
    }
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    const users = JSON.parse(localStorage.getItem("chatUsers") || "[]");

    if (users.find((u) => u.email === formData.email)) {
      setError("Email already registered");
      return;
    }

    const newUser = {
      id: Date.now(),
      username: formData.username, // <- no more firstName/lastName
      email: formData.email,
      password: formData.password,
      avatar: `https://i.pravatar.cc/150?u=${formData.email}`,
      online: true,
    };

    users.push(newUser);
    localStorage.setItem("chatUsers", JSON.stringify(users));

    login(newUser);
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome to KudusChat</h1>
        <p className="auth-subtitle">Create an account to start chatting</p>

        <form onSubmit={handleSignup} className="auth-form">
          {error && <div className="error-box">{error}</div>}

          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Min 6 characters"
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Sign Up
          </button>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
