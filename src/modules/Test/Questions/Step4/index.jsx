/* eslint-disable react/prop-types */
import QuestionComponent4 from "../../QuestionComponent4";
import { jpQuestions } from "../questions";
import "../../index.scss";

const Step4 = ({ setJPScores, jpScores, setStep, handleSubmit }) => {
  return (
    <div>
      {jpQuestions?.map((q) => (
        <QuestionComponent4
          question={q}
          key={q?.title}
          setJPScores={setJPScores}
          jpScores={jpScores}
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
