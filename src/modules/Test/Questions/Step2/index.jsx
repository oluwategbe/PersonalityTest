/* eslint-disable react/prop-types */
import QuestionComponent2 from "../../QuestionComponent2";
import { siQuestions } from "../questions";
import "../../index.scss";

const Step2 = ({ setSIScores, siScores, setStep }) => {
  return (
    <div>
      {siQuestions?.map((q) => (
        <QuestionComponent2
          question={q}
          key={q?.title}
          setSIScores={setSIScores}
          siScores={siScores}
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
