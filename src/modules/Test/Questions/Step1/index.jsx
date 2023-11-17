/* eslint-disable react/prop-types */
import QuestionComponent from "../../QuestionComponent";
import { eiQuestions } from "../questions";

const Step1 = ({ setEIScores, eiScores, setStep }) => {
  return (
    <div>
      {eiQuestions?.map((q) => (
        <QuestionComponent
          question={q}
          key={q?.title}
          setEIScores={setEIScores}
          eiScores={eiScores}
          setStep={setStep}
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
