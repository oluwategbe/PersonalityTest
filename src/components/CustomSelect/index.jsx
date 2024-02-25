/* eslint-disable react/prop-types */
import * as React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./index.css";
import { ThemeContext } from "../../context";

const CustomSelect = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const selectRef = React.useRef(null);
  const { theme } = React.useContext(ThemeContext);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };
  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`custom-select ${theme === "dark" ? "dark" : ""}`}
      ref={selectRef}
    >
      <label htmlFor="gender">Please select your gender:</label>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <FaChevronDown className="arrow-icon" />
      </div>
      {isOpen && (
        <ul className="options">
          {options?.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
