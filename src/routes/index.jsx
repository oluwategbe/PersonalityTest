/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment, Suspense } from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import BaseRoutes from "./base.js";
import { ToastContainer } from "react-toastify";
import AuthGuard from "./AuthGuard.jsx";
import { AnimatePresence } from "framer-motion";
import { MdOutlineArrowUpward } from "react-icons/md";

const renderRoute = ({ component: Component, ...route }) => {
  const { useAuth } = route;
  return (
    <Route
      key={route.path}
      path={route.path}
      element={
        <Fragment>
          <Suspense>
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
const AppRoutes = () => {
  const location = useLocation();
  const handleExitComplete = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence wait="true" onExitComplete={handleExitComplete}>
      <Routes key={location.pathname} location={location}>
        {BaseRoutes.map((route) => renderRoute(route))}
      </Routes>
      <div className="scrollTop" onClick={scrollToTop}>
        <MdOutlineArrowUpward />
      </div>
    </AnimatePresence>
  );
};

const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
export default RoutesWrapper;
