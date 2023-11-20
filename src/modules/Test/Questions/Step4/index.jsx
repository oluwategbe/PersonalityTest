/* eslint-disable react/prop-types */
import QuestionComponent4 from "../../QuestionComponent4";
import { jpQuestions } from "../questions";
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

  return (
    <div>
      {jpQuestions?.map((q, index) => (
        <QuestionComponent4
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
        <button
          onClick={() => setStep((prev) => prev - 1)}
          type="button"
          className="btnBlack"
        >
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
