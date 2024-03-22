import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./normalize.css";

const domNode = document.createElement("div");
document.body.appendChild(domNode);
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
