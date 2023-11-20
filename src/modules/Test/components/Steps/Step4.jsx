/* eslint-disable react/prop-types */
import JPQuestions from "../QuestionComponents/JPQuestions";
import { jpQuestions } from "../../Questions/questions";
import "../../index.scss";
import React from "react";

const Step4 = ({ setJPScores, jpScores, setStep, answered, handleSubmit }) => {
  const arr = Array(jpQuestions.length - 1).fill(false);
  const trueArr = Array(jpQuestions.length).fill(true);
  const [answeredQuestions, setAnsweredQuestions] = React.useState(
    answered === 10 ? trueArr : [true, ...arr]
  );

  const handleAnswer = (index) => {
    const updatedQuestions = answeredQuestions.map((answered, i) =>
      i === index ? true : answered
    );
    setAnsweredQuestions(updatedQuestions);
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
      {jpQuestions?.map((q, index) => (
        <JPQuestions
          question={q}
          key={index}
          setJPScores={setJPScores}
          jpScores={jpScores}
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
          onClick={handleSubmit}
          type="button"
          className={`btnYellow ${
            Object.values(jpScores).length < 10 ? "disabledButton" : ""
          }`}
          disabled={Object.values(jpScores).length < 10}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
