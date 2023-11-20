/* eslint-disable react/prop-types */
import React from "react";
import QuestionComponent from "../../QuestionComponent";
import { eiQuestions } from "../questions";

const Step1 = ({ setEIScores, eiScores, setStep, answered }) => {
  const arr = Array(eiQuestions.length - 1).fill(false);
  const trueArr = Array(eiQuestions.length).fill(true);
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
      {eiQuestions?.map((q, index) => (
        <QuestionComponent
          question={q}
          key={index}
          setEIScores={setEIScores}
          eiScores={eiScores}
          isActive={answeredQuestions[index]}
          index={index}
          setActiveIndex={handleAnswer}
        />
      ))}
      <div className="buttonContainer">
        <button
          onClick={() => setStep((prev) => prev + 1)}
          type="button"
          className={`btnYellow half ${
            Object.values(eiScores).length < 10 ? "disabledButton" : ""
          }`}
          disabled={Object.values(eiScores).length < 10}
        >
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default Step1;
