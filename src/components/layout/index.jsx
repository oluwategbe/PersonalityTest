import Footer from "../Footer";
import Navbar from "./../Navbar/index";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="appContainer">
      <Navbar />
      <div className="pageCTX">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
