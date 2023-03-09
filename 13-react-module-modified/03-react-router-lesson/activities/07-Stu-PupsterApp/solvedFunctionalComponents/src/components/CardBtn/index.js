import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button
      onClick={props.onClick}
      className={`card-btn ${props.type}`}
      data-value={props.type}
    >
      {props.type}
    </button>
  );
}

export default CardBtn;
