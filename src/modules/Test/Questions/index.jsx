import * as React from "react";
// import QuestionComponent from "../QuestionComponent";
import "./index.scss";
import { eiQuestions } from "./questions";
import QuestionComponent2 from "../QuestionComponent2";

const Questions = () => {
  const [scores, setScores] = React.useState(0);

  return (
    <div>
      <h1>Questions</h1>
      {eiQuestions?.map((q) => (
        <QuestionComponent2
          question={q}
          key={q?.title}
          setScores={setScores}
          scores={scores}
        />
      ))}
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  );
};

export default Questions;
