import "../styles/sign-up.css";
import React from "react";

export default function SignUp(props) {
  const { onClick, onSignUp, inputNewUser, inputNewPassword, alreadyExists } =
    props;

  return (
    <div className="sign-up-container">
      <form className="sign-up-form">
        <h2 className="join-up">
          Join <span className="yellow-accent">us</span>
        </h2>
        {alreadyExists ? (
          <p className="user-exists">*User already exists</p>
        ) : (
          <></>
        )}
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            onChange={inputNewUser}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            onChange={inputNewPassword}
            required
          />
        </div>
        <button className="button-sign-up" onClick={onSignUp}>
          sign-up
        </button>
        <p className="pink-accent back-to-login" onClick={onClick}>
          Back to login
        </p>
      </form>
    </div>
  );
}
