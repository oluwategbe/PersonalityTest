import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./index.scss";
import * as React from "react";
import { minidata } from "../../utils/data";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ThemeContext } from "./../../context/index";
import {
  AnimatedWord,
  MobileNavRevealY,
  MobileNavSlideRight,
  MobileRevealY,
  NavRevealY,
  RevealY,
  ScaleY,
} from "../../utils/animatedText";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
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

  const toggleSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
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
                      <Link
                        to={`/personalities/${d?.personality}`}
                        onClick={() => setOpen(!open)}
                      >
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
      <div className="barContainer">
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="themeBox"
            onClick={toggleSwitch}
          >
            <FaSun />
            <motion.div
              layout
              transition={spring}
              className={`ball ${theme === "dark" ? "moveRight" : ""}`}
            />
            <FaMoon />
          </motion.div>
        </div>
        <div className="bars" onClick={() => setNavOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <AnimatePresence>
        {navOpen && (
          <div className="mobileNavContainer">
            <div
              className="closeNav"
              onClick={() => setNavOpen(false)}
              // onScroll={() => setNavOpen(false)}
              onTouchStart={() => setNavOpen(false)}
            ></div>
            <ScaleY className="mobileNav">
              <ul>
                <MobileNavRevealY
                  style={{ width: "fit-content" }}
                  delay={1}
                  exitDelay={0.2}
                >
                  <Link to="/">Home</Link>
                </MobileNavRevealY>
                <MobileRevealY
                  style={{
                    width: "fit-content",
                    padding: "2px 0",
                    zIndex: "999",
                  }}
                  delay={1.3}
                  exitDelay={0.4}
                >
                  <div className="navDrop" onClick={(e) => e.stopPropagation()}>
                    <Link to="/personalities">Personalities</Link>
                    {open ? (
                      <IoIosArrowUp onClick={() => setOpen(!open)} />
                    ) : (
                      <IoIosArrowDown onClick={() => setOpen(!open)} />
                    )}
                    <AnimatePresence>
                      {open && (
                        <div className="dropdown">
                          {minidata.map((d, i) => (
                            <RevealY key={i} delay={0.1 * i}>
                              <React.Fragment key={i}>
                                <Link
                                  to={`/personalities/${d?.personality}`}
                                  onClick={() => setOpen(!open)}
                                >
                                  <p
                                    className={
                                      (i + 1) % 4 !== 0 ? "withLine" : ""
                                    }
                                  >
                                    {d?.personality}
                                  </p>
                                </Link>
                              </React.Fragment>
                            </RevealY>
                          ))}
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                </MobileRevealY>
                <MobileNavRevealY
                  style={{ width: "fit-content" }}
                  delay={1.4}
                  exitDelay={0.6}
                >
                  <Link to="/test">Take the test</Link>
                </MobileNavRevealY>
              </ul>
              <MobileNavSlideRight className="cancel" delay={1.5}>
                <div onClick={() => setNavOpen(false)}>
                  <IoIosCloseCircleOutline />
                </div>
              </MobileNavSlideRight>
            </ScaleY>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
