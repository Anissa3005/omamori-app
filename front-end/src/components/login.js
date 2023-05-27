import "../styles/login.css";
import React from "react";

export default function Login(props) {
  const { onClick, onInputPassword, onInputUsername, onSignUp } = props;
  return (
    <div className="login-container">
      <form className="login-form">
        <h1 className="login-title-welcome">
          W<span className="login-pink-accent">e</span>lcome back
          <span className="login-pink-accent">.</span>
        </h1>
        <p className="text-welcome">Welcome back! Please enter your details.</p>
        <div className="input-container">
          <label>Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username..."
            onChange={onInputUsername}
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password..."
            onChange={onInputPassword}
            required
          />
        </div>

        <button className="login-button" onClick={onClick}>
          Sign in
        </button>
        <p className="login-sign-up-text">
          Don't have a account?
          <span className="login-pink-accent sign-up-click" onClick={onSignUp}>
            {" "}
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}
