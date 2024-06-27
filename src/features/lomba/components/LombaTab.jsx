import React, { useState } from "react";
import DataCard from "../../../components/DataCard";
import {
  lombaKedua,
  lombaKeempat,
  lombaKetiga,
  lombaPertama,
} from "../../../constants/dummy";
import { useNavigate } from "react-router-dom";

const LombaTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();
  return (
    <div role="tablist" className="tabs tabs-bordered ">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className={`tab ${
          activeTab == 1
            ? " tab-active tabs-bordered  border-primary text-primary"
            : "text-neutral80"
        }`}
        aria-label="Lomba Telah Approve"
        checked={activeTab === 1}
        onChange={() => setActiveTab(1)}
      />
      <div role="tabpanel" className="tab-content my-3">
        {lombaPertama.map((item, index) => (
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

      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className={`tab ${
          activeTab == 2
            ? "border-b-1 border-b-primary text-primary"
            : " text-neutral80"
        }`}
        aria-label="Lomba Perlu Approve"
        checked={activeTab === 2}
        onChange={() => setActiveTab(2)}
      />
      <div role="tabpanel" className="tab-content my-3">
        {lombaKedua.map((item, index) => (
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
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className={`tab ${
          activeTab == 3
            ? "border-b-1 border-b-primary text-primary"
            : " text-neutral80"
        }`}
        aria-label="Lomba Telah Selesai"
        checked={activeTab === 3}
        onChange={() => setActiveTab(3)}
      />
      <div role="tabpanel" className="tab-content my-3">
        {lombaKetiga.map((item, index) => (
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
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className={`tab ${
          activeTab == 4
            ? "border-b-1 border-b-primary text-primary"
            : " text-neutral80"
        }`}
        aria-label="Ditolak"
        checked={activeTab === 4}
        onChange={() => setActiveTab(4)}
      />
      <div role="tabpanel" className="tab-content my-3">
        {lombaKeempat.map((item, index) => (
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
    </div>
  );
};

export default LombaTab;
