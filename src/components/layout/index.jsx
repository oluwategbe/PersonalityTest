import Navbar from "./../Navbar/index";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="appContainer">
      <Navbar />
      <div className="pageCTX">{children}</div>
    </div>
  );
};

export default Layout;
