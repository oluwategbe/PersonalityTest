import * as React from "react";
import PersonalityCard from "../../components/PersonalityCard";
import Layout from "../../components/layout";
import { ThemeContext } from "../../context";
import { personalityData } from "../../utils/data";
import "./index.scss";
import { OtherRevealY, PersonalityRevealH4Y } from "../../utils/animatedText";

const Personalities = () => {
  const { theme } = React.useContext(ThemeContext);
  const analysts = personalityData?.filter((p) => p?.group === "Analysts");
  const diplomats = personalityData?.filter((p) => p?.group === "Diplomats");
  const sentinels = personalityData?.filter((p) => p?.group === "Sentinels");
  const explorers = personalityData?.filter((p) => p?.group === "Explorers");

  return (
    <Layout>
      <div className={`personalitiesPage ${theme === "dark" ? "dark" : ""}`}>
        <div className="personalityHero">
          <div className="personalityHeroSection">
            <OtherRevealY once={true}>
              <h1>Myers & Briggs&apos; 16 Personality Types</h1>
            </OtherRevealY>
            <OtherRevealY once={true} delay={0.5}>
              <p>
                In order to better understand people&apos;s common similarities
                and differences, Isabel Briggs Myers and her mother Katharine
                Briggs built on the work of psychologist Carl Jung to develop a
                system of categorizing human behavior. They landed on four key
                dimensions that people could express as preferences in the way
                they manage their energy, process information, make decisions,
                and structure their day-to-day lives. Each of these preferences
                is represented by a letter, and together these preferences,
                denoted by four letters, make up your Myers Briggs personality
                type.
                <br />
              </p>
            </OtherRevealY>
            <OtherRevealY once={true} delay={1}>
              <p style={{ textAlign: "left", width: "100%" }}>
                The 16 personalities grouped accordingly are shown below:
              </p>
            </OtherRevealY>
          </div>
        </div>
        <div className="personalities">
          <div className={`analysts group ${theme === "dark" ? "dark" : ""}`}>
            <PersonalityRevealH4Y className="analysth4 groupH4" once={true}>
              Analysts
            </PersonalityRevealH4Y>
            {analysts?.map((p, i) => (
              <PersonalityCard
                key={i}
                index={i}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                delay={i * 0.25}
                color={theme === "light" ? "purple" : "#d799ee"}
                box={theme === "light" ? "#ae6ca8" : "#200d1f"}
              />
            ))}
          </div>
          <div className={`diplomats group ${theme === "dark" ? "dark" : ""}`}>
            <PersonalityRevealH4Y className="analysth4 groupH4" once={true}>
              Diplomats
            </PersonalityRevealH4Y>
            {diplomats?.map((p, i) => (
              <PersonalityCard
                key={i}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                delay={i * 0.25}
                color={theme === "light" ? "green" : "#9df770"}
                box={theme === "light" ? "#8fc9a6" : "#1a502d "}
              />
            ))}
          </div>
          <div className={`sentinels group ${theme === "dark" ? "dark" : ""}`}>
            <PersonalityRevealH4Y className="analysth4 groupH4" once={true}>
              Sentinels
            </PersonalityRevealH4Y>
            {sentinels?.map((p, i) => (
              <PersonalityCard
                key={i}
                delay={i * 0.25}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                color={theme === "light" ? "#058a89" : "#79e8ee"}
                box={theme === "light" ? "#66d4c0" : "#015458 "}
              />
            ))}
          </div>
          <div className={`explorers group ${theme === "dark" ? "dark" : ""}`}>
            <PersonalityRevealH4Y className="analysth4 groupH4" once={true}>
              Explorers
            </PersonalityRevealH4Y>
            {explorers?.map((p, i) => (
              <PersonalityCard
                key={i}
                delay={i * 0.25}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                color={theme === "light" ? "#966f03" : "#ffffff"}
                box={theme === "light" ? "#dcc366" : "#ad981e "}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Personalities;
