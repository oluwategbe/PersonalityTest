import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Personality App</div>
      <div className="navItems">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/test">Take the test</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
