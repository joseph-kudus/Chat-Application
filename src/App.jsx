import React from "react";
import { Route, Router } from "react-router";
import Landingpage from "./component/Landingpage";

function App() {
  return (
    <div className="md-4 color-red bg-indigo-700 text-3xl underline">
      App
      <Landingpage />
    </div>
  );
}

export default App;
