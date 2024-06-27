import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <main className="bg-white min-h-screen pl-4 md:pl-14  pr-4">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4  mt-[35px] ml-4  md:ml-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
