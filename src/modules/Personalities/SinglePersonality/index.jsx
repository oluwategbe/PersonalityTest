import * as React from "react";
import { Navigate, useParams } from "react-router-dom";
import "./index.scss";
import { personalities, personalityData } from "./../../../utils/data";
import Layout from "./../../../components/layout/index";
import Cards from "./Cards";
import { MdCircle, MdSquare } from "react-icons/md";
// import Carouse from "./Carousel";
import ReactECharts from "echarts-for-react";
import { ThemeContext } from "../../../context";
import {
  RevealY,
  ScaleX,
  Reveal,
  SlideRight,
} from "../../../utils/animatedText";
import Carousel from "../../../components/Carousel";

const SinglePersonality = () => {
  const { personality } = useParams();
  const { theme } = React.useContext(ThemeContext);
  if (!personalities.includes(personality)) {
    return <Navigate to="/not-found" replace />;
  }
  const data = personalityData?.find((p) => p?.personality === personality);
  const groupColors = [
    { group: "Analysts", color: "#7b3894" },
    { group: "Diplomats", color: "#d4eec8" },
    { group: "Sentinels", color: "#c5f2f4" },
    { group: "Explorers", color: "#ffed85" },
  ];
  const rarity = data?.rarity?.value;
  const factColor = groupColors?.find((g) => g?.group === data?.group);
  const screenWidth = window.innerWidth;
  let fontSize = 12;
  if (screenWidth >= 1600) {
    fontSize = 24;
  } else if (screenWidth >= 1400) {
    fontSize = 22;
  } else if (screenWidth >= 998) {
    fontSize = 20;
  } else if (screenWidth >= 768) {
    fontSize = 18;
  } else if (screenWidth >= 560) {
    fontSize = 16;
  } else if (screenWidth >= 400) {
    fontSize = 14;
  } else if (screenWidth < 400) {
    fontSize = 12;
  }

  let legendFontSize = 12;
  if (screenWidth >= 1600) {
    legendFontSize = 24;
  } else if (screenWidth >= 1400) {
    legendFontSize = 22;
  } else if (screenWidth >= 998) {
    legendFontSize = 20;
  } else if (screenWidth >= 768) {
    legendFontSize = 18;
  } else if (screenWidth >= 560) {
    legendFontSize = 16;
  } else if (screenWidth >= 400) {
    legendFontSize = 14;
  } else if (screenWidth < 400) {
    legendFontSize = 12;
  }

  let emphasisFontSize = "14";
  if (screenWidth >= 1600) {
    emphasisFontSize = "20px";
  } else if (screenWidth >= 1400) {
    emphasisFontSize = "18px";
  } else if (screenWidth >= 998) {
    emphasisFontSize = "16px";
  } else if (screenWidth >= 768) {
    emphasisFontSize = "14px";
  } else if (screenWidth >= 560) {
    emphasisFontSize = "12px";
  } else if (screenWidth >= 400) {
    emphasisFontSize = "10px";
  } else if (screenWidth < 400) {
    emphasisFontSize = "8px";
  }

  let chartHeight = "400";
  if (screenWidth >= 1600) {
    chartHeight = "700";
  } else if (screenWidth >= 1400) {
    chartHeight = "600";
  } else if (screenWidth >= 998) {
    chartHeight = "400";
  } else if (screenWidth >= 768) {
    chartHeight = "350";
  } else if (screenWidth >= 560) {
    chartHeight = "300";
  } else if (screenWidth <= 400) {
    chartHeight = "250";
  }

  const option = {
    title: {
      text: `Rarity Chart for ${data?.personality} personality (over 100%)`,
      left: "center",
      top: "bottom",
      textStyle: {
        fontSize: fontSize,
        color: theme === "light" ? "#4e4e4e" : "#a7a7a7",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "left",
      top: "top",
      animation: true,
      orient: "vertical",
      itemWidth: 15,
      itemHeight: 15,
      padding: 2,
      itemGap: 5,
      textStyle: {
        fontSize: legendFontSize,
        color: theme === "light" ? "#4e4e4e" : "#a7a7a7",
      },
    },
    series: [
      {
        name: "Rarity",
        type: "pie",
        radius: ["30%", "80%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: emphasisFontSize,
            fontWeight: "bold",
          },
          itemStyle: {
            borderRadius: 5,
            borderWidth: 0,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
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
          <Reveal style={{ width: "100%", height: "100%" }} once={true}>
            <div className="sHero">
              <div className="heroText">
                <RevealY delay={1} once={true} style={{ width: "fit-content" }}>
                  <h1>{personality}</h1>
                </RevealY>
                <RevealY
                  delay={1.5}
                  once={true}
                  style={{ width: "fit-content" }}
                >
                  <h2 className="title">The {data?.title}</h2>
                </RevealY>
              </div>
              <div className="pic">
                <SlideRight width="100%" delay={2}>
                  <img src={data?.pic} alt={data?.title} />
                </SlideRight>
              </div>
            </div>
          </Reveal>
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
          <RevealY once={true} style={{ zIndex: "1" }}>
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
                  style={{
                    height: `${chartHeight}px`,
                    width: "100%",
                  }}
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
          <ScaleX style={{ marginTop: "1.5rem" }}>
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
          <Reveal once={true}>
            <img src={data?.career?.pic} alt="Careers" />
          </Reveal>
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
