import React from "react";

const PrimaryButton = ({ title, onTap, butonType, formId }) => {
  return (
    <button
      type={butonType ?? "button"}
      form={formId ?? undefined}
      className="btn btn-active btn-primary bg-primary text-white text-center w-full"
      onClick={onTap}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
