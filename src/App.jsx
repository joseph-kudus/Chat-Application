import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts.jsx/DashboardLayout.jsx";


function App() {
  return (
    <div className="md-4 color-red bg-indigo-700 text-3xl underline">
      <Routes>
        <Route path="/" element={<DashboardLayout/>}/>
      </Routes>
    </div>
  );
}

export default App;
