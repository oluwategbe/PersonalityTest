/* eslint-disable react/prop-types */
import CustomSelect from "../../../../components/CustomSelect";
import "../../Questions/index.scss";
import { FaRegFaceSmileBeam } from "react-icons/fa6";

const Step5 = ({ gender, setGender, setStep, handleSubmit }) => {
  const handlePrevious = () => {
    setStep((prev) => prev - 1);
    const webPartElement = document.getElementsByClassName(`topContainer`);
    if (webPartElement) {
      webPartElement[0].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (e) => {
    setGender(e);
  };

  return (
    <div className="lastStep">
      <h2>
        N.B: This is just to determine your personality image{" "}
        <FaRegFaceSmileBeam />
      </h2>
      {/* <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <label htmlFor="gender">Please select your gender:</label>
        <select onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </div> */}
      <CustomSelect options={["Male", "Female"]} onChange={handleChange} />
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
