/* eslint-disable react/prop-types */
import * as React from "react";
import "../../Questions/index.scss";

const SIQuestions = ({
  question,
  setSIScores,
  siScores,
  isActive,
  index,
  setActiveIndex,
}) => {
  const options = [100, 83, 66, 50, 33, 16, 0];
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [selectedClass, setSelectedClass] = React.useState(null);

  const handleClick = (value, title, classValue) => {
    setSIScores({ ...siScores, [title]: value });
    setSelectedOption(value);
    setSelectedClass(classValue);
    // setActiveIndex(index + 1);
    // const webPartElement = document.getElementsByClassName(`quest-${index}`);
    // if (webPartElement) {
    //   webPartElement[0].scrollIntoView({ behavior: "smooth", block: "start" });
    // }
    if (index < 9) {
      // Check if current question is not the last one
      setActiveIndex(index + 1);
      const webPartElement = document.getElementsByClassName(`quest-${index}`);
      if (webPartElement.length > 0) {
        webPartElement[0].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div
      className={`question ${isActive ? "active" : "blurred"} quest-${index}`}
    >
      <p>{question?.title}</p>
      <div className="radio-buttons">
        <label className="large">Agree</label>
        {options.map((value, i) => (
          <div
            key={i}
            className={`radio-group`}
            onClick={() => handleClick(value, question?.title, `span-${i}`)}
          >
            <label htmlFor={question?.title}>
              <input
                type="radio"
                name={question?.title}
                value={value}
                checked={selectedOption === value}
                onChange={() => {}}
              />
              <span
                className={`span-${i}  ${
                  selectedClass === `span-${i}` ||
                  siScores[question?.title] === value
                    ? "selected"
                    : ""
                }`}
              ></span>
            </label>
          </div>
        ))}
        <label className="large">Disagree</label>
      </div>
    </div>
  );
};

export default SIQuestions;
