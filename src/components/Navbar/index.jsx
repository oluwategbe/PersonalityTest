import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./index.scss";
import * as React from "react";
import { minidata } from "../../utils/data";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./../../context/index";
import { AnimatedWord, NavRevealY, RevealY } from "../../utils/animatedText";
import { motion } from "framer-motion";

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
        <AnimatedWord once={true} text="PersonalitySphere" className="logo" />
      </Link>
      <div className="navItems">
        <ul>
          <NavRevealY once={true} style={{ width: "fit-content" }} delay={1}>
            <Link to="/">Home</Link>
          </NavRevealY>
          <RevealY
            once={true}
            style={{ width: "fit-content", padding: "2px 0" }}
            delay={1.2}
          >
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
          </RevealY>
          <NavRevealY once={true} style={{ width: "fit-content" }} delay={1.4}>
            <Link to="/test">Take the test</Link>
          </NavRevealY>
        </ul>
      </div>
      <div style={{ overflow: "hidden" }}>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="themeBox"
        >
          <FaSun onClick={() => handleClick("light")} />
          <div className={`ball ${theme === "dark" ? "moveRight" : ""}`} />
          <FaMoon onClick={() => handleClick("dark")} />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
