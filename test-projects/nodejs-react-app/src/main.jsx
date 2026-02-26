import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const APIKEY = "fakeapikey123123123123";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
