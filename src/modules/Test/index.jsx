import "./index.scss";
import Layout from "./../../components/layout/index";
import { GrTest } from "react-icons/gr";

const Test = () => {
  return (
    <Layout>
      <div className="test">
        <div className="testhero">
          <div className="text">
            <h1>Free Personality Test</h1>
            <h2>Based of the Myers Briggs test</h2>
          </div>
          <div className="cards">
            <div className="card">
              <GrTest />
              <h2>Complete the test</h2>
              <p>Answer the questions honestly to find out your personality</p>
            </div>
            <div className="card">
              <GrTest />
              <h2>View Detailed results</h2>
              <p>Answer the questions honestly to find out your personality</p>
            </div>
            <div className="card">
              <GrTest />
              <h2>Complete the test</h2>
              <p>Answer the questions honestly to find out your personality</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Test;
