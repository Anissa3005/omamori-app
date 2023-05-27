import "../styles/header.css";
import React from "react";

export default function Header(props) {
  const { onClick } = props;
  return (
    <header>
      <h1 className="header-title">Omamori</h1>
      <button className="upload-button" onClick={onClick}>
        UPLOAD
      </button>
    </header>
  );
}
