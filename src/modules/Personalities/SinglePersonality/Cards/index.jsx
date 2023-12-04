import React from "react";
import "./index.scss";

const Cards = ({ personality }) => {
  return (
    <div className="letterCards">
      <div className="circle"></div>
      <div className="ei card">
        <h2>Extraverted</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo alias
          dolores in, cum necessitatibus nihil soluta at architecto perferendis
          corrupti?
        </p>
      </div>
      <div className="ns card">
        <h2>Intuitive</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo alias
          dolores in, cum necessitatibus nihil soluta at architecto perferendis
          corrupti?
        </p>
      </div>
      <div className="tf card">
        <h2>Thinking</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo alias
          dolores in, cum necessitatibus nihil soluta at architecto perferendis
          corrupti?
        </p>
      </div>
      <div className="jp card">
        <h2>Judging</h2>
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
