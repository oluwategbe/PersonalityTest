import * as React from "react";
import styles from "./styles.module.scss";
import { Dna } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={styles.loader}>
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
