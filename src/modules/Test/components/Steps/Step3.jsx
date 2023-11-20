/* eslint-disable react/prop-types */
import TFQuestions from "../QuestionComponents/TFQuestions";
import { tfQuestions } from "../../Questions/questions";
import "../../index.scss";
import React from "react";

const Step3 = ({ setTFScores, tfScores, setStep, answered }) => {
  const arr = Array(tfQuestions.length - 1).fill(false);
  const trueArr = Array(tfQuestions.length).fill(true);
  const [answeredQuestions, setAnsweredQuestions] = React.useState(
    answered === 10 ? trueArr : [true, ...arr]
  );

  const handleAnswer = (index) => {
    const updatedQuestions = answeredQuestions.map((answered, i) =>
      i === index ? true : answered
    );
    setAnsweredQuestions(updatedQuestions);
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
    const webPartElement = document.getElementsByClassName(`quest-0`);
    if (webPartElement) {
      webPartElement[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
    const webPartElement = document.getElementsByClassName(`quest-0`);
    if (webPartElement) {
      webPartElement[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {tfQuestions?.map((q, index) => (
        <TFQuestions
          question={q}
          key={index}
          setTFScores={setTFScores}
          tfScores={tfScores}
          isActive={answeredQuestions[index]}
          index={index}
          setActiveIndex={handleAnswer}
        />
      ))}
      <div className="buttonContainer">
        <button onClick={handlePrevious} type="button" className="btnBlack">
          Previous
        </button>
        <button
          onClick={handleNext}
          type="button"
          className={`btnYellow ${
            Object.values(tfScores).length < 10 ? "disabledButton" : ""
          }`}
          disabled={Object.values(tfScores).length < 10}
        >
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default Step3;
