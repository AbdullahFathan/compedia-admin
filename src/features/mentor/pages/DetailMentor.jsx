import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../../layout/MainLayout";
import DetailText from "../../../components/DetailText";
import PrimaryButton from "../../../components/Button";

const DetailMentor = () => {
  let { id } = useParams();
  return (
    <MainLayout>
      <h1 className="tilteText my-4">Detail Mentor</h1>

      <div className="space-y-4 my-5 max-w-xl">
        <DetailText title={"Nama Lengkap"} detail={"Abdullah Fathan"} />
        <DetailText title={"Asal Kampus"} detail={"Universitas Brawijaya"} />
        <DetailText title={"Email"} detail={"admin@gmail.com"} />
        <DetailText title={"Bidang Keminatan"} detail={"IT, Bisnis"} />
        <DetailText
          title={"Deskripsi Diri"}
          detail={
            "Hai! teman-teman mahasiswa! perkenalkan aku vinncent dengan pengalaman telah memenangkan lebih dari 10 lomba software development tingkat nasional! Saat ini aku bekerja sebagai back end di bytedance yang fokus pada sistem blockchain!"
          }
        />
        <DetailText
          title={"Pencapaian"}
          detail={"Juara 1 Software Development UNITY 2022"}
        />
        <DetailText
          title={"Link Linkedin"}
          detail={"www.linkedin.com/in/vinncent-alexander-wong-493759213/"}
        />
        <DetailText
          title={"Link Instagram"}
          detail={"www.instagram.com/centwong"}
        />
        <DetailText title={"Nama Pekerjaan"} detail={"-"} />
        <DetailText title={"Cakupan Mentoring"} detail={"-"} />
        <DetailText title={"TnC Mentoring Khusus"} detail={"-"} />
      </div>
      <div className="max-w-md flex flex-col xl:flex-row ">
        <PrimaryButton title={"Terima"} onTap={() => {}} />
        <button class="btn btn-outline  border border-primary mt-5 xl:mt-0 ml-0 xl:ml-5 w-full text-primary  bg-white ">
          Tolak
        </button>
      </div>
    </MainLayout>
  );
};

export default DetailMentor;
