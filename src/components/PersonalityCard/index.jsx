/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./index.scss";
import { PersonalityRevealY, ScaleXY } from "../../utils/animatedText";

const PersonalityCard = ({
  title,
  personality,
  desc,
  picture,
  color,
  box,
  delay,
  index,
}) => {
  return (
    <div
      className="personalityCard"
      style={{
        boxShadow: `2px 2px 14px 0px ${box}`,
        WebkitBoxShadow: `2px 2px 14px 0px ${box}`,
      }}
    >
      <Link to={`/personalities/${personality}`}>
        <ScaleXY delay={delay} once={true} index={index}>
          <img src={picture} alt={title} />
        </ScaleXY>
        <PersonalityRevealY delay={1 * delay} once={true}>
          <h2 style={{ color: `${color}` }}>{title}</h2>
          <h3 style={{ color: `${color}` }}>{personality}</h3>
          <p style={{ color: `${color}` }}>{desc}</p>
        </PersonalityRevealY>
      </Link>
    </div>
  );
};

export default PersonalityCard;
