import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReactQueryContext } from "./context";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ReactQueryContext>
      <App />
    </ReactQueryContext>
  </React.StrictMode>,
);
