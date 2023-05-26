import React from "react";

export default function Modal(props) {
  const { onInputImg, onClick } = props;
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <input onChange={onInputImg} placeholder="URL-IMG" />
        {/* <input placeholder="Temple Name" /> */}
        <button onClick={onClick}>PIN</button>
      </div>
    </div>
  );
}
