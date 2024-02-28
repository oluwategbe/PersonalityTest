import { Link } from "react-router-dom";
import "./index.scss";
import * as React from "react";
import { minidata } from "../../utils/data";
import { ThemeContext } from "../../context";
import { NavRevealY, Reveal, RevealY } from "../../utils/animatedText";

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={`footer ${theme === "dark" ? "dark" : ""}`}>
      <div className="foot">
        <div className="heading">
          {/* <AnimatedWord text="PersonalitySphere" className="logo" /> */}
          {/* <AnimatedParagraph text="Discover your personality with this interactive application. Uncover insights into your unique traits and preferences based on the renowned 16 personalities by MBTI. Embark on a journey of self-discovery and explore the fascinating world of personality types. Your personalized results await - start your exploration now!" /> */}
          <Reveal>
            <h1>PersonalitySphere</h1>
          </Reveal>
          <RevealY>
            <p>
              Discover your personality with this interactive application.
              Uncover insights into your unique traits and preferences based on
              the renowned 16 personalities by MBTI. Embark on a journey of
              self-discovery and explore the fascinating world of personality
              types. Your personalized results await - start your exploration
              now!
            </p>
          </RevealY>
        </div>
        <div className="quickLinks">
          <Reveal>
            <h2>References</h2>
          </Reveal>
          <NavRevealY delay={0.5}>
            <Link target="_blank" to="https://www.16personalities.com/">
              16 Personalities
            </Link>
          </NavRevealY>
          <NavRevealY delay={0.8}>
            <Link
              target="_blank"
              to="https://www.truity.com/blog/page/16-personality-types-myers-briggs"
            >
              Truity
            </Link>
          </NavRevealY>
          <NavRevealY delay={1}>
            <Link target="_blank" to="https://www.themyersbriggs.com/">
              The Myers-Briggs Company
            </Link>
          </NavRevealY>
        </div>
        <div className="quickLinks">
          <Reveal>
            <h2>Links</h2>
          </Reveal>
          <NavRevealY delay={0.5}>
            <Link to="/">Home</Link>
          </NavRevealY>
          <NavRevealY delay={0.8}>
            <Link to="/personalities">Personalities</Link>
          </NavRevealY>
          <NavRevealY delay={1}>
            <Link to="/test">Take the test</Link>
          </NavRevealY>
        </div>
        <div className="footerLinks">
          <Reveal>
            <h2>Personalities</h2>
          </Reveal>
          <div className="personLink">
            {minidata.map((d, i) => (
              <RevealY key={i} delay={0.1 * i}>
                <React.Fragment>
                  <Link to={`/personalities/${d?.personality}`}>
                    <p className={(i + 1) % 4 !== 0 ? "withLine" : ""}>
                      {d?.personality}
                    </p>
                  </Link>
                </React.Fragment>
              </RevealY>
            ))}
          </div>
        </div>
      </div>
      <div className="copy">© 2024 Oluwategbe Pelumi. All rights reserved.</div>
    </div>
  );
};

export default Footer;
