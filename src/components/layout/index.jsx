// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="appContainer">
      <div className="pageCTX">{children}</div>
    </div>
  );
};

export default Layout;
