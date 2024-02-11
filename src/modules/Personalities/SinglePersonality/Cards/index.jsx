import "./index.scss";

// eslint-disable-next-line react/prop-types
const Cards = ({ personality }) => {
  const [firstLetter, secondLetter, thirdLetter, fourthLetter] = [
    ...personality,
  ];
  return (
    <div className="letterCards">
      <h1>What the letters mean</h1>
      {/* <div className="circle"></div> */}
      <div className="ei card">
        <div className="h2Box">
          <h2>
            {firstLetter === "E" ? "Extraverted ( E )" : "Introverted ( I )"}
          </h2>
        </div>
        <div className="pBox">
          <p>
            {firstLetter === "E"
              ? "Extraverted individuals are often outgoing, social, and energized by engaging with others. They typically enjoy the hustle and bustle of social gatherings, seeking stimulation and deriving energy from interaction, whether in lively parties or group activities."
              : "Introverted individuals tend to be more reflective and inward-focused, finding solace and rejuvenation in moments of solitude or in-depth personal contemplation, often preferring smaller, more intimate gatherings over large social events."}
          </p>
        </div>
      </div>
      <div className="ns card">
        <div className="h2Box">
          <h2>{secondLetter === "N" ? "Intuitive ( N )" : "Sensing ( S )"}</h2>
        </div>
        <div className="pBox">
          <p>
            {secondLetter === "N"
              ? "Intuitive individuals are characterized by their imaginative and future-oriented mindset. They are drawn to possibilities, patterns, and innovative ideas, often relying on their instincts and creativity to navigate the world. They enjoy exploring new concepts and envisioning potential outcomes."
              : "Sensing individuals are grounded in the present moment and rely on tangible and concrete information. They are detail-oriented, practical, and observant, focusing on what is directly evident in their surroundings. Sensing individuals often appreciate hands-on experiences and value a realistic and pragmatic approach to problem-solving."}
          </p>
        </div>
      </div>
      <div className="tf card">
        <div className="h2Box">
          <h2>{thirdLetter === "T" ? "Thinking ( T )" : "Feeling ( F )"}</h2>
        </div>
        <div className="pBox">
          <p>
            {thirdLetter === "T"
              ? "Thinking individuals base their decisions on logic, objective analysis, and rationality. They prioritize fairness and consistency, often setting aside personal emotions to make impartial judgments. They approach problem-solving by evaluating facts and evidence, aiming for an objective and systematic outcome."
              : "Feeling individuals make decisions based on personal values, empathy, and consideration for others. They prioritize harmony and understanding, often taking into account the emotional impact of choices on themselves and those around them. Feeling individuals value relationships and often seek consensus to ensure decisions align with their values and the feelings of others."}
          </p>
        </div>
      </div>
      <div className="jp card">
        <div className="h2Box">
          <h2>{fourthLetter === "J" ? "Judging ( J )" : "Perceiving ( P )"}</h2>
        </div>
        <div className="pBox">
          <p>
            {fourthLetter === "J"
              ? "Judging individuals prefer structure, organization, and planning in their lives. They are decisive and seek closure, often making decisions promptly. They appreciate routine and order, and they tend to be goal-oriented, planning their activities in advance. Judging individuals find satisfaction in completing tasks and prefer a planned and organized approach to life."
              : "Perceiving individuals enjoy flexibility, spontaneity, and adaptability. They are open-minded and prefer to go with the flow, often keeping their options open. Perceiving individuals are more comfortable with uncertainty and are adaptable to change. They enjoy exploring new possibilities and tend to postpone decision-making, embracing a more relaxed and spontaneous approach to life."}
          </p>
        </div>
      </div>
      {/* <div className="circle2"></div> */}
    </div>
  );
};

export default Cards;
