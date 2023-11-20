/* eslint-disable react/prop-types */
import QuestionComponent3 from "../../QuestionComponent3";
import { tfQuestions } from "../questions";
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

  return (
    <div>
      {tfQuestions?.map((q, index) => (
        <QuestionComponent3
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
