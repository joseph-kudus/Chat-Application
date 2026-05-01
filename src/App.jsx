import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ChatProvider } from "./context/ChatContext"; // <- add this

import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import PrivateRoute from "./component/PrivateRoute.jsx";

function App() {
  return (
    <UserProvider>
      <ChatProvider>
        {/* <- add this wrapper */}
        <h1>hello wanny chat please login to enjoy</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <DashboardLayout />
              </PrivateRoute>
            }
          />
        </Routes>
      </ChatProvider>
    </UserProvider>
  );
}

export default App;
