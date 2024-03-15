import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const paths = [
  {
    path: "*",
    element: lazy(() => import("../modules/NotFound")),
  },
  {
    path: "/not-found",
    element: lazy(() => import("../modules/NotFound")),
  },
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
  {
    path: "/personalities/:personality",
    element: lazy(() => import("../modules/Personalities/SinglePersonality")),
  },
  {
    path: "/personalities",
    element: lazy(() => import("../modules/Personalities")),
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
