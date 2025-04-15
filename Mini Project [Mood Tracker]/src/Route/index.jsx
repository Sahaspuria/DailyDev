import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import NotFound from "../Pages/NotFound";
import Header from "../Layout/Header";
import App from "../App";
import History from "../Pages/history";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />, // as Layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function Routes() {
  return <RouterProvider router={routes} />;
}

export default Routes;
