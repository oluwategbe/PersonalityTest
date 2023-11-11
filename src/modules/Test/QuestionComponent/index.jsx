/* eslint-disable react/prop-types */
import "./index.scss";

const QuestionComponent = ({ question, setScores, scores }) => {
  // const scoreMap = {
  //   1: 100,
  //   2: 83,
  //   3: 66,
  //   4: 50,
  //   5: 33,
  //   6: 16,
  //   7: 0,
  // };

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
          <input type="radio" name={question?.title} value={100} />
          <label htmlFor={question?.title}>
            <div
              style={{
                background: Number(scores) >= 100 ? "blue" : "transparent",
                height: "5rem",
                width: "5rem",
                borderRadius: "50%",
                border: "2px solid black",
              }}
            ></div>
          </label>
        </div>
        <div
          key={question?.title}
          className={`radio-group`}
          onClick={() => handleScoreChange(83)}
        >
          <input type="radio" name={question?.title} value={83} />
          <label htmlFor={question?.title}>
            <div
              style={{
                background: Number(scores) >= 83 ? "blue" : "transparent",
                height: "4rem",
                width: "4rem",
                borderRadius: "50%",
                border: "2px solid black",
              }}
            ></div>
          </label>
        </div>
        <div
          key={question?.title}
          className={`radio-group`}
          onClick={() => handleScoreChange(66)}
        >
          <input type="radio" name={question?.title} value={66} />
          <label htmlFor={question?.title}>
            <div
              style={{
                background: Number(scores) >= 66 ? "blue" : "transparent",
                height: "3rem",
                width: "3rem",
                borderRadius: "50%",
                border: "2px solid black",
              }}
            ></div>
          </label>
        </div>
        <div
          key={question?.title}
          className={`radio-group`}
          onClick={() => handleScoreChange(50)}
        >
          <input type="radio" name={question?.title} value={50} />
          <label htmlFor={question?.title}>
            <div
              style={{
                background: Number(scores) >= 50 ? "blue" : "transparent",
                height: "2rem",
                width: "2rem",
                borderRadius: "50%",
                border: "2px solid black",
              }}
            ></div>
          </label>
        </div>
        <div
          key={question?.title}
          className={`radio-group`}
          onClick={() => handleScoreChange(33)}
        >
          <input type="radio" name={question?.title} value={33} />
          <label htmlFor={question?.title}>
            <div
              style={{
                background: Number(scores) >= 33 ? "blue" : "transparent",
                height: "3rem",
                width: "3rem",
                borderRadius: "50%",
                border: "2px solid black",
              }}
            ></div>
          </label>
        </div>
        <div
          key={question?.title}
          className={`radio-group`}
          onClick={() => handleScoreChange(16)}
        >
          <input type="radio" name={question?.title} value={16} />
          <label htmlFor={question?.title}>
            <div
              style={{
                background: Number(scores) >= 16 ? "blue" : "transparent",
                height: "4rem",
                width: "4rem",
                borderRadius: "50%",
                border: "2px solid black",
              }}
            ></div>
          </label>
        </div>
        <div
          key={question?.title}
          className={`radio-group`}
          onClick={() => handleScoreChange(0)}
        >
          <input type="radio" name={question?.title} value={0} />
          <label htmlFor={question?.title}>
            <div
              style={{
                background: Number(scores) >= 0 ? "blue" : "transparent",
                height: "5rem",
                width: "5rem",
                borderRadius: "50%",
                border: "2px solid black",
              }}
            ></div>
          </label>
        </div>
        <label className="large">Disagree</label>
      </div>
    </div>
  );
};

export default QuestionComponent;
