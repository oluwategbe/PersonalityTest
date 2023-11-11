/* eslint-disable react/prop-types */
import "./index.scss";

const QuestionComponent2 = ({ question, setScores, scores }) => {
  const handleScoreChange = (value) => {
    setScores(Number(scores) + Number(value));
    console.log(scores);
  };

  return (
    <div className="question">
      <p>{question?.title}</p>
      <div className="radio-buttons">
        <label className="large">Agree</label>
        <div
          key={question?.title}
          className={`radio-group`}
          onClick={() => handleScoreChange(100)}
        >
          <label htmlFor={question?.title}>
            <input type="radio" name={question?.title} value={100} />
            male
            <span></span>
          </label>
        </div>
        <label className="large">Disagree</label>
      </div>
    </div>
  );
};

export default QuestionComponent2;
