import { Link, useParams } from "react-router-dom";
// import * as React from "react";
import "./index.scss";
import Layout from "../../../components/layout";
import { useLocation } from "react-router-dom";
import { personalityTypes } from "../../../utils/data";
import ScoreCard from "../../../components/ScoreCard";
// import { FaSpinner } from "react-icons/fa";

const Results = () => {
  const { personality } = useParams();
  const location = useLocation();
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

  return (
    <Layout>
      <div className="resultsPage">
        {/* {isLoading ? (
          <div className="loading">
            <FaSpinner className="spinner" />
          </div>
        ) : ( */}
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
        {/* )} */}
      </div>
    </Layout>
  );
};

export default Results;
