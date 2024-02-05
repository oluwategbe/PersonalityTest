/* eslint-disable react/prop-types */
import "../../Questions/index.scss";

const Step5 = ({ gender, setGender, setStep, handleSubmit }) => {
  const handlePrevious = () => {
    setStep((prev) => prev - 1);
    const webPartElement = document.getElementsByClassName(`topContainer`);
    if (webPartElement) {
      webPartElement[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "fit-content",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label htmlFor="gender">Please select your gender:</label>
        <select onChange={handleChange}>
          <option selected value="male">
            Male
          </option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div className="buttonContainer">
        <button onClick={handlePrevious} type="button" className="btnBlack">
          Previous
        </button>
        <button
          onClick={handleSubmit}
          type="button"
          className={`btnYellow ${!gender ? "disabledButton" : ""}`}
          disabled={!gender}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step5;
