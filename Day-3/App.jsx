import { useState } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import HooksPractice from "./components/HooksPractice";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Layout/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
