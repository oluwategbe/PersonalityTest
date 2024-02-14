import { Link } from "react-router-dom";
import "./index.scss";
import * as React from "react";
import { minidata } from "../../utils/data";
import { ThemeContext } from "../../context";

const Footer = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={`footer ${theme === "dark" ? "dark" : ""}`}>
      <div className="foot">
        <div className="heading">
          <h1>PersonalitySphere</h1>
          <p>
            Discover your personality with this interactive application. Uncover
            insights into your unique traits and preferences based on the
            renowned 16 personalities by MBTI. Embark on a journey of
            self-discovery and explore the fascinating world of personality
            types. Your personalized results await - start your exploration now!
          </p>
        </div>
        <div className="quickLinks">
          <h2>References</h2>
          <Link target="_blank" to="https://www.16personalities.com/">
            16 Personalities
          </Link>
          <Link
            target="_blank"
            to="https://www.truity.com/blog/page/16-personality-types-myers-briggs"
          >
            Truity
          </Link>
          <Link target="_blank" to="https://www.themyersbriggs.com/">
            The Myers-Briggs Company
          </Link>
        </div>
        <div className="quickLinks">
          <h2>Links</h2>
          <Link to="/">Home</Link>
          <Link to="/personalities">Personalities</Link>
          <Link to="/test">Take the test</Link>
        </div>
        <div className="footerLinks">
          <h2>Personalities</h2>
          <div>
            {minidata.map((d, i) => (
              <React.Fragment key={i}>
                <Link to={`/personalities/${d?.personality}`}>
                  <p className={(i + 1) % 4 !== 0 ? "withLine" : ""}>
                    {d?.personality}
                  </p>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="copy">© 2024 Oluwategbe Pelumi. All rights reserved.</div>
    </div>
  );
};

export default Footer;
