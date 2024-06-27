import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "../features/login/pages/login";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../features/dashboard/pages/Dashboard";
import Mentor from "../features/mentor/pages/Mentor";
import Lomba from "../features/lomba/pages/Lomba";
import Pemasukan from "../features/pemasukan/pages/Pemasukan";
import DetailMentor from "../features/mentor/pages/DetailMentor";
import DetailLomba from "../features/lomba/pages/DetailLomba";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/main" element={<MainLayout />} />
        <Route exact path="/dahboard" element={<Dashboard />} />
        <Route exact path="/mentor" element={<Mentor />} />
        <Route exact path="/mentor/:id" element={<DetailMentor />} />
        <Route exact path="/lomba" element={<Lomba />} />
        <Route exact path="/lomba/:id" element={<DetailLomba />} />
        <Route exact path="/pemasukan" element={<Pemasukan />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
