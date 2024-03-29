import * as React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./index.scss";
import Layout from "../../../components/layout";
import { useLocation } from "react-router-dom";
import { personalities, personalityTypes } from "../../../utils/data";
import ScoreCard from "../../../components/ScoreCard";
import { ThemeContext } from "../../../context";
import ResultWait from "./ResultWait";
import {
  RevealY,
  ShakeButton,
  SlideLeft,
  SlideRight,
} from "../../../utils/animatedText";

const Results = () => {
  const { personality } = useParams();
  const { theme } = React.useContext(ThemeContext);
  const location = useLocation();
  const [showExit, setShowExit] = React.useState(false);
  if (!personalities.includes(personality)) {
    return <Navigate to="/not-found" replace />;
  }
  const { totalEIScore, totalSIScore, totalTFScore, totalJPScore, gender } =
    location.state || {};
  const personalityData = personalityTypes.find(
    (p) => p?.personality?.toLowerCase() === personality?.toLowerCase()
  );
  const extrovertScore = (totalEIScore / 10).toFixed(0);
  const intuitionScore = (totalSIScore / 10).toFixed(0);
  const feelingScore = (totalTFScore / 10).toFixed(0);
  const perceivingScore = (totalJPScore / 10).toFixed(0);

  const extrovertPercent = ((extrovertScore / 70) * 100).toFixed(0);
  const intuitionPercent = ((intuitionScore / 70) * 100).toFixed(0);
  const feelingPercent = ((feelingScore / 70) * 100).toFixed(0);
  const perceivingPercent = ((perceivingScore / 70) * 100).toFixed(0);

  return (
    <>
      <div className={`${theme === "dark" ? "dark" : ""}`}>
        <ResultWait showExit={showExit} setShowExit={setShowExit} />
      </div>
      {showExit && (
        <Layout>
          <div className={`resultsPage ${theme === "dark" ? "dark" : ""}`}>
            <div className="modal">
              <div className="title">
                <RevealY once={true}>
                  <h2>Congratulations! Your Personality Type is:</h2>
                </RevealY>
                <RevealY delay={1.5} once={true}>
                  <h1>
                    {personality} - {personalityData?.title}
                  </h1>
                </RevealY>
              </div>
              <div className="modal-bottom">
                <div className="imgBox">
                  <SlideLeft width="100%" delay={1.6}>
                    <img
                      src={
                        gender?.toLowerCase() === "male"
                          ? personalityData?.male
                          : personalityData?.female
                      }
                      alt="image"
                    />
                  </SlideLeft>
                </div>
                <div className="scores">
                  <SlideLeft delay={1.7} width="100%">
                    <ScoreCard
                      title="Energy"
                      desc="This trait describes how you gain energy, your preference in interacting with people and the environment"
                      leftTitle="Extroverted"
                      leftScore={extrovertPercent || 50}
                      rightTitle="Introverted"
                      rightScore={100 - extrovertPercent}
                    />
                  </SlideLeft>
                  <SlideRight delay={2.0} width="100%">
                    <ScoreCard
                      title="Mind"
                      desc="This trait describes your preferred method of obtaining information from the environment"
                      leftTitle="Sensing"
                      leftScore={100 - intuitionPercent}
                      rightTitle="Intuitive"
                      rightScore={intuitionPercent}
                    />
                  </SlideRight>
                  <SlideLeft delay={2.3} width="100%">
                    <ScoreCard
                      title="Nature"
                      desc="This trait describes how you make decisions and cope with emotions, people's values and the needs of others"
                      leftTitle="Thinking"
                      leftScore={100 - feelingPercent}
                      rightTitle="Feeling"
                      rightScore={feelingPercent}
                    />
                  </SlideLeft>
                  <SlideRight delay={2.5} width="100%">
                    <ScoreCard
                      title="Tactics"
                      desc="This trait reflects your approach to work, planning, organization and decision-making"
                      leftTitle="Judging"
                      leftScore={100 - perceivingPercent}
                      rightTitle="Perceiving"
                      rightScore={perceivingPercent}
                    />
                  </SlideRight>
                </div>
              </div>
              <RevealY delay={2.7} once={true}>
                <div className="more">
                  <h2>Wanna learn more about your Personality?</h2>
                  <ShakeButton
                    delay={2.8}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Link to={`/personalities/${personality}`}>
                      <button className={`${theme === "dark" ? "dark" : ""}`}>
                        Read More
                      </button>
                    </Link>
                  </ShakeButton>
                </div>
              </RevealY>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Results;
