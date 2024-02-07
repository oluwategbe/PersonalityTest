/* eslint-disable react/prop-types */
import "./index.scss";
import React from "react";

const ScoreCard = ({
  title,
  desc,
  leftTitle,
  leftScore,
  rightTitle,
  rightScore,
}) => {
  const [left, setLeft] = React.useState(0);
  const [right, setRight] = React.useState(0);
  React.useEffect(() => {
    if (isNaN(leftScore)) {
      setLeft(50);
    }
    if (isNaN(rightScore)) {
      setRight(50);
    } else {
      setLeft(leftScore);
      setRight(rightScore);
    }
  }, [leftScore, rightScore]);

  return (
    <div className="scoreCard">
      <div className="text">
        <h3>{title}</h3>
        <h4>{desc}</h4>
      </div>
      <div className="card">
        <div className="cardLeft cardChild" style={{ width: `${left}%` }}>
          <span>{left}%</span>
          <p>{leftTitle}</p>
        </div>
        <div className="cardRight cardChild" style={{ width: `${right}%` }}>
          <p>{rightTitle}</p>
          <span>{right}%</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
