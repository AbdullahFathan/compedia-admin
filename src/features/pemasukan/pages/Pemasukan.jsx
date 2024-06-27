import React from "react";
import MainLayout from "../../../layout/MainLayout";
import { pemasukanDummy } from "../../../constants/dummy";
import DataCard from "../../../components/DataCard";
import DummyPagination from "../../../components/DummyPagination";

const Pemasukan = () => {
  return (
    <MainLayout>
      <h1 className="tilteText">Pantau Pemasukan</h1>
      <div className="flex flex-col border border-border py-3 mt-6  justify-center items-center rounded-lg ">
        <h2 className={`text-2xl font-semibold  text-primary`}>Rp1.504.800</h2>
        <h4 className="text-base text-center font-normal text-textBlack mt-3">
          Total Jumlah Pemasukan
        </h4>
      </div>
      <div className="flex flex-col  xl:flex-row  mt-5">
        <div className="flex flex-col border border-border py-3 px-5  justify-center items-center rounded-lg flex-1 ">
          <h2 className={`text-2xl font-semibold  text-primary`}>Rp755.000</h2>
          <h4 className="text-base text-center font-normal text-textBlack mt-3">
            Pada Gopay - Aditya Nugraha - 081234567890
          </h4>
        </div>
        <div className="flex flex-col border border-border py-3 px-5   justify-center items-center rounded-lg flex-1 mt-3 xl:mt-0 xl:ml-3 ">
          <h2 className={`text-2xl font-semibold  text-primary`}>Rp749.800</h2>
          <h4 className="text-base text-center font-normal text-textBlack mt-3">
            Pada Bank Mandiri - ADITYA NUGRAHA TARIH - 1060016821851
          </h4>
        </div>
      </div>
      <div className=" my-3">
        {pemasukanDummy.map((item, index) => (
          <div key={index} className="my-3">
            <DataCard
              key={item.id}
              buttonTitle="Lihat Profile"
              onTap={() => {
                navigate(`/mentor/${item.id}`);
              }}
              title={item.name}
            />
          </div>
        ))}
      </div>
      <DummyPagination />
    </MainLayout>
  );
};

export default Pemasukan;
