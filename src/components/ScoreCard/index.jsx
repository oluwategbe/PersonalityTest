/* eslint-disable react/prop-types */
import "./index.scss";

const ScoreCard = ({
  title,
  desc,
  leftTitle,
  leftScore,
  rightTitle,
  rightScore,
}) => {
  return (
    <div className="scoreCard">
      <div className="text">
        <h3>{title}</h3>
        <h4>{desc}</h4>
      </div>
      <div className="card">
        <div className="cardLeft cardChild" style={{ width: `${leftScore}%` }}>
          <span>{leftScore}%</span>
          <p>{leftTitle}</p>
        </div>
        <div
          className="cardRight cardChild"
          style={{ width: `${rightScore}%` }}
        >
          <p>{rightTitle}</p>
          <span>{rightScore}%</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
