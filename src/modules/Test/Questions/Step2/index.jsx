/* eslint-disable react/prop-types */
import QuestionComponent2 from "../../QuestionComponent2";
import { siQuestions } from "../questions";
import "../../index.scss";
import React from "react";

const Step2 = ({ setSIScores, siScores, setStep, answered }) => {
  const arr = Array(siQuestions.length - 1).fill(false);
  const trueArr = Array(siQuestions.length).fill(true);
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
      {siQuestions?.map((q, index) => (
        <QuestionComponent2
          question={q}
          key={index}
          setSIScores={setSIScores}
          siScores={siScores}
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
          onClick={() => setStep((prev) => prev + 1)}
          type="button"
          className={`btnYellow ${
            Object.values(siScores).length < 10 ? "disabledButton" : ""
          }`}
          disabled={Object.values(siScores).length < 10}
        >
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default Step2;
