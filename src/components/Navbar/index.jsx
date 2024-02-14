import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./index.scss";
import * as React from "react";
import { minidata } from "../../utils/data";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./../../context/index";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector(".navDrop");
      if (dropdown && !dropdown.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (title) => {
    setTheme(title);
  };

  return (
    <div className={`navbar ${theme === "dark" ? "dark" : ""}`}>
      <Link to="/">
        <div className="logo">PersonalitySphere</div>
      </Link>
      <div className="navItems">
        <ul>
          <Link to="/">Home</Link>
          <div className="navDrop" onClick={(e) => e.stopPropagation()}>
            <Link to="/personalities">Personalities</Link>
            {open ? (
              <IoIosArrowUp onClick={() => setOpen(!open)} />
            ) : (
              <IoIosArrowDown onClick={() => setOpen(!open)} />
            )}
            {open && (
              <div className="dropdown">
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
            )}
          </div>
          <Link to="/test">Take the test</Link>
        </ul>
      </div>
      <div className="themeBox">
        <FaSun onClick={() => handleClick("light")} />
        <div className={`ball ${theme === "dark" ? "moveRight" : ""}`} />
        <FaMoon onClick={() => handleClick("dark")} />
      </div>
    </div>
  );
};

export default Navbar;
