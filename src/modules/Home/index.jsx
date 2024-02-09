import { chartOptions } from "../../utils/data";
import Layout from "./../../components/layout/index";
import Hero from "./components/Hero";
import "./index.scss";
import ReactECharts from "echarts-for-react";
import { FaSquare } from "react-icons/fa";

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
            personality types based on four pairs of contrasting preferences:
            <ul>
              <li>
                <FaSquare />
                <span>Extraversion</span> vs <span>Introversion</span>
              </li>
              <li>
                <FaSquare />
                <span>Sensing</span> vs <span>Intuition</span>
              </li>
              <li>
                <FaSquare />
                <span>Thinking</span> vs <span>Feeling</span>
              </li>
              <li>
                <FaSquare />
                <span>Judging</span> vs <span>Perceiving</span>
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
        <h3>How do you direct and receive energy</h3>
        <section className="section eiSection">
          <div className="bLeft">
            <h2>Extroversion</h2>
            <div className="box">E</div>
            <p>
              Extraverts are fueled by social interaction and thrive in lively
              environments. Known for their expressive and outgoing nature, they
              enjoy group activities and easily exhibit enthusiasm, contrasting
              with introverts&apos; preference for solitude.
            </p>
          </div>
          <h2>or</h2>
          <div className="bRight">
            <div className="box">I</div>
            <h2>Introversion</h2>
            <p>
              Introverts thrive in quiet or small group settings, valuing
              introspection and meaningful social connections. They recharge
              alone and may feel drained by excessive socializing.
            </p>
          </div>
        </section>
        <h3>How do you obtain information</h3>
        <section className="section snSection">
          <div className="bLeft">
            <h2>Sensing</h2>
            <div className="box">S</div>
            <p>
              Sensors rely on their senses for information, emphasizing
              practicality and hands-on learning. They prioritize reality and
              facts, enjoying tangible experiences and focusing on details. They
              are very pragmatic and down-to-earth.
            </p>
          </div>
          <h2>or</h2>
          <div className="bRight">
            <div className="box">N</div>
            <h2>Intuition</h2>
            <p>
              Intuitives value theories, patterns, and future prospects,
              embracing creativity and imagination. They explore abstract
              concepts and potential outcomes with curiosity and
              open-mindedness, prioritizing future potentials over present
              stability.
            </p>
          </div>
        </section>
        <h3>How do you make decisions and cope with emotions</h3>
        <section className="section tfSection">
          <div className="bLeft">
            <h2>Thinking</h2>
            <div className="box">T</div>
            <p>
              Thinkers rely on logic and reason, prioritizing objective data and
              facts. They maintain consistency and logic in their
              decision-making, and often masking their emotions. They emphasize
              objectivity and rationality, giving precedence to logic over
              emotions.
            </p>
          </div>
          <h2>or</h2>
          <div className="bRight">
            <div className="box">F</div>
            <h2>Feeling</h2>
            <p>
              Feelers prioritize decisions based on emotions and values,
              considering how their choices impact people. They are sensitive
              and empathetic, prioritizing social relationships, cooperation and
              emotional well-being.
            </p>
          </div>
        </section>
        <h3>How do you plan, organize and make decisions</h3>
        <section className="section jpSection">
          <div className="bLeft">
            <h2>Judging</h2>
            <div className="box">J</div>
            <p>
              Judgers value structure and organization, preferring planned
              outcomes and disliking surprises. They are decisive, thorough, and
              highly organized individuals who prioritize clarity,
              predictability, and closure in decision-making.
            </p>
          </div>
          <h2>or</h2>
          <div className="bRight">
            <div className="box">P</div>
            <h2>Perceiving</h2>
            <p>
              Perceivers value flexibility and openness, enjoying spontaneity
              and the freedom to change course. They are very adaptable and
              open-minded individuals. They excel in improvisation and seizing
              opportunities, preferring a flexible and relaxed approach to
              decision-making.
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
