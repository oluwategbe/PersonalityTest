import { Link, useParams } from "react-router-dom";
import "./index.scss";
import Layout from "../../../components/layout";
import { useLocation } from "react-router-dom";
import { personalityTypes } from "../../../utils/data";
import ScoreCard from "../../../components/ScoreCard";

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
  console.log(gender);
  return (
    <Layout>
      <div className="resultsPage">
        <div className="modal">
          <div className="title">
            <h2>Your Personality Type is:</h2>
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
                leftTitle="Intuitive"
                leftScore={intuitionScore}
                rightTitle="Observant"
                rightScore={100 - intuitionScore}
              />
              <ScoreCard
                title="Nature"
                desc="This trait describes how you make decisions and cope with emotions, people's values and the needs of others"
                leftTitle="Feeling"
                leftScore={feelingScore}
                rightTitle="Thinking"
                rightScore={100 - feelingScore}
              />
              <ScoreCard
                title="Tactics"
                desc="This trait reflects your approach to work, planning, organization and decision-making"
                leftTitle="Prospecting"
                leftScore={perceivingScore}
                rightTitle="Judging"
                rightScore={100 - perceivingScore}
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
  );
};

export default Results;
