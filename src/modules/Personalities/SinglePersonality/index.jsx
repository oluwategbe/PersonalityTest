import * as React from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import { personalityData } from "./../../../utils/data";
import Layout from "./../../../components/layout/index";
import Cards from "./Cards";
import { MdCircle, MdSquare } from "react-icons/md";
// import Carouse from "./Carousel";
import ReactECharts from "echarts-for-react";
import { ThemeContext } from "../../../context";
import {
  RevealY,
  SingleScaleX,
  ScaleXY,
  ScaleX,
  Reveal,
} from "../../../utils/animatedText";
import Carousel from "../../../components/Carousel";

const SinglePersonality = () => {
  const { personality } = useParams();
  const { theme } = React.useContext(ThemeContext);
  const data = personalityData?.find((p) => p?.personality === personality);
  const groupColors = [
    { group: "Analysts", color: "#7b3894" },
    { group: "Diplomats", color: "#d4eec8" },
    { group: "Sentinels", color: "#c5f2f4" },
    { group: "Explorers", color: "#ffed85" },
  ];
  const rarity = data?.rarity?.value;
  const factColor = groupColors?.find((g) => g?.group === data?.group);
  const option = {
    title: {
      text: `Rarity Chart for ${data?.personality} personality (over 100%)`,
      left: "center",
      top: "top",
      textStyle: {
        fontSize: 20,
        color: theme === "light" ? "#4e4e4e" : "#a7a7a7",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "left",
      top: "center",
      orient: "vertical",
      textStyle: {
        fontSize: "16",
        color: theme === "light" ? "#4e4e4e" : "#a7a7a7",
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
      <div className={`singlePersonality ${theme === "dark" ? "dark" : ""}`}>
        <div className="singlePersonalityHero">
          <SingleScaleX style={{ width: "100%" }} once={true}>
            <div className="sHero">
              <div className="heroText">
                <RevealY delay={1} once={true}>
                  <h1>{personality}</h1>
                </RevealY>
                <RevealY delay={1.5} once={true}>
                  <h2 className="title">The {data?.title}</h2>
                </RevealY>
              </div>
              <div className="pic">
                <ScaleXY delay={2} once={true}>
                  <img src={data?.pic} alt={data?.title} />
                </ScaleXY>
              </div>
            </div>
          </SingleScaleX>
        </div>
        <div className="summary">
          <RevealY delay={0.5} once={true}>
            <div className="header">
              <h1>{personality} in a nutshell</h1>
              <div className="line"></div>
            </div>
          </RevealY>
          <RevealY delay={0.5} once={true}>
            <p>{data?.long_desc}</p>
          </RevealY>
          <ScaleX style={{ marginTop: "2rem" }}>
            <div
              className="fact"
              style={{ borderLeft: `7px solid ${factColor?.color}` }}
            >
              <RevealY delay={1.5}>
                <p>{data?.fact}</p>
              </RevealY>
            </div>
          </ScaleX>
        </div>
        <div className={`cardSection ${theme === "dark" ? "dark" : ""}`}>
          <div className="cards">
            <Cards personality={personality} />
          </div>
        </div>
        <div className="rarity">
          <RevealY once={true}>
            <div className="header">
              <h1>How frequent is {data?.personality}</h1>
              <div className="line"></div>
            </div>
          </RevealY>
          <h3 className={`${theme === "dark" ? "dark" : ""}`}>Rarity</h3>
          <div className="rarityText">
            <div>
              <RevealY delay={0.5} once={true}>
                <h2>{data?.rarity?.text}</h2>
              </RevealY>
              <RevealY delay={1} once={true}>
                <h4>{data?.rarity?.desc}</h4>
              </RevealY>
            </div>
            <div className="chart">
              <Reveal delay={1.5} once={true}>
                <ReactECharts
                  option={option}
                  style={{ height: "400px", width: "100%" }}
                />
              </Reveal>
            </div>
          </div>
        </div>
        <div className="strengths">
          <RevealY once={true}>
            <h1>
              <span style={{ color: "#05abdd" }}>Strengths</span> and{" "}
              <span style={{ color: "#f02005" }}>Weaknesses</span>
              <div className="line"></div>
            </h1>
          </RevealY>
          <div className="section">
            <div className={`strength each ${theme === "dark" ? "dark" : ""}`}>
              <h3>Strengths</h3>
              {data?.strengths?.map((s, i) => (
                <RevealY delay={i * 0.3} key={i} once={true}>
                  <div className="strength-child">
                    <MdCircle />
                    <div className="point">
                      <h4>{s?.title}</h4>
                      <p>{s?.desc}</p>
                    </div>
                  </div>
                </RevealY>
              ))}
            </div>
            <div className={`weakness each ${theme === "dark" ? "dark" : ""}`}>
              <h3>Weaknesses</h3>
              {data?.weaknesses?.map((s, i) => (
                <RevealY delay={i * 0.4} key={i} once={true}>
                  <div className="strength-child">
                    <MdCircle />
                    <div className="point">
                      <h4>{s?.title}</h4>
                      <p>{s?.desc}</p>
                    </div>
                  </div>
                </RevealY>
              ))}
            </div>
          </div>
          <ScaleX style={{ marginTop: "2rem" }}>
            <div
              className="fact"
              style={{ borderLeft: `7px solid ${factColor?.color}` }}
            >
              <RevealY delay={1.5}>
                <p>{data?.fact2}</p>
              </RevealY>
            </div>
          </ScaleX>
        </div>
        <div className="careers">
          <RevealY delay={0.5} once={true}>
            <div className="header">
              <h1>
                {data?.personality} ({data?.title}) Careers
              </h1>
              <div className="line"></div>
            </div>
          </RevealY>
          {/* <h3>Careers</h3> */}
          <RevealY delay={0.5} once={true}>
            <p>{data?.career?.summary}</p>
          </RevealY>
          <ScaleX once={true}>
            <img src={data?.career?.pic} alt="Careers" />
          </ScaleX>
          <div className="opportunities">
            <RevealY once={true}>
              <h4>Popular {data?.personality} jobs:</h4>
            </RevealY>
            <ul>
              {data?.career?.jobs?.map((job, i) => (
                <RevealY key={i} delay={i * 0.25}>
                  <li>
                    <MdSquare style={{ color: `${factColor?.color}` }} />
                    {job?.job}
                  </li>
                </RevealY>
              ))}
            </ul>
          </div>
        </div>
        <div className="celebs">
          <h3>Celebrities</h3>
          <RevealY delay={0.5} once={true}>
            <div className="header">
              <h1>{data?.title}s you may know</h1>
              <div className="line"></div>
            </div>
          </RevealY>
          <Carousel data={data?.celebrities} />
        </div>
      </div>
    </Layout>
  );
};

export default SinglePersonality;
