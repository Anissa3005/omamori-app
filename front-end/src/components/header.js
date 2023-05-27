import "../styles/header.css";
import React from "react";

export default function Header(props) {
  const { onClick, onSignOut } = props;
  return (
    <header>
      <h1 className="header-title">Omamori</h1>
      <div className="container-button-sign-out">
        <button className="upload-button" onClick={onClick}>
          Upload
        </button>
        <p onClick={onSignOut}>Sign out</p>
      </div>
    </header>
  );
}
