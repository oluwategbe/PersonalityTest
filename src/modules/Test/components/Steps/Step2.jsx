/* eslint-disable react/prop-types */
import SIQuestions from "../QuestionComponents/SIQuestions";
import { siQuestions } from "../../Questions/questions";
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

  const handleNext = () => {
    setStep((prev) => prev + 1);
    const webPartElement = document.getElementsByClassName(`topContainer`);
    if (webPartElement) {
      webPartElement[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handlePrevious = () => {
    setStep((prev) => prev - 1);
    const webPartElement = document.getElementsByClassName(`topContainer`);
    if (webPartElement) {
      webPartElement[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {siQuestions?.map((q, index) => (
        <SIQuestions
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
        <button onClick={handlePrevious} type="button" className="btnBlack">
          Previous
        </button>
        <button
          onClick={handleNext}
          type="button"
          className={`btnYellow ${
            Object.values(siScores).length < 10 ? "disabledButton" : ""
          }`}
          disabled={Object.values(siScores).length < 10}
        >
          Next{" "}
        </button>
      </div>
    </>
  );
};

export default Step2;
