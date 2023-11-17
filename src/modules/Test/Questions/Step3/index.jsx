/* eslint-disable react/prop-types */
import QuestionComponent3 from "../../QuestionComponent3";
import { tfQuestions } from "../questions";
import "../../index.scss";

const Step3 = ({ setTFScores, tfScores, setStep }) => {
  return (
    <div>
      {tfQuestions?.map((q) => (
        <QuestionComponent3
          question={q}
          key={q?.title}
          setTFScores={setTFScores}
          tfScores={tfScores}
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
