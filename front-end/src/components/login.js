import React from "react";

export default function Login(props) {
  const { onClick, onInputPassword, onInputUsername } = props;
  return (
    <form className="login-form">
      <label>Username:</label>
      <input
        id="username"
        type="text"
        placeholder="Username"
        onChange={onInputUsername}
      />
      <label>Password:</label>
      <input
        id="password"
        type="password"
        placeholder="password"
        onChange={onInputPassword}
      />
      <button onClick={onClick}>Login</button>
    </form>
  );
}
