/* eslint-disable react/prop-types */
import * as React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { RevealY } from "../../../utils/animatedText";

function ResultWait({ showExit, setShowExit }) {
  const mainControls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    }
  }, [isInView, mainControls]);

  const handleComplete = () => {
    setShowExit(true);
  };

  React.useEffect(() => {
    if (showExit) {
      mainControls.start("exit");
    }
  }, [showExit, mainControls]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={mainControls}
      className="resultWait"
      ref={ref}
      style={{ display: showExit ? "none" : "" }}
    >
      <RevealY delay={1} style={{ width: "fit-content" }}>
        <div className="calculationText">Calculating your result...</div>
      </RevealY>
      <RevealY delay={1.5} style={{ width: "fit-content" }}>
        <div className="progressBar">
          <motion.div
            className="progress"
            animate={{ width: "100%", transition: { duration: 5, delay: 3 } }}
            initial={{ width: 0 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={handleComplete}
          ></motion.div>
        </div>
      </RevealY>
    </motion.div>
  );
}

export default ResultWait;
