import { RevealY, SlideLeft, SlideRight } from "../../../../utils/animatedText";
import "./index.scss";

// eslint-disable-next-line react/prop-types
const Cards = ({ personality }) => {
  const [firstLetter, secondLetter, thirdLetter, fourthLetter] = [
    ...personality,
  ];
  const screenWidth = window.innerWidth;
  let width = "45%";
  if (screenWidth <= 560) {
    width = "60%";
  }
  return (
    <div className="letterCards">
      <h1>What the letters mean</h1>
      <SlideLeft width={width}>
        <div className="ei card">
          <div className="h2Box">
            <RevealY delay={0.5} once={true}>
              <h2>
                {firstLetter === "E"
                  ? "Extraverted ( E )"
                  : "Introverted ( I )"}
              </h2>
            </RevealY>
          </div>
          <div className="pBox">
            <RevealY delay={0.7} once={true}>
              <p>
                {firstLetter === "E"
                  ? "Extroverts are fueled by social interaction and connecting with others. They thrive in lively, vibrant environments and are known for their expressive and outgoing nature. They enjoy group activities and effortlessly exhibit enthusiasm."
                  : "Introverts thrive in quiet environments or small group settings, placing great value on introspection, deep thought, and building meaningful social connections. They cherish moments of solitude, and may feel drained by excessive socializing."}
              </p>
            </RevealY>
          </div>
        </div>
      </SlideLeft>
      <SlideRight style={{ alignSelf: "flex-end" }} width={width}>
        <div className="ns card">
          <div className="h2Box">
            <RevealY delay={0.5} once={true}>
              <h2>
                {secondLetter === "N" ? "Intuitive ( N )" : "Sensing ( S )"}
              </h2>
            </RevealY>
          </div>
          <div className="pBox">
            <RevealY delay={0.7} once={true}>
              <p>
                {secondLetter === "N"
                  ? "Intuitives value theories, patterns, and future prospects, embracing creativity and imagination. They explore abstract concepts and potential outcomes with curiosity and open-mindedness, prioritizing future potentials over present stability."
                  : "Sensors rely on their senses for information, emphasizing practicality and hands-on learning. They prioritize reality and facts, enjoying tangible experiences and focusing on details. They are very pragmatic and down-to-earth."}
              </p>
            </RevealY>
          </div>
        </div>
      </SlideRight>
      <SlideLeft width={width}>
        <div className="tf card">
          <div className="h2Box">
            <RevealY delay={0.5} once={true}>
              <h2>
                {thirdLetter === "T" ? "Thinking ( T )" : "Feeling ( F )"}
              </h2>
            </RevealY>
          </div>
          <div className="pBox">
            <RevealY delay={0.7} once={true}>
              <p>
                {thirdLetter === "T"
                  ? "Thinkers rely on logic and reason, prioritizing objective data and facts. They maintain consistency and logic in their decision-making, and often masking their emotions. They emphasize objectivity and rationality, giving precedence to logic over emotions."
                  : "Feelers prioritize decisions based on emotions and values, considering how their choices impact people. They are sensitive and empathetic, prioritizing social relationships, cooperation and emotional well-being."}
              </p>
            </RevealY>
          </div>
        </div>
      </SlideLeft>
      <SlideRight style={{ alignSelf: "flex-end" }} width={width}>
        <div className="jp card">
          <div className="h2Box">
            <RevealY delay={0.5} once={true}>
              <h2>
                {fourthLetter === "J" ? "Judging ( J )" : "Perceiving ( P )"}
              </h2>
            </RevealY>
          </div>
          <div className="pBox">
            <RevealY delay={0.7} once={true}>
              <p>
                {fourthLetter === "J"
                  ? "Judgers value structure and organization, preferring planned outcomes and disliking surprises. They are decisive, thorough, and highly organized individuals who prioritize clarity, predictability, and closure in decision-making."
                  : "Perceivers value flexibility and openness, enjoying spontaneity and the freedom to change course. They are very adaptable and open-minded individuals. They excel in improvisation and seizing opportunities, preferring a flexible and relaxed approach to decision-making."}
              </p>
            </RevealY>
          </div>
        </div>
      </SlideRight>
    </div>
  );
};

export default Cards;
