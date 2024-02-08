import { chartOptions } from "../../utils/data";
import Layout from "./../../components/layout/index";
import Hero from "./components/Hero";
import "./index.scss";
import ReactECharts from "echarts-for-react";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="homepage">
        <div className="briefSummary">
          <h1>Summary</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            velit maxime hic architecto aperiam reprehenderit, tempore fuga
            totam quos magnam autem maiores, nesciunt minima repudiandae commodi
            provident! Sequi sapiente, beatae aut placeat odit unde. Officiis
            sapiente deserunt, necessitatibus exercitationem sequi quis odio,
            libero accusantium amet, in consequuntur blanditiis recusandae modi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            nesciunt sit ipsum consectetur expedita? Excepturi debitis maxime
            eveniet dicta soluta sit officia dolores alias! Officia, doloribus
            vitae? Accusamus debitis illo assumenda quos minus voluptatibus,
            officia tempore adipisci excepturi maiores sequi doloremque natus
            inventore. Hic expedita quia at quos voluptatibus dolorem. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Labore amet
            molestiae quis eos perferendis incidunt debitis! Omnis nihil error
            quae pariatur voluptatem culpa amet voluptate, adipisci est aliquam,
            earum porro voluptatum. Ullam quisquam quidem autem? Consequatur
            iusto nobis voluptatum expedita. Facilis, aut illum. Praesentium
            animi quibusdam tempore, possimus perferendis accusamus quo
            consequatur. Alias eius soluta amet, ab architecto cum quam possimus
            nobis expedita consequuntur deserunt fugiat voluptatem modi? Ratione
            iure fugiat quasi delectus sint ipsa, atque quaerat repellat
            molestias perferendis distinctio inventore vero quos? Quisquam in
            sequi possimus minima voluptate accusantium voluptatem itaque iure
            at, similique ipsam necessitatibus! Reprehenderit, aliquam!
          </p>
        </div>
        <div className="right">
          <div className="classification">
            <h1>Classification</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              ducimus officia id labore maxime, asperiores voluptate temporibus
              tempore aliquid quaerat ipsam eum natus et possimus saepe qui
              deserunt quidem? Atque.
            </p>
          </div>
          <div className="toNote">
            <h1>Note:</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              dolores, optio ullam fugiat nam id possimus quam quaerat. Facilis,
              rerum.
            </p>
          </div>
        </div>
      </div>
      <div className="totalRarity">
        <h1>Rarity</h1>
        <p>
          The rarest personality type is <span>INFJ (Advocate)</span>, while the
          most common type is <span>ISTJ (Logistician)</span>{" "}
        </p>
        <ReactECharts
          option={chartOptions}
          style={{ height: "400px", width: "100%" }}
        />
      </div>
    </Layout>
  );
};

export default Home;
