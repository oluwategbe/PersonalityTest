import React from "react";
import "./index.scss";

const Cards = ({ personality }) => {
  const [firstLetter, secondLetter, thirdLetter, fourthLetter] = [
    ...personality,
  ];
  return (
    <div className="letterCards">
      <div className="circle"></div>
      <div className="ei card">
        <h2>{firstLetter === "E" ? "Extraverted" : "Introverted"}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo alias
          dolores in, cum necessitatibus nihil soluta at architecto perferendis
          corrupti?
        </p>
      </div>
      <div className="ns card">
        <h2>{secondLetter === "N" ? "Intuitive" : "Sensing"}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo alias
          dolores in, cum necessitatibus nihil soluta at architecto perferendis
          corrupti?
        </p>
      </div>
      <div className="tf card">
        <h2>{thirdLetter === "T" ? "Thinking" : "Feeling"}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo alias
          dolores in, cum necessitatibus nihil soluta at architecto perferendis
          corrupti?
        </p>
      </div>
      <div className="jp card">
        <h2>{fourthLetter === "J" ? "Judging" : "Perceiving"}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo alias
          dolores in, cum necessitatibus nihil soluta at architecto perferendis
          corrupti?
        </p>
      </div>
      <div className="circle2"></div>
    </div>
  );
};

export default Cards;
