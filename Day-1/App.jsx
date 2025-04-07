import { useState } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <>
      <UserProfile name={"ABC"} age={24} />
    </>
  );
};

export default App;
