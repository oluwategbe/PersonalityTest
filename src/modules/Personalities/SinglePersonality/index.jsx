import { useParams } from "react-router-dom";
import "./index.scss";
import { personalityData } from "./../../../utils/data";
import Layout from "./../../../components/layout/index";
import Cards from "./Cards";
import { MdCircle } from "react-icons/md";
import Carouse from "./Carousel";
import ReactECharts from "echarts-for-react";

const SinglePersonality = () => {
  const { personality } = useParams();
  const data = personalityData?.find((p) => p?.personality === personality);
  const groupColors = [
    { group: "Analysts", color: "#7b3894" },
    { group: "Diplomats", color: "#d4eec8" },
    { group: "Sentinels", color: "#c5f2f4" },
    { group: "Explorers", color: "#fff9d9" },
  ];
  const rarity = data?.rarity?.value;
  const factColor = groupColors?.find((g) => g?.group === data?.group);
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "left",
      orient: "vertical",
      textStyle: {
        fontSize: "16",
        color: "#222222",
      },
    },
    series: [
      {
        name: "Rarity",
        type: "pie",
        radius: ["30%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderWidth: 0,
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "14",
            fontWeight: "bold",
          },
        },
        color: ["#0059ff", "#ffb3b3"],
        data: [
          { value: rarity, name: data?.title },
          { value: 100 - rarity, name: "Other personalities" },
        ],
      },
    ],
  };
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
          <h3>Summary</h3>
          <div className="header">
            <h1>{personality} in a nutshell</h1>
            <div className="line"></div>
          </div>
          <p>{data?.long_desc}</p>
          <div
            className="fact"
            style={{ borderLeft: `7px solid ${factColor?.color}` }}
          >
            <p>{data?.fact}</p>
          </div>
        </div>
        <div className="cards">
          <Cards personality={personality} />
        </div>
        <div className="rarity">
          <div className="header">
            <h1>How frequent is {data?.personality}</h1>
            <div className="line"></div>
          </div>
          <h3>Rarity</h3>
          <div className="rarityText">
            <div>
              <h2>{data?.rarity?.text}</h2>
              <h4>{data?.rarity?.desc}</h4>
            </div>
            <div className="chart">
              <ReactECharts
                option={option}
                style={{ height: "400px", width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div className="strengths">
          <h1>
            <span style={{ color: "#05abdd" }}>Strengths</span> and{" "}
            <span style={{ color: "#f02005" }}>Weaknesses</span>
            <div className="line"></div>
          </h1>
          <div className="section">
            <div className="strength each">
              <h3>Strengths</h3>
              {data?.strengths?.map((s, id) => (
                <div className="strength-child" key={id}>
                  <MdCircle />
                  <div className="point">
                    <h4>{s?.title}</h4>
                    <p>{s?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="weakness each">
              <h3>Weaknesses</h3>
              {data?.weaknesses?.map((s, id) => (
                <div className="strength-child" key={id}>
                  <MdCircle />
                  <div className="point">
                    <h4>{s?.title}</h4>
                    <p>{s?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="fact"
            style={{ borderLeft: `7px solid ${factColor?.color}` }}
          >
            <p>{data?.fact2}</p>
          </div>
        </div>
        <div className="careers">
          <div className="header">
            <h1>
              {data?.personality} ({data?.title}) Careers
            </h1>
            <div className="line"></div>
          </div>
          <h3>Careers</h3>
          <p>{data?.career?.summary}</p>
          <img src={data?.career?.pic} alt="Careers" />
          <div className="opportunities">
            <h4>Popular {data?.personality} jobs:</h4>
            <ul>
              {data?.career?.jobs?.map((job, i) => (
                <li key={i}>{job?.job}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="celebs">
          <h3>Celebrities</h3>
          <div className="header">
            <h1>{data?.title}s you may know</h1>
            <div className="line"></div>
          </div>
          <Carouse data={data?.celebrities} />
        </div>
      </div>
    </Layout>
  );
};

export default SinglePersonality;
