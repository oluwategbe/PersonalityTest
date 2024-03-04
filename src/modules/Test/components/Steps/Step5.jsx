/* eslint-disable react/prop-types */
import CustomSelect from "../../../../components/CustomSelect";
import { RevealY } from "../../../../utils/animatedText";
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
      <RevealY delay={0.5} once={true}>
        <h2>
          N.B: This is just to determine your personality image{" "}
          <FaRegFaceSmileBeam />
        </h2>
      </RevealY>
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
