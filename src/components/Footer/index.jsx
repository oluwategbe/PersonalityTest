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
          <Reveal once={true}>
            <h1>PersonalitySphere</h1>
          </Reveal>
          <RevealY once={true}>
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
        <div className="footerLinks">
          <div className="quickLinks">
            <Reveal once={true}>
              <h2>References</h2>
            </Reveal>
            <NavRevealY delay={0.5} once={true}>
              <Link target="_blank" to="https://www.16personalities.com/">
                16 Personalities
              </Link>
            </NavRevealY>
            <NavRevealY delay={0.8} once={true}>
              <Link
                target="_blank"
                to="https://www.truity.com/blog/page/16-personality-types-myers-briggs"
              >
                Truity
              </Link>
            </NavRevealY>
            <NavRevealY delay={1} once={true}>
              <Link target="_blank" to="https://www.themyersbriggs.com/">
                The Myers-Briggs Company
              </Link>
            </NavRevealY>
          </div>
          <div className="quickLinks">
            <Reveal once={true}>
              <h2>Links</h2>
            </Reveal>
            <NavRevealY delay={0.5} once={true}>
              <Link to="/">Home</Link>
            </NavRevealY>
            <NavRevealY delay={0.8} once={true}>
              <Link to="/personalities">Personalities</Link>
            </NavRevealY>
            <NavRevealY delay={1} once={true}>
              <Link to="/test">Take the test</Link>
            </NavRevealY>
          </div>
          <div className="footerPLinks">
            <Reveal once={true}>
              <h2>Personalities</h2>
            </Reveal>
            <div className="personLink">
              {minidata.map((d, i) => (
                <React.Fragment key={i}>
                  <RevealY delay={0.1 * i} once={true}>
                    <Link to={`/personalities/${d?.personality}`}>
                      <p className={(i + 1) % 4 !== 0 ? "withLine" : ""}>
                        {d?.personality}
                      </p>
                    </Link>
                  </RevealY>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="copy">© 2024 Oluwategbe Pelumi. All rights reserved.</div>
    </div>
  );
};

export default Footer;
