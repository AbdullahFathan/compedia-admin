import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "../features/login/pages/login";
import MainLayout from "../layout/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/main" element={<MainLayout />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
