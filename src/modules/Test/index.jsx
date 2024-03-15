import "./index.scss";
import * as React from "react";
import Layout from "./../../components/layout/index";
import { GrTest } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import Questions from "./Questions";
import { ThemeContext } from "../../context";
import { TestRevealY, RevealY, Reveal } from "../../utils/animatedText";

const Test = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Layout>
      <div className={`test ${theme === "dark" ? "dark" : ""}`}>
        <div className="testhero">
          <Reveal style={{ width: "100%", height: "100%" }} once={true}>
            <div className="tHero">
              <div className="text">
                <RevealY delay={0.5} once={true}>
                  <h1>Free Personality Test</h1>
                </RevealY>
                <RevealY delay={1} once={true}>
                  <h2>Based off the Myers-Briggs Type Indicator</h2>
                </RevealY>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="cards">
          {/* <div className={`card ${theme === "dark" ? "dark" : ""}`}> */}
          <TestRevealY
            delay={0.5}
            once={true}
            className={`card ${theme === "dark" ? "dark" : ""}`}
          >
            <GrTest />
            <h2>Complete the test</h2>
            <p>Answer the questions honestly to find out your personality.</p>
          </TestRevealY>
          {/* </div> */}
          {/* <div className={`card ${theme === "dark" ? "dark" : ""}`}> */}
          <TestRevealY
            delay={1}
            once={true}
            className={`card ${theme === "dark" ? "dark" : ""}`}
          >
            <TbReportAnalytics />
            <h2>View Detailed results</h2>
            <p>
              Complete the test and view your personality based on your provided
              answers.
            </p>
          </TestRevealY>
          {/* </div> */}
          {/* <div className={`card ${theme === "dark" ? "dark" : ""}`}> */}
          <TestRevealY
            delay={1.5}
            once={true}
            className={`card ${theme === "dark" ? "dark" : ""}`}
          >
            <FaPeopleGroup />
            <h2>Check out other personalities</h2>
            <p>
              Explore the summary, rarity, careers and known celebrities of
              other personalities.
            </p>
          </TestRevealY>
          {/* </div> */}
        </div>
        <Questions />
      </div>
    </Layout>
  );
};

export default Test;
