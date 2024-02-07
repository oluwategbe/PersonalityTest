/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./index.scss";

const PersonalityCard = ({ title, personality, desc, picture, color, box }) => {
  return (
    <div
      className="personalityCard"
      style={{
        boxShadow: `4px 3px 14px 0px ${box}`,
        WebkitBoxShadow: `4px 3px 14px 0px ${box}`,
      }}
    >
      <Link to={`/personalities/${personality}`}>
        <img src={picture} alt={title} />
        <h2 style={{ color: `${color}` }}>{title}</h2>
        <h3 style={{ color: `${color}` }}>{personality}</h3>
        <p style={{ color: `${color}` }}>{desc}</p>
      </Link>
    </div>
  );
};

export default PersonalityCard;
