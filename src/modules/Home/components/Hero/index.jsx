import * as React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { ThemeContext } from "../../../../context";

const Hero = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={`hero ${theme === "dark" ? "dark" : ""}`}>
      <div className="heroBox">
        <div className="quote">
          <h1>
            “Your personality is the only permanent thing in your, ultimately,
            temporary life…that&apos;s all the more reason to cherish it.”
          </h1>
          <h5>— Isabella Koldras</h5>
        </div>
        <Link to={"/test"}>
          <button>
            Take the test
            <AiOutlineDoubleRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
