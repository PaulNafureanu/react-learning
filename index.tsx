import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./styles/normalize.css";
import "./styles/global.css";

const domNode = document.createElement("div");
domNode.id = "root";
document.body.appendChild(domNode);
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
