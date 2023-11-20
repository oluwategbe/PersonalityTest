/* eslint-disable react/prop-types */
import * as React from "react";
import "../Questions/index.scss";

const QuestionComponent3 = ({
  question,
  setTFScores,
  tfScores,
  isActive,
  index,
  setActiveIndex,
}) => {
  const options = [100, 83, 66, 50, 33, 16, 0];
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [selectedClass, setSelectedClass] = React.useState(null);

  const handleClick = (value, title, classValue) => {
    setTFScores({ ...tfScores, [title]: value });
    setSelectedOption(value);
    setSelectedClass(classValue);
    setActiveIndex(index + 1);
  };

  return (
    <div className={`question ${isActive ? "active" : "blurred"}`}>
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
                  tfScores[question?.title] === value
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

export default QuestionComponent3;
