import * as React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { chartOptions } from "../../utils/data";
import Layout from "./../../components/layout/index";
import Hero from "./components/Hero";
import "./index.scss";
import ReactECharts from "echarts-for-react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";
import {
  Reveal,
  RevealLeft,
  RevealRight,
  RevealY,
  ScaleX,
  ShakeButton,
  StaggerChild,
} from "../../utils/animatedText";

const Home = () => {
  const { theme } = React.useContext(ThemeContext);
  const option = {
    title: {
      text: "Rarity Chart for the 16 personalities (over 100%)",
      left: "center",
      top: "top",
      textStyle: {
        fontSize: 18,
        color: theme === "light" ? "#4e4e4e" : "#a7a7a7",
      },
    },
    legend: {
      left: "left",
      top: "center",
      animation: true,
      orient: "vertical",
      textStyle: {
        fontSize: "12",
        color: theme === "light" ? "#4e4e4e" : "#a7a7a7",
      },
    },
    ...chartOptions,
  };

  return (
    <Layout>
      <Hero />
      <div className={`homepage ${theme === "dark" ? "dark" : ""}`}>
        <div className="briefSummary">
          <RevealY>
            <h1>How it works</h1>
          </RevealY>
          <Reveal>
            <p>
              The Myers-Briggs Personality Theory, developed by Isabel Briggs
              Myers and Katharine Cook Briggs, categorizes individuals into 16
              personality types based on four pairs of contrasting preferences:
              <br />
            </p>
          </Reveal>
          <ul>
            <StaggerChild delay={1}>
              <li>
                <div />
                <span>Extraversion</span> vs <span>Introversion</span>
              </li>
            </StaggerChild>
            <StaggerChild delay={1.5}>
              <li>
                <div />
                <span>Sensing</span> vs <span>Intuition</span>
              </li>
            </StaggerChild>
            <StaggerChild delay={2}>
              <li>
                <div />
                <span>Thinking</span> vs <span>Feeling</span>
              </li>
            </StaggerChild>
            <StaggerChild delay={2.5}>
              <li>
                <div />
                <span>Judging</span> vs <span>Perceiving</span>
              </li>
            </StaggerChild>
          </ul>
          <Reveal>
            <p>
              By answering questions in the test, you can find out which
              personality type you are. This helps you learn more about
              yourself, like your strengths and weaknesses, what kind of jobs
              might suit you, and even which famous people share your
              personality type.
            </p>
          </Reveal>
          <Reveal style={{ overflow: "visible" }}>
            <ShakeButton delay={1} style={{ width: "fit-content" }}>
              <Link to={"/test"}>
                <button>
                  Take the test
                  <AiOutlineDoubleRight />
                </button>
              </Link>
            </ShakeButton>
          </Reveal>
        </div>
        <div className="right">
          <div className="classification">
            <RevealY>
              <h1>What you&apos;ll learn</h1>
            </RevealY>
            <ul>
              <StaggerChild delay={1}>
                <li>
                  <div />
                  <p>Your personality type.</p>
                </li>
              </StaggerChild>
              <StaggerChild delay={1.5}>
                <li>
                  <div />
                  <p>Career opportunities centered around your personality.</p>
                </li>
              </StaggerChild>
              <StaggerChild delay={2}>
                <li>
                  <div />
                  <p>How rare your personality type is.</p>
                </li>
              </StaggerChild>
              <StaggerChild delay={2.5}>
                <li>
                  <div />
                  <p>
                    Strengths and weakenesses associated with your personality.
                  </p>
                </li>
              </StaggerChild>
              <StaggerChild delay={3}>
                <li>
                  <div />
                  <p>Celebrities with the same personality as you.</p>
                </li>
              </StaggerChild>
            </ul>
          </div>
          <div className="toNote">
            <Reveal>
              <p>
                <span>NOTE:</span> This is not necessarily a test because there
                are no correct or incorrect responses, and it doesn&apos;t
                reveal every aspect of an individual.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      <div className={`takeTestSection ${theme === "dark" ? "dark" : ""}`}>
        <ScaleX>
          <div className="homeQuote">
            <RevealY delay={1}>
              <p>
                “It&apos;s beauty that captures your attention; personality that
                captures your heart.”
              </p>
            </RevealY>
            <RevealY delay={1.5}>
              <h5>— Oscar Wilde</h5>
            </RevealY>
          </div>
        </ScaleX>
      </div>
      <div className={`breakDown ${theme === "dark" ? "dark" : ""}`}>
        <RevealY once={true} className={{ marginBottom: "4rem" }}>
          <h1>The Myers - Briggs preference pairs</h1>
        </RevealY>
        <RevealY once={true}>
          <h3>How you direct and receive energy</h3>
        </RevealY>
        <section className="section eiSection">
          <RevealLeft
            className="bLeft"
            bg={theme === "dark" ? "#c27e00" : "#ffa600"}
          >
            <h2>Extroversion</h2>
            <div className="box">E</div>
            <p>
              Extroverts are fueled by social interaction and thrive in lively
              environments. Known for their expressive and outgoing nature, they
              enjoy group activities and easily exhibit enthusiasm.
            </p>
          </RevealLeft>
          <h2>or</h2>
          <RevealRight
            className="bRight"
            bg={theme === "dark" ? "#0e4fb1" : "#73abff"}
          >
            <div className="box">I</div>
            <h2>Introversion</h2>
            <p>
              Introverts thrive in quiet or small group settings, valuing
              introspection and meaningful social connections. They recharge
              alone and may feel drained by excessive socializing.
            </p>
          </RevealRight>
        </section>
        <RevealY delay={0.5} once={true}>
          <h3>How you obtain information</h3>
        </RevealY>
        <section className="section snSection">
          <RevealLeft
            className="bLeft"
            bg={theme === "dark" ? "#137e13" : "#70ff70"}
          >
            <h2>Sensing</h2>
            <div className="box">S</div>
            <p>
              Sensors rely on their senses for information, emphasizing
              practicality and hands-on learning. They prioritize reality and
              facts, enjoying tangible experiences and focusing on details. They
              are very pragmatic and down-to-earth.
            </p>
          </RevealLeft>
          <h2>or</h2>
          <RevealRight
            className="bRight"
            bg={theme === "dark" ? "#888800" : "#c7c700"}
          >
            <div className="box">N</div>
            <h2>Intuition</h2>
            <p>
              Intuitives value theories, patterns, and future prospects,
              embracing creativity and imagination. They explore abstract
              concepts and potential outcomes with curiosity and
              open-mindedness, prioritizing future potentials over present
              stability.
            </p>
          </RevealRight>
        </section>
        <RevealY delay={0.5} once={true}>
          <h3>How you make decisions and cope with emotions</h3>
        </RevealY>
        <section className="section tfSection">
          <RevealLeft
            className="bLeft"
            bg={theme === "dark" ? "#2d2fa7" : "#4144ff"}
          >
            <h2>Thinking</h2>
            <div className="box">T</div>
            <p>
              Thinkers rely on logic and reason, prioritizing objective data and
              facts. They maintain consistency and logic in their
              decision-making, and often masking their emotions. They emphasize
              objectivity and rationality, giving precedence to logic over
              emotions.
            </p>
          </RevealLeft>
          <h2>or</h2>
          <RevealRight
            className="bRight"
            bg={theme === "dark" ? "#970e37" : "#ff145a"}
          >
            <div className="box">F</div>
            <h2>Feeling</h2>
            <p>
              Feelers prioritize decisions based on emotions and values,
              considering how their choices impact people. They are sensitive
              and empathetic, prioritizing social relationships, cooperation and
              emotional well-being.
            </p>
          </RevealRight>
        </section>
        <RevealY delay={0.5} once={true}>
          <h3>How you plan, organize and make decisions</h3>
        </RevealY>
        <section className="section jpSection">
          <RevealLeft
            className="bLeft"
            bg={theme === "dark" ? "#53379e" : "#895fff"}
          >
            <h2>Judging</h2>
            <div className="box">J</div>
            <p>
              Judgers value structure and organization, preferring planned
              outcomes and disliking surprises. They are decisive, thorough, and
              highly organized individuals who prioritize clarity,
              predictability, and closure in decision-making.
            </p>
          </RevealLeft>
          <h2>or</h2>
          <RevealRight
            className="bRight"
            bg={theme === "dark" ? "#1a581a" : "#009400"}
          >
            <div className="box">P</div>
            <h2>Perceiving</h2>
            <p>
              Perceivers value flexibility and openness, enjoying spontaneity
              and the freedom to change course. They are very adaptable and
              open-minded individuals. They excel in improvisation and seizing
              opportunities, preferring a flexible and relaxed approach to
              decision-making.
            </p>
          </RevealRight>
        </section>
      </div>
      <div className={`takeTestSection2 ${theme === "dark" ? "dark" : ""}`}>
        <ScaleX>
          <div className="homeQuote">
            <RevealY delay={1}>
              <p>
                “You don&apos;t have to be someone else to achieve greatness in
                life. Celebrate your personality and uniqueness, because that’s
                what makes a legend”
              </p>
            </RevealY>
            <RevealY delay={1.5}>
              <h5>— Anonymous</h5>
            </RevealY>
          </div>
        </ScaleX>
      </div>
      <div className={`totalRarity ${theme === "dark" ? "dark" : ""}`}>
        <RevealY once={true}>
          <h1>Rarity</h1>
        </RevealY>
        <Reveal once={true}>
          <p>
            The rarest personality type is{" "}
            <Link to={"/personalities/INFJ"}>
              <span>INFJ (Advocate)</span>
            </Link>
            , while the most common type is{" "}
            <Link to={"/personalities/ISTJ"}>
              <span>ISTJ (Logistician)</span>
            </Link>{" "}
          </p>
        </Reveal>
        <Reveal style={{ width: "100%" }} delay={1} once={true}>
          <ReactECharts
            option={option}
            style={{ height: "400px", width: "100%" }}
          />
        </Reveal>
      </div>
      <div className={`takeTestSection3 ${theme === "dark" ? "dark" : ""}`}>
        <Reveal once={true} delay={0}>
          <div className="takeTest">
            <RevealY delay={0.5} once={true}>
              <h3>Wanna discover your personality? Get Started Now</h3>
            </RevealY>{" "}
            <ShakeButton
              delay={0.8}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Link to={"/test"}>
                <button>
                  Take the test
                  <AiOutlineDoubleRight />
                </button>
              </Link>
            </ShakeButton>
          </div>
        </Reveal>
      </div>
    </Layout>
  );
};

export default Home;
