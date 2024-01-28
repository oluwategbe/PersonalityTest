import { Link } from "react-router-dom";
import "./index.scss";
import * as React from "react";
import { minidata } from "../../utils/data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot">
        <div className="heading">
          <h1>Personality App</h1>
          <p>
            Discover your essence with our interactive personality test. Uncover
            insights into your unique traits and preferences based on the
            renowned 16 personalities by MBTI. Embark on a journey of
            self-discovery and explore the fascinating world of personality
            types. Your personalized results await - start your exploration now!
          </p>
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
