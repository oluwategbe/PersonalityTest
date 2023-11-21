import { useParams } from "react-router-dom";
import "./index.scss";
import Layout from "../../../components/layout";
import { useLocation } from "react-router-dom";
import { personalityTypes } from "../../../utils/data";

const Results = () => {
  const { personality } = useParams();
  const location = useLocation();
  const { totalEIScore, totalSIScore, totalTFScore, totalJPScore } =
    location.state || {};

  console.log(totalEIScore, totalSIScore, totalTFScore, totalJPScore);
  console.log(personality);
  return (
    <Layout>
      <div className="resultsPage">
        <div className="modal">
          <h2>Your Personality Type is:</h2>
          <h1>{personality}</h1>
          {personalityTypes?.map((p, i) => (
            <div key={i}>
              <img src={p?.male} alt={p?.personality} key={i} />
              <img src={p?.female} alt={p?.personality} key={i} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Results;
