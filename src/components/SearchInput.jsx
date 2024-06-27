import React from "react";
import Images from "../assets";
import PrimaryButton from "./Button";

const SearchInput = ({ textHolder }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden max-w-full h-16">
      <div className="pl-2">
        <img src={Images.Search} alt="search" className="h-5 w-5" />
      </div>
      <input
        type="text"
        placeholder={textHolder}
        className="flex-1 px-2 py-1 focus:outline-none bg-white"
      />
      <div className="py-3 px-4">
        <PrimaryButton title={"Search"} onTap={() => {}} />
      </div>
    </div>
  );
};

export default SearchInput;
