import { Fragment, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BaseRoutes from "./base.js";
import { ToastContainer } from "react-toastify";
import AuthGuard from "./AuthGuard.jsx";
import Loader from "./../components/Loader/index";

const renderRoute = ({ component: Component, ...route }) => {
  const { useAuth } = route;
  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Fragment>
          <Suspense fallback={<Loader />}>
            {useAuth ? (
              <AuthGuard>
                <Component />
              </AuthGuard>
            ) : (
              <Component />
            )}
          </Suspense>
          <ToastContainer />
        </Fragment>
      }
    />
  );
};

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>{BaseRoutes.map((route) => renderRoute(route))}</Routes>
    </BrowserRouter>
  );
};
export default RoutesWrapper;
