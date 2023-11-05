import { Link } from "react-router-dom";
import "./index.scss";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero">
      <div className="quote">
        <h1>
          “Your personality is the only permanent thing in your, ultimately,
          temporary life…that’s all the more reason to cherish it.”
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
  );
};

export default Hero;
