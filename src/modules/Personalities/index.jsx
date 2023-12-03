import PersonalityCard from "../../components/PersonalityCard";
import Layout from "../../components/layout";
import { personalityData } from "../../utils/data";
import "./index.scss";

const Personalities = () => {
  const analysts = personalityData?.filter((p) => p?.group === "Analysts");
  const diplomats = personalityData?.filter((p) => p?.group === "Diplomats");
  const sentinels = personalityData?.filter((p) => p?.group === "Sentinels");
  const explorers = personalityData?.filter((p) => p?.group === "Explorers");
  return (
    <Layout>
      <div className="personalities">
        <div className="hero">
          <h1>Myers & Briggs&apos; 16 Personality Types</h1>
          <p>
            In order to better understand people’s common similarities and
            differences, Isabel Briggs Myers and her mother Katharine Briggs
            built on the work of psychologist Carl Jung to develop a system of
            categorizing human behavior. They landed on four key dimensions that
            people could express as preferences in the way they manage their
            energy, process information, make decisions, and structure their
            day-to-day lives. Each of these preferences is represented by a
            letter, and together these preferences, denoted by four letters,
            make up your Myers Briggs personality type.
          </p>
        </div>
        <div className="personalities">
          <div className="analysts group">
            {analysts?.map((p) => (
              <PersonalityCard
                key={p?.personality}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                color="purple"
              />
            ))}
          </div>
          <div className="diplomats group">
            {diplomats?.map((p) => (
              <PersonalityCard
                key={p?.personality}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                color="green"
              />
            ))}
          </div>
          <div className="sentinels group">
            {sentinels?.map((p) => (
              <PersonalityCard
                key={p?.personality}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                color="#058a89"
              />
            ))}
          </div>
          <div className="explorers group">
            {explorers?.map((p) => (
              <PersonalityCard
                key={p?.personality}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                color="#e9b422"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Personalities;
