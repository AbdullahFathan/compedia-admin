import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../../layout/MainLayout";
import DetailText from "../../../components/DetailText";
import PrimaryButton from "../../../components/Button";
import Image from "../../../assets";

const DetailLomba = () => {
  let { id } = useParams();
  return (
    <MainLayout>
      <h1 className="tilteText my-4">Detail Lomba</h1>

      <div className="flex justify-center items-center">
        <img src={Image.Poster} alt="poster" width={147} height={210} />
      </div>

      <div className="space-y-4 my-5 max-w-xl">
        <DetailText title={"Status Lomba"} detail={"Telah Approve"} />
        <DetailText
          title={"Biaya Publish Lomba di App"}
          detail={"Rp240.000 / 30 Hari"}
        />
        <DetailText
          title={"Nama Lomba"}
          detail={"Hology Competition National Brawijaya 2022"}
        />
        <DetailText title={"Kategori Lomba"} detail={"IT, Bisnis"} />
        <DetailText
          title={"Kampus Penyelenggara"}
          detail={"Universitas Brawijaya"}
        />
        <DetailText title={"Biaya Registrasi"} detail={"Rp100.000"} />
        <DetailText title={"Tingkat Kompetisi"} detail={"Nasional"} />
        <DetailText title={"Mulai Registrasi"} detail={"20 May 2023"} />
        <DetailText title={"Batas Registrasi"} detail={"20 Jun 2023"} />
        <DetailText title={"Pelaksanaan Kompetisi"} detail={"Hybrid"} />
        <DetailText title={"Lokasi Lomba"} detail={"Kota Malang"} />
        <DetailText title={"Nama Pihak Lomba"} detail={"Hology Team"} />
        <DetailText title={"Email Pihak Lomba"} detail={"hology@ub.ac.id"} />
        <DetailText
          title={"Link Instagram Pihak Lomba"}
          detail={"www.instagram.com/hology"}
        />
        <DetailText
          title={"Deskripsi Lomba"}
          detail={
            "Lorem ipsum dolor sit amet consectetur. Nunc proin nunc at non nisl gravida vel cursus dapibus. Ipsum quis sodales arcu dolor. Sollicitudin sit nec tristique aenean dignissim maecenas morbi aliquam. Sit sed sodales sed proin vitae semper fermentum volutpat."
          }
        />
        <DetailText
          title={"Deskripsi Hadiah Lomba"}
          detail={
            "Juara 1 - Rp500.000\nJuara 2 - Rp300.000\nJuara 3 - Rp100.000\nseluruh finalis dan peserta mendapatkan sertifikat"
          }
        />
        <DetailText
          title={"Link Guidebook Lomba"}
          detail={"https://drive.google.com/drive/folders/1-BeWfNXskX5J"}
        />
        <DetailText
          title={"Link Registrasi Lomba"}
          detail={"www.hologyUB.com"}
        />
      </div>
      <div className="my-3">
        <h3 className="text-textBlack font-medium text-sm">Ketarangan</h3>
        <label className="form-control my-3">
          <textarea
            className="textarea textarea-bordered h-24 bg-white"
            placeholder="Isikan untuk bisa mengaktifkan tombol tutup pendaftaran sekarang"
          ></textarea>
          <div className="label">
            <span className="text-xs text-gray-400 ml-2">
              Isikan untuk bisa mengaktifkan tombol tutup pendaftaran sekarang
            </span>
          </div>
        </label>
      </div>
      <div className="max-w-md flex flex-col xl:flex-row ">
        <PrimaryButton title={"Tutup Pendaftaran Sekarang"} onTap={() => {}} />
        <button class="btn btn-outline  border border-primary mt-5 xl:mt-0 ml-0 xl:ml-5 w-full text-primary  bg-white ">
          Kembali
        </button>
      </div>
    </MainLayout>
  );
};

export default DetailLomba;
