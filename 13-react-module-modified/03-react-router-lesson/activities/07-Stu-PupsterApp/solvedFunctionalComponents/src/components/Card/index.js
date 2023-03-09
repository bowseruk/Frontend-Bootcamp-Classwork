import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      {!props.image && (
        <i className="fa fa-spinner fa-spin" aria-hidden="true" />
      )}
      <img src={props.image} alt="brown-black dog" />
      <CardBtn onClick={props.handleBtnClick} type="like" />
      <CardBtn onClick={props.handleBtnClick} type="dislike" />
    </div>
  );
}

export default Card;
