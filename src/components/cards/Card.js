import React from "react";
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.info}</h1>
      <p>{props.title}</p>
    </div>
  );
};

export default Card;
