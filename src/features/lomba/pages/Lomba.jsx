import React from "react";
import MainLayout from "../../../layout/MainLayout";
import DummyPagination from "../../../components/DummyPagination";
import LombaTab from "../components/LombaTab";
import SearchInput from "../../../components/SearchInput";

const Lomba = () => {
  return (
    <MainLayout>
      <h1 className="tilteText">Cari Nama Lomba</h1>
      <div className="my-4">
        <SearchInput textHolder={"Cari Nama Lomba"} />
      </div>
      <LombaTab />
      <DummyPagination />
    </MainLayout>
  );
};

export default Lomba;
