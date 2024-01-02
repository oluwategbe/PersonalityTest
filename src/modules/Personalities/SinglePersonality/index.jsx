import { useParams } from "react-router-dom";
import "./index.scss";
import { personalityData } from "./../../../utils/data";
import Layout from "./../../../components/layout/index";
import Cards from "./Cards";
import { PiCodesandboxLogo, PiBoundingBoxLight } from "react-icons/pi";
import Carouse from "./Carousel";

const SinglePersonality = () => {
  const { personality } = useParams();
  const data = personalityData?.find((p) => p?.personality === personality);
  const groupColors = [
    { group: "Analysts", color: "#e7dfea" },
    { group: "Diplomats", color: "#d4eec8" },
    { group: "Sentinels", color: "#c5f2f4" },
    { group: "Explorers", color: "#fff9d9" },
  ];
  const factColor = groupColors?.find((g) => g?.group === data?.group);

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
        <div
          className="fact"
          style={{ borderLeft: `5px solid ${factColor?.color}` }}
        >
          <p>{data?.fact}</p>
        </div>
        <div className="cards">
          <Cards personality={personality} />
        </div>
        <div className="rarity">
          <h1>Rarity</h1>
          <div>
            <h2>{data?.rarity?.text}</h2>
            <h4>{data?.rarity?.desc}</h4>
          </div>
        </div>
        <div className="strengths">
          <h1>Strengths and Weaknesses</h1>
          <div className="section">
            <div className="strength each">
              <h2>Strengths</h2>
              {data?.strengths?.map((s, id) => (
                <div className="strength-child" key={id}>
                  <PiCodesandboxLogo />
                  <div className="point">
                    <h3>{s?.title}</h3>
                    <p>{s?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="weakness each">
              <h2>Weaknesses</h2>
              {data?.weaknesses?.map((s, id) => (
                <div className="strength-child" key={id}>
                  <PiBoundingBoxLight />
                  <div className="point">
                    <h3>{s?.title}</h3>
                    <p>{s?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="fact"
          style={{ borderLeft: `5px solid ${factColor?.color}` }}
        >
          <p>{data?.fact2}</p>
        </div>
        <div className="careers">
          <h1>
            {data?.personality} ({data?.title}) Careers
          </h1>
          <p>{data?.career?.summary}</p>
          <img src={data?.career?.pic} alt="Careers" />
          <div>
            <h3>Popular {data?.title} careers:</h3>
            <ul>
              {data?.career?.jobs?.map((job, i) => (
                <li key={i}>{job?.job}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="celebs">
          <h1>{data?.title}s you may know</h1>
          <Carouse data={data?.celebrities} />
        </div>
      </div>
    </Layout>
  );
};

export default SinglePersonality;
