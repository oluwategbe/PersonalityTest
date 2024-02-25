/* eslint-disable react/prop-types */
import * as React from "react";
import { ThemeContext } from "../../../../context";
import styles from "./step.module.scss";

const Steps = ({ step, setStep }) => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={styles.steps}>
      <span
        style={{
          background: theme === "dark" ? "#ffffff" : "#000000",
          color: theme === "dark" ? "#000000" : "#ffffff",
        }}
        onClick={() => setStep(1)}
      >
        1
      </span>
      <div
        style={{
          background: `${
            theme === "dark"
              ? step === 2 || step === 3 || step === 4 || step === 5
                ? "#ffffff"
                : "#2e2e2e"
              : step === 2 || step === 3 || step === 4 || step === 5
              ? "#000000"
              : "#CECCCC"
          }`,
        }}
      />
      <span
        style={{
          background: `${
            theme === "dark"
              ? step === 2 || step === 3 || step === 4 || step === 5
                ? "#ffffff"
                : "#000000"
              : step === 2 || step === 3 || step === 4 || step === 5
              ? "#000000"
              : "#ffffff"
          }`,
          color: `${
            theme === "dark"
              ? step === 2 || step === 3 || step === 4 || step === 5
                ? "#000000"
                : "#ffffff"
              : step === 2 || step === 3 || step === 4 || step === 5
              ? "#ffffff"
              : "#000000"
          }`,
        }}
        onClick={() => setStep(2)}
      >
        2
      </span>
      <div
        style={{
          background: `${
            theme === "dark"
              ? step === 3 || step === 4 || step === 5
                ? "#ffffff"
                : "#2e2e2e"
              : step === 3 || step === 4 || step === 5
              ? "#000000"
              : "#CECCCC"
          }`,
        }}
      />
      <span
        style={{
          background: `${
            theme === "dark"
              ? step === 3 || step === 4 || step === 5
                ? "#ffffff"
                : "#000000"
              : step === 3 || step === 4 || step === 5
              ? "#000000"
              : "#ffffff"
          }`,
          color: `${
            theme === "dark"
              ? step === 3 || step === 4 || step === 5
                ? "#000000"
                : "#ffffff"
              : step === 3 || step === 4 || step === 5
              ? "#ffffff"
              : "#000000"
          }`,
        }}
        onClick={() => setStep(3)}
      >
        3
      </span>
      <div
        style={{
          background: `${
            theme === "dark"
              ? step === 4 || step === 5
                ? "#ffffff"
                : "#2e2e2e"
              : step === 4 || step === 5
              ? "#000000"
              : "#CECCCC"
          }`,
        }}
      />
      <span
        style={{
          background: `${
            theme === "dark"
              ? step === 4 || step === 5
                ? "#ffffff"
                : "#000000"
              : step === 4 || step === 5
              ? "#000000"
              : "#ffffff"
          }`,
          color: `${
            theme === "dark"
              ? step === 4 || step === 5
                ? "#000000"
                : "#ffffff"
              : step === 4 || step === 5
              ? "#ffffff"
              : "#000000"
          }`,
        }}
        onClick={() => setStep(4)}
      >
        4
      </span>
      <div
        style={{
          background: `${
            theme === "dark"
              ? step === 5
                ? "#ffffff"
                : "#2e2e2e"
              : step === 5
              ? "#000000"
              : "#CECCCC"
          }`,
        }}
      />
      <span
        style={{
          background: `${
            theme === "dark"
              ? step === 5
                ? "#ffffff"
                : "#000000"
              : step === 5
              ? "#000000"
              : "#ffffff"
          }`,
          color: `${
            theme === "dark"
              ? step === 5
                ? "#000000"
                : "#ffffff"
              : step === 5
              ? "#ffffff"
              : "#000000"
          }`,
        }}
      >
        5
      </span>
    </div>
  );
};

export default Steps;
