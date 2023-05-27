import React from "react";

export default function SignUp(props) {
  const { onClick, onSignUp, inputNewUser, inputNewPassword } = props;

  return (
    <div>
      <form>
        <h2>Create account</h2>
        <input type="text" placeholder="username" onChange={inputNewUser} />
        <input
          type="password"
          placeholder="password"
          onChange={inputNewPassword}
        />
        <button onClick={onSignUp}>sign-up</button>
      </form>
      <p onClick={onClick}>Back to login</p>
    </div>
  );
}
