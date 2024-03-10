import * as React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { ThemeContext } from "../../../../context";
import { motion } from "framer-motion";
import { ShakeButton } from "../../../../utils/animatedText";

const variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

const divVar = {
  initial: {
    scaleX: 0.5,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 0],
    },
  },
};

const Hero = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <motion.div className={`hero ${theme === "dark" ? "dark" : ""}`}>
      <motion.div
        style={{ height: "100%", width: "100%" }}
        variants={divVar}
        initial="initial"
        animate="animate"
      >
        <div className="heroBox">
          <div className="quote">
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                variants={variants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                “Your personality is the only permanent thing in your,
                ultimately, temporary life…that&apos;s all the more reason to
                cherish it.”
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", width: "100%" }}>
              <motion.h5
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                — Isabella Koldras
              </motion.h5>
            </div>
          </div>
          <Link to={"/test"}>
            <ShakeButton delay={0.5}>
              <button>
                Take the test
                <AiOutlineDoubleRight />
              </button>
            </ShakeButton>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
