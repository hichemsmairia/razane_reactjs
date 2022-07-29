import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { auth } from "./config/firebase";

import Login from "./views/Login";
import Register from "./views/Register";

import { useEffect } from "react";

import Dashboard from "./views/Dashboard";
import Landing from "./views/Landing";

function App() {
  const user = localStorage.getItem("user");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("user", authUser);
      } else {
        localStorage.removeItem("user");
      }
    });
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
