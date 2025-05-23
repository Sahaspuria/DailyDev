import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Routes from "./Route/index.jsx";

createRoot(document.getElementById("root")).render(<Routes />);
