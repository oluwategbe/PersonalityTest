import "./index.scss";
import Layout from "./../../components/layout/index";
import { GrTest } from "react-icons/gr";
import Questions from "./Questions";

const Test = () => {
  return (
    <Layout>
      <div className="test">
        <div className="testhero">
          <div className="text">
            <h1>Free Personality Test</h1>
            <h2>Based off the Myers-Briggs Type Indicator</h2>
          </div>
          <div className="cards">
            <div className="card">
              <GrTest />
              <h2>Complete the test</h2>
              <p>Answer the questions honestly to find out your personality.</p>
            </div>
            <div className="card">
              <GrTest />
              <h2>View Detailed results</h2>
              <p>
                Complete the test and view your personality based on your
                provided answers.
              </p>
            </div>
            <div className="card">
              <GrTest />
              <h2>Check out other personalities</h2>
              <p>
                Explore the summary, rarity, careers and known celebrities of
                other personalities.
              </p>
            </div>
          </div>
        </div>
        <Questions />
      </div>
    </Layout>
  );
};

export default Test;
