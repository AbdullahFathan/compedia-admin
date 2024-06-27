import React from "react";

const DetailText = ({ title, detail }) => {
  return (
    <div className="grid grid-cols-2 gap-x-0">
      <h3 className="text-textBlack font-medium text-sm">{title}</h3>
      <p className="text-textBlack text-sm">{detail}</p>
    </div>
  );
};

export default DetailText;
