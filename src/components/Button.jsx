import React from "react";

const Button = ({ title, onTap, butonType, formId }) => {
  return (
    <button
      type={butonType ?? "button"}
      form={formId ?? undefined}
      className="btn btn-active btn-primary bg-primary text-white text-center"
      onClick={onTap}
    >
      {title}
    </button>
  );
};

export default Button;
