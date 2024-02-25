import * as React from "react";
import { Dna } from "react-loader-spinner";
import "./index.scss";
import { ThemeContext } from "../../context";

const Loader = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={`loader ${theme === "dark" ? "dark" : ""}`}>
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
