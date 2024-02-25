import "./index.scss";
import * as React from "react";
import Layout from "./../../components/layout/index";
import { GrTest } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import Questions from "./Questions";
import { ThemeContext } from "../../context";

const Test = () => {
  const { theme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  return (
    <Layout>
      <div className={`test ${theme === "dark" ? "dark" : ""}`}>
        <div className="testhero">
          <div className="tHero">
            <div className="text">
              <h1>Free Personality Test</h1>
              <h2>Based off the Myers-Briggs Type Indicator</h2>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className={`card ${theme === "dark" ? "dark" : ""}`}>
            <GrTest />
            <h2>Complete the test</h2>
            <p>Answer the questions honestly to find out your personality.</p>
          </div>
          <div className={`card ${theme === "dark" ? "dark" : ""}`}>
            <TbReportAnalytics />
            <h2>View Detailed results</h2>
            <p>
              Complete the test and view your personality based on your provided
              answers.
            </p>
          </div>
          <div className={`card ${theme === "dark" ? "dark" : ""}`}>
            <FaPeopleGroup />
            <h2>Check out other personalities</h2>
            <p>
              Explore the summary, rarity, careers and known celebrities of
              other personalities.
            </p>
          </div>
        </div>
        <Questions />
      </div>
    </Layout>
  );
};

export default Test;
