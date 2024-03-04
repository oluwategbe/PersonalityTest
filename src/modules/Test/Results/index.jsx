import * as React from "react";
import { Link, useParams } from "react-router-dom";
// import * as React from "react";
import "./index.scss";
import Layout from "../../../components/layout";
import { useLocation } from "react-router-dom";
import { personalityTypes } from "../../../utils/data";
import ScoreCard from "../../../components/ScoreCard";
import { ThemeContext } from "../../../context";
import { motion } from "framer-motion";

const Results = () => {
  const { personality } = useParams();
  const location = useLocation();
  const { theme } = React.useContext(ThemeContext);
  const { totalEIScore, totalSIScore, totalTFScore, totalJPScore, gender } =
    location.state || {};
  const personalityData = personalityTypes.find(
    (p) => p?.personality === personality
  );
  const extrovertScore = (totalEIScore / 10).toFixed(0);
  const intuitionScore = (totalSIScore / 10).toFixed(0);
  const feelingScore = (totalTFScore / 10).toFixed(0);
  const perceivingScore = (totalJPScore / 10).toFixed(0);

  // const [isLoading, setIsLoading] = React.useState(true);

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);
  const [progress, setProgress] = React.useState(0);
  const [showExit, setShowExit] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setShowExit(true);
    }, 400000);

    return () => clearTimeout(timer);
  }, []);

  const variants = {
    initial: {
      scaleY: 1,
    },
    animate: {
      scaleY: 0,
      transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { scaleX: 0, scaleY: 0, transition: { delay: 5 } },
  };
  return (
    <>
      <div
        className="resultWait"
        // variants={variants}
        // initial="initial"
        // animate="animate"
        // exit="exit"
      >
        <div className="calculationText">Calculating your result...</div>
        <div
          className="progressBar"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
      {showExit && (
        <Layout>
          <div className={`resultsPage ${theme === "dark" ? "dark" : ""}`}>
            <div className="modal">
              <div className="title">
                <h2>Congratulations! Your Personality Type is:</h2>
                <h1>
                  {personality} - {personalityData?.title}
                </h1>
              </div>
              <div className="modal-bottom">
                <div className="imgBox">
                  <img
                    src={
                      gender?.toLowerCase() === "male"
                        ? personalityData?.male
                        : personalityData?.female
                    }
                    alt="image"
                  />
                </div>
                <div className="scores">
                  <ScoreCard
                    title="Energy"
                    desc="This trait describes how you gain energy, your preference in interacting with people and the environment"
                    leftTitle="Extraverted"
                    leftScore={extrovertScore || 50}
                    rightTitle="Introverted"
                    rightScore={100 - extrovertScore}
                  />
                  <ScoreCard
                    title="Mind"
                    desc="This trait describes your preferred method of obtaining information from the environment"
                    leftTitle="Sensing"
                    leftScore={100 - intuitionScore}
                    rightTitle="Intuitive"
                    rightScore={intuitionScore}
                  />
                  <ScoreCard
                    title="Nature"
                    desc="This trait describes how you make decisions and cope with emotions, people's values and the needs of others"
                    leftTitle="Thinking"
                    leftScore={100 - feelingScore}
                    rightTitle="Feeling"
                    rightScore={feelingScore}
                  />
                  <ScoreCard
                    title="Tactics"
                    desc="This trait reflects your approach to work, planning, organization and decision-making"
                    leftTitle="Judging"
                    leftScore={100 - perceivingScore}
                    rightTitle="Perceiving"
                    rightScore={perceivingScore}
                  />
                </div>
              </div>
              <div className="more">
                <h2>Wanna learn more about your Personality?</h2>
                <Link to={`/personalities/${personality}`}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Results;
