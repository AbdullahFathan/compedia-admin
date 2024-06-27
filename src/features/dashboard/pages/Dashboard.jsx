import React from "react";
import MainLayout from "../../../layout/MainLayout";
import { dashBoardData } from "../../../constants/dashboard";

const Dashboard = () => {
  return (
    <MainLayout>
      <h1 className="tilteText">Dashboard Admin</h1>
      <div className="my-5 flex flex-col md:flex-row ">
        {" "}
        {dashBoardData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border border-border py-3 px-3 mt-6 md:mt-0 mr-0 md:mr-6 justify-center items-center rounded-lg "
          >
            <h2 className={`text-2xl font-semibold  ${item.color}`}>
              {item.data}
            </h2>
            <h4 className="text-base text-center text-textBlack mt-3">
              {item.title}
            </h4>
          </div>
        ))}
      </div>

      <div className="flex flex-col border border-border py-3 mt-6  justify-center items-center rounded-lg ">
        <h2 className={`text-2xl font-semibold  text-primary`}>Rp1.504.800</h2>
        <h4 className="text-base text-center font-normal text-textBlack mt-3">
          Total Jumlah Pemasukan
        </h4>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
