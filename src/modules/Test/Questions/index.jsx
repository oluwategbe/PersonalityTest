import * as React from "react";
// import QuestionComponent from "../QuestionComponent";
import "./index.scss";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4/index";

const Questions = () => {
  const [eiScores, setEIScores] = React.useState({});
  const [siScores, setSIScores] = React.useState({});
  const [tfScores, setTFScores] = React.useState({});
  const [jpScores, setJPScores] = React.useState({});
  const [step, setStep] = React.useState(1);
  // console.log(eiScores);
  // console.log(siScores);
  // console.log(tfScores);
  // console.log(jpScores);

  const handleSubmit = () => {
    const totalEIScore = Object.values(eiScores).reduce(
      (acc, score) => acc + score,
      0
    );
    const totalSIScore = Object.values(siScores).reduce(
      (acc, score) => acc + score,
      0
    );
    const totalTFScore = Object.values(tfScores).reduce(
      (acc, score) => acc + score,
      0
    );
    const totalJPScore = Object.values(jpScores).reduce(
      (acc, score) => acc + score,
      0
    );
    console.log(Object.values(eiScores).length);
    console.log("Total EI Scores:", totalEIScore);
    console.log("Total SI Scores:", totalSIScore);
    console.log("Total TF Scores:", totalTFScore);
    console.log("Total JP Scores:", totalJPScore);
  };

  return (
    <div className="questions">
      {step === 1 && (
        <Step1
          setEIScores={setEIScores}
          eiScores={eiScores}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <Step2
          setSIScores={setSIScores}
          siScores={siScores}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <Step3
          setTFScores={setTFScores}
          tfScores={tfScores}
          setStep={setStep}
        />
      )}
      {step === 4 && (
        <Step4
          setJPScores={setJPScores}
          jpScores={jpScores}
          setStep={setStep}
          handleSubmit={handleSubmit}
        />
      )}
      {/* <div className={""}>
        {step === 4 && (
          <>
            <button
              onClick={() => setStep((prev) => prev - 1)}
              type="button"
              className="btnWhite"
            >
              Previous
            </button>
            <button
              // type="submit"
              onClick={handleSubmit}
              className="btnYellow"
            >
              Submit
            </button>
          </>
        )}
      </div> */}
    </div>
  );
};

export default Questions;
