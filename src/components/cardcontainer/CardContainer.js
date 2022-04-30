import React from "react";
import Card from "../cards/Card";
import "./CardContainer.css";

const CardContainer = () => {
  return (
    <div className="info-cards">
      <Card info="554,529.8%" title="Fixed APY" />
      <Card info="1,109,059.6%" title="2 Days Lock APY" />
      <Card info="1,663,589.4%" title="5 Days Lock APY" />
      <Card info="1,235,740" title="Locked Tokens" />
    </div>
  );
};

export default CardContainer;
