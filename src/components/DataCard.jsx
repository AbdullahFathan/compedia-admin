import React from "react";

const DataCard = ({ title, buttonTitle, onTap }) => {
  return (
    <div className="flex justify-between items-center py-2 px-4 border border-border rounded-lg">
      <p className="text-base text-textBlack ">{title}</p>
      <button type="button" className="btn btn-ghost text-primary ">
        {buttonTitle}
      </button>
    </div>
  );
};

export default DataCard;
