import React from "react";
import MainLayout from "../../../layout/MainLayout";
import SearchInput from "../../../components/SearchInput";
import MentorTab from "../components/MentorTab";
import DummyPagination from "../../../components/DummyPagination";

const Mentor = () => {
  return (
    <MainLayout>
      <h1 className="tilteText">Cari Nama Mentor</h1>
      <div className="my-4">
        <SearchInput textHolder={"Cari Nama Mentor"} />
      </div>
      <MentorTab />
      <DummyPagination />
    </MainLayout>
  );
};

export default Mentor;
