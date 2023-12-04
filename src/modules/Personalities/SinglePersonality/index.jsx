import { useParams } from "react-router-dom";
import "./index.scss";
import { personalityData } from "./../../../utils/data";
import Layout from "./../../../components/layout/index";
import Cards from "./Cards";

const SinglePersonality = () => {
  const { personality } = useParams();
  const data = personalityData?.find((p) => p?.personality === personality);
  return (
    <Layout>
      <div className="singlePersonality">
        <div className="singlePersonalityHero">
          <div className="heroText">
            <h1>{personality}</h1>
            <div className="line"></div>
            <h3 className="title">The {data?.title}</h3>
          </div>
          <div className="pic">
            <img src={data?.pic} alt={data?.title} />
          </div>
        </div>
        <div className="summary">
          <div className="header">
            <h2>{personality} in a nutshell</h2>
            <div className="line"></div>
          </div>
          <p>{data?.long_desc}</p>
        </div>
        <div className="cards">
          <Cards personality={personality} />
        </div>
      </div>
    </Layout>
  );
};

export default SinglePersonality;
