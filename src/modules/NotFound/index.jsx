// modules/NotFound.jsx
import "./index.css";
import Layout from "../../components/layout";
import notFound from "/public/images/404.svg";

const NotFound = () => {
  return (
    <Layout>
      <div className="notFound">
        <div className="notFoundModal">
          <img src={notFound} alt="Not Found" />
          <h1>Opps! The page you are looking for does not exist.</h1>
          <p>
            Click <a href="/">Here</a> to go back to the home page
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
