import { useRef, useState } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import HooksPractice from "./components/HooksPractice";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Layout/Header";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [Uname, setUname] = useState("");
  const inputRef = useRef(null);
  return (
    <>
      <h1>
        <span className="highlight">RE</span>us
        <span className="highlight">A</span>ble{" "}
        <span className="highlight">C</span>
        omponen<span className="highlight">T</span>s
      </h1>
      <h2>Topics:</h2>
      <ul>
        <li>Code Splitting</li>
        <li>Code Reusability</li>
        <li>Folder Structure</li>
      </ul>
      <h3>Exmaple: Profile Card</h3>
      <ProfileCard userName={Uname} />
      <div className="form" style={{ marginTop: "2rem" }}>
        <input
          ref={inputRef}
          type="text"
          // value={Uname}
          placeholder="enter name"
        />
        <button onClick={() => setUname(inputRef.current.value)}>
          Update Name
        </button>
      </div>
    </>
  );
};

export default App;
