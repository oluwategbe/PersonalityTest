/* eslint-disable react/prop-types */
import { ThemeContext } from "../../context";
import "./index.scss";
import * as React from "react";

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
  const { theme } = React.useContext(ThemeContext);
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
    <div className={`scoreCard ${theme === "dark" ? "dark" : ""}`}>
      <div className="text">
        <h3>{title}</h3>
        <h4>{desc}</h4>
      </div>
      <div className="card">
        <div
          className={`cardLeft cardChild ${theme === "dark" ? "dark" : ""}`}
          style={{ width: `${left}%` }}
        >
          <span>{left}%</span>
          <p>{leftTitle}</p>
        </div>
        <div
          className={`cardRight cardChild ${theme === "dark" ? "dark" : ""}`}
          style={{ width: `${right}%` }}
        >
          <p>{rightTitle}</p>
          <span>{right}%</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
