import React, { useState } from "react";
import DataCard from "../../../components/DataCard";
import { mentorAprove, mentorBelum } from "../../../constants/dummy";

const MentorTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div role="tablist" className="tabs tabs-bordered ">
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className={`tab ${
          activeTab == 1
            ? " tab-active tabs-bordered  border-primary text-primary"
            : ""
        }`}
        aria-label="Mentor Telah Approve"
        checked={activeTab === 1}
        onChange={() => setActiveTab(1)}
      />
      <div role="tabpanel" className="tab-content my-3">
        {mentorAprove.map((item, index) => (
          <div key={index} className="my-3">
            <DataCard
              key={item.id}
              buttonTitle="Lihat Profile"
              onTap={() => {}}
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
        aria-label="Mentor Perlu Approve"
        checked={activeTab === 2}
        onChange={() => setActiveTab(2)}
      />
      <div role="tabpanel" className="tab-content my-3">
        {mentorBelum.map((item, index) => (
          <div key={index} className="my-3">
            <DataCard
              key={item.id}
              buttonTitle="Lihat Profile"
              onTap={() => {}}
              title={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorTab;
