import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <main className="bg-white min-h-screen pl-4 lg:pl-14  pr-4">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4 ml-[60px] mt-[35px] mr-[102px]">
          {"ini anak"}
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
