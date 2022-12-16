import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

import "./index.scss";

export const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Placeholder for a home page</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
