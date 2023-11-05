import { Fragment, lazy, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicPaths } from "./path";
import SpecificLoader from "../utils/SpecificLoader";
import { UserRoles } from "../utils/constants";
import { AuthContext } from "../context";

const privateRoutes = [
  {
    path: "dashboard",
    element: SpecificLoader({
      [UserRoles.ADMIN]: lazy(() => import("../modules/Home")),
    }),
  },
];

function Admin() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to={`${PublicPaths.Home}`} replace />;
  }
  return (
    <Routes>
      {privateRoutes.map(({ path, element: Element }) => (
        <Fragment key={path}>
          <Route key={path} path={path} element={<Element />} />
        </Fragment>
      ))}
    </Routes>
  );
}

export default Admin;
