/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./index.scss";

const PersonalityCard = ({ title, personality, desc, picture, color }) => {
  return (
    <div className="personalityCard">
      <Link to={`/personalities/${personality}`}>
        <img src={picture} alt={title} />
        <h2 style={{ color: `${color}` }}>{title}</h2>
        <h3>{personality}</h3>
        <p>{desc}</p>
      </Link>
    </div>
  );
};

export default PersonalityCard;
