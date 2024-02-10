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
        <div className="personalityHero">
          <h1>Myers & Briggs&apos; 16 Personality Types</h1>
          <p>
            In order to better understand people&apos;s common similarities and
            differences, Isabel Briggs Myers and her mother Katharine Briggs
            built on the work of psychologist Carl Jung to develop a system of
            categorizing human behavior. They landed on four key dimensions that
            people could express as preferences in the way they manage their
            energy, process information, make decisions, and structure their
            day-to-day lives. Each of these preferences is represented by a
            letter, and together these preferences, denoted by four letters,
            make up your Myers Briggs personality type.
            <br />
            <br />
            The 16 personalities grouped accordingly are shown below:
          </p>
        </div>
        <div className="personalities">
          <div className="analysts group">
            <h4>Analysts</h4>
            {analysts?.map((p) => (
              <PersonalityCard
                key={p?.personality}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                color="purple"
                box="#ae6ca8"
              />
            ))}
          </div>
          <div className="diplomats group">
            <h4>Diplomats</h4>
            {diplomats?.map((p) => (
              <PersonalityCard
                key={p?.personality}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                color="green"
                box="#8fc9a6"
              />
            ))}
          </div>
          <div className="sentinels group">
            <h4>Sentinels</h4>
            {sentinels?.map((p) => (
              <PersonalityCard
                key={p?.personality}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                color="#058a89"
                box="#66d4c0"
              />
            ))}
          </div>
          <div className="explorers group">
            <h4>Explorers</h4>
            {explorers?.map((p) => (
              <PersonalityCard
                key={p?.personality}
                title={p?.title}
                personality={p?.personality}
                desc={p?.short_desc}
                picture={p?.pic}
                color="#966f03"
                box="#dcc366"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Personalities;
