import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./index.scss";
import * as React from "react";
import { minidata } from "../../utils/data";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

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

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">Personality App</div>
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
    </div>
  );
};

export default Navbar;
