import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const paths = [
  {
    path: "login",
    element: lazy(() => import("../modules/Home")),
  },
  {
    path: "all-courses",
    element: lazy(() => import("../modules/CoursesList")),
  },
  {
    path: "*",
    element: lazy(() => import("../modules/NotFound")),
  },
];

function Auth() {
  return (
    <Routes>
      {paths.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  );
}

export default Auth;
