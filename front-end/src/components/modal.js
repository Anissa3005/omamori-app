import React from "react";
import "../styles/modal.css";
export default function Modal(props) {
  const { onInputImg, onClick, onCloseModal } = props;
  return (
    <div className="modal-background">
      <div className="modalContainer">
        {/* <div className="title-close-button">
          <button onClick={onCloseModal}>x</button>
        </div> */}
        <h2 className="pin-title">Pin your Omamori</h2>
        {/* <div className="container-input-img"> */}
        <input
          className="input-img"
          onChange={onInputImg}
          placeholder="URL-IMG"
        />
        {/* <input placeholder="Temple Name" /> */}
        {/* </div> */}
        <button className="pin-button" onClick={onClick}>
          Pin
        </button>
      </div>
    </div>
  );
}
