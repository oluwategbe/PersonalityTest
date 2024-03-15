import { lazy } from "react";

const BaseRoutes = [
  {
    path: "/*",
    exact: true,
    component: lazy(() => import("./UserRouter")),
    useAuth: false,
  },
];

export default BaseRoutes;
