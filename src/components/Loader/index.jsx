import { Dna } from "react-loader-spinner";
import "./index.scss";

const Loader = () => {
  return (
    <div className="loader">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <p>Loading....</p>
    </div>
  );
};

export default Loader;
