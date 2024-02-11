import * as React from "react";
import styles from "./step.module.scss";

const Steps = ({ step }) => {
  return (
    <div className={styles.steps}>
      <span
        style={{
          background: "#000000",
          color: "#ffffff",
        }}
      >
        1
      </span>
      <div
        style={{
          background: `${
            step === 2 || step === 3 || step === 4 || step === 5
              ? "#000000"
              : "#CECCCC"
          }`,
        }}
      />
      <span
        style={{
          background: `${
            step === 2 || step === 3 || step === 4 || step === 5
              ? "#000000"
              : "#ffffff"
          }`,
          color: `${
            step === 2 || step === 3 || step === 4 || step === 5
              ? "#ffffff"
              : "#000000"
          }`,
        }}
      >
        2
      </span>
      <div
        style={{
          background: `${
            step === 3 || step === 4 || step === 5 ? "#000000" : "#CECCCC"
          }`,
        }}
      />
      <span
        style={{
          background: `${
            step === 3 || step === 4 || step === 5 ? "#000000" : "#ffffff"
          }`,
          color: `${
            step === 3 || step === 4 || step === 5 ? "#ffffff" : "#000000"
          }`,
        }}
      >
        3
      </span>
      <div
        style={{
          background: `${step === 4 || step === 5 ? "#000000" : "#CECCCC"}`,
        }}
      />
      <span
        style={{
          background: `${step === 4 || step === 5 ? "#000000" : "#ffffff"}`,
          color: `${step === 4 || step === 5 ? "#ffffff" : "#000000"}`,
        }}
      >
        4
      </span>
      <div
        style={{
          background: `${step === 5 ? "#000000" : "#CECCCC"}`,
        }}
      />
      <span
        style={{
          background: `${step === 5 ? "#000000" : "#ffffff"}`,
          color: `${step === 5 ? "#ffffff" : "#000000"}`,
        }}
      >
        5
      </span>
    </div>
  );
};

export default Steps;
