import * as React from "react";
import "./index.scss";
import Step1 from "../components/Steps/Step1";
import Step2 from "../components/Steps/Step2";
import Step3 from "../components/Steps/Step3";
import Step4 from "../components/Steps/Step4";
import Step5 from "../components/Steps/Step5";
import { getPersonality } from "../../../utils/getPersonality";
import { useNavigate } from "react-router-dom";
import Steps from "./Steps";
import { ThemeContext } from "../../../context";

const Questions = () => {
  const [eiScores, setEIScores] = React.useState({});
  const [siScores, setSIScores] = React.useState({});
  const [tfScores, setTFScores] = React.useState({});
  const [jpScores, setJPScores] = React.useState({});
  const [gender, setGender] = React.useState("Male");
  const [step, setStep] = React.useState(1);

  const { theme } = React.useContext(ThemeContext);

  const navigate = useNavigate();
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
    const personality = getPersonality(
      totalEIScore,
      totalSIScore,
      totalTFScore,
      totalJPScore
    );
    navigate(`/results/${personality}`, {
      state: {
        totalEIScore,
        totalSIScore,
        totalTFScore,
        totalJPScore,
        gender,
      },
    });
  };

  return (
    <div className={`questions ${theme === "dark" ? "dark" : ""}`}>
      <div className="topContainer">
        <Steps step={step} setStep={setStep} />
      </div>
      <div className="steps">
        {step === 1 && (
          <Step1
            setEIScores={setEIScores}
            eiScores={eiScores}
            setStep={setStep}
            answered={Object.values(eiScores).length}
          />
        )}
        {step === 2 && (
          <Step2
            setSIScores={setSIScores}
            siScores={siScores}
            setStep={setStep}
            answered={Object.values(siScores).length}
          />
        )}
        {step === 3 && (
          <Step3
            setTFScores={setTFScores}
            tfScores={tfScores}
            setStep={setStep}
            answered={Object.values(tfScores).length}
          />
        )}
        {step === 4 && (
          <Step4
            setJPScores={setJPScores}
            jpScores={jpScores}
            setStep={setStep}
            answered={Object.values(jpScores).length}
            all={
              Object.values(eiScores).length +
              Object.values(siScores).length +
              Object.values(tfScores).length
            }
            handleSubmit={handleSubmit}
          />
        )}
        {step === 5 && (
          <Step5
            gender={gender}
            setGender={setGender}
            setStep={setStep}
            answered={Object.values(jpScores).length}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Questions;
