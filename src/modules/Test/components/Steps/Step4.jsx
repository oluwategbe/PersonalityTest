/* eslint-disable react/prop-types */
import JPQuestions from "../QuestionComponents/JPQuestions";
import { jpQuestions } from "../../Questions/questions";
import "../../index.scss";
import React from "react";
import swal from "sweetalert";

const Step4 = ({ setJPScores, jpScores, setStep, answered, all }) => {
  const arr = Array(jpQuestions.length - 1).fill(false);
  const trueArr = Array(jpQuestions.length).fill(true);
  const [answeredQuestions, setAnsweredQuestions] = React.useState(
    answered === 7 ? trueArr : [true, ...arr]
  );
  const handleAnswer = (index) => {
    const updatedQuestions = answeredQuestions.map((answered, i) =>
      i === index ? true : answered
    );
    setAnsweredQuestions(updatedQuestions);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
    const webPartElement = document.getElementsByClassName(`topContainer`);
    if (webPartElement) {
      webPartElement[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNext = () => {
    if (all !== 21) {
      swal({
        text: "Please fill the other sections",
        icon: "warning",
        dangerMode: true,
      });
      return;
    }
    setStep((prev) => prev + 1);
    const webPartElement = document.getElementsByClassName(`topContainer`);
    if (webPartElement) {
      webPartElement[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
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
          onClick={handleNext}
          type="button"
          className={`btnYellow ${
            Object.values(jpScores).length < 7 ? "disabledButton" : ""
          }`}
          disabled={Object.values(jpScores).length < 7}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step4;
