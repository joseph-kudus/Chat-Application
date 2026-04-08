import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Auth-folder/Navbar.jsx";
import Landingpage from "./pages/Auth-folder/Landingpage.jsx";
import Login from "./pages/Auth-folder/Login.jsx";
import Signup from "./pages/Signup.jsx";


function App() {
  return (
    <div className="md-4 color-red bg-indigo-700 text-3xl underline">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
