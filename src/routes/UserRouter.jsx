import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../context";

const paths = [
  {
    path: "",
    element: lazy(() => import("../modules/Home")),
  },
  {
    path: "/test",
    element: lazy(() => import("../modules/Test")),
  },
  {
    path: "/results/:personality",
    element: lazy(() => import("../modules/Test/Results")),
  },
];

function UserRouter() {
  return (
    <Routes>
      {paths.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  );
}

export default UserRouter;
