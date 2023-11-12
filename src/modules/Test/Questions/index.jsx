import * as React from "react";
// import QuestionComponent from "../QuestionComponent";
import "./index.scss";
import { eiQuestions } from "./questions";
import QuestionComponent from "../QuestionComponent";

const Questions = () => {
  const [scores, setScores] = React.useState({});

  const handleSubmit = () => {
    const totalScore = Object.values(scores).reduce(
      (acc, score) => acc + score,
      0
    );
    console.log("Total Scores:", totalScore);
  };

  return (
    <div className="questions">
      {eiQuestions?.map((q) => (
        <QuestionComponent
          question={q}
          key={q?.title}
          setScores={setScores}
          scores={scores}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Questions;
