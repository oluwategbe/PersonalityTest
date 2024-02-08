import { chartOptions } from "../../utils/data";
import Layout from "./../../components/layout/index";
import Hero from "./components/Hero";
import "./index.scss";
import ReactECharts from "echarts-for-react";
import { FaRegSquare } from "react-icons/fa";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="homepage">
        <div className="briefSummary">
          <h1>How it works</h1>
          <p>
            The Myers-Briggs Personality Theory, developed by Isabel Briggs
            Myers and Katharine Cook Briggs, categorizes individuals into 16
            personality types based on four pairs of contrasting preferences:{" "}
            <ul>
              <li>
                <FaRegSquare />
                <span style={{ color: "#c68000" }}>Extraversion</span> vs{" "}
                <span style={{ color: "#7a7aff" }}>Introversion</span>,{" "}
              </li>
              <li>
                <FaRegSquare />
                <span style={{ color: "#5ff95f" }}>Sensing</span> vs{" "}
                <span style={{ color: "#d4b800" }}>Intuition</span>,{" "}
              </li>
              <li>
                <FaRegSquare />
                <span style={{ color: "#ff1313" }}>Thinking</span> vs{" "}
                <span style={{ color: "#ff35ff" }}>Feeling</span>
              </li>
              <li>
                <FaRegSquare />
                <span style={{ color: "#00a400" }}>Judging</span> vs{" "}
                <span style={{ color: "blue" }}>Perceiving</span>.
              </li>
            </ul>{" "}
            By answering questions in the test, you can find out which
            personality type you are. This helps you learn more about yourself,
            like your strengths and weaknesses, what kind of jobs might suit
            you, and even which famous people share your personality type.
          </p>
          {/* <img src="/public/images/personality3.jpg" alt="" /> */}
        </div>
        <div className="right">
          <div className="classification">
            <h1>Classification</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              ducimus officia id labore maxime, asperiores voluptate temporibus
              tempore aliquid quaerat ipsam eum natus et possimus saepe qui
              deserunt quidem? Atque.
            </p>
          </div>
          <div className="toNote">
            <p>
              NOTE: This is not necessarily a test because there are no correct
              or incorrect responses, and it doesn&apos;t reveal every aspect of
              an individual.
            </p>
          </div>
        </div>
      </div>
      <div className="breakDown">
        <h1>Breakdown</h1>
        <section className="section eiSection">
          <div className="bLeft">
            <h2>Extroversion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              error cumque ipsum eaque corrupti hic quos tempora unde quaerat
              quam.
            </p>
          </div>
          <div className="bRight">
            <h2>Introversion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              error cumque ipsum eaque corrupti hic quos tempora unde quaerat
              quam.
            </p>
          </div>
        </section>
        <section className="section snSection">
          <div className="bLeft">
            <h2>Sensing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              error cumque ipsum eaque corrupti hic quos tempora unde quaerat
              quam.
            </p>
          </div>
          <div className="bRight">
            <h2>Intuition</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              error cumque ipsum eaque corrupti hic quos tempora unde quaerat
              quam.
            </p>
          </div>
        </section>
        <section className="section tfSection">
          <div className="bLeft">
            <h2>Thinking</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              error cumque ipsum eaque corrupti hic quos tempora unde quaerat
              quam.
            </p>
          </div>
          <div className="bRight">
            <h2>Feeling</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              error cumque ipsum eaque corrupti hic quos tempora unde quaerat
              quam.
            </p>
          </div>
        </section>
        <section className="section jpSection">
          <div className="bLeft">
            <h2>Judging</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              error cumque ipsum eaque corrupti hic quos tempora unde quaerat
              quam.
            </p>
          </div>
          <div className="bRight">
            <h2>Perceiving</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              error cumque ipsum eaque corrupti hic quos tempora unde quaerat
              quam.
            </p>
          </div>
        </section>
      </div>
      <div className="totalRarity">
        <h1>Rarity</h1>
        <p>
          The rarest personality type is <span>INFJ (Advocate)</span>, while the
          most common type is <span>ISTJ (Logistician)</span>{" "}
        </p>
        <ReactECharts
          option={chartOptions}
          style={{ height: "400px", width: "100%" }}
        />
      </div>
    </Layout>
  );
};

export default Home;
