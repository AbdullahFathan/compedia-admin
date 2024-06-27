import React from "react";
import Images from "../assets";
import { NavLink } from "react-router-dom";
import sidebarItem from "../constants/sidebar";
import IconMenu from "../assets/IconMenu";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar justify-between ">
      <img src={Images.LogoApp} alt="logo" />
      <div className="flex md:hidden flex-1 justify-end items-end  z-10">
        <button type="button" onClick={() => setOpen((prev) => !prev)}>
          <IconMenu />
        </button>
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-20 right-0 bg-neutural-white w-screen `}
        >
          <ul className="space-y-2 font-medium px-2 pt-2">
            {sidebarItem.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className="flex items-center w-screen font-semibold p-2 text-gray-900 hover:text-white hover:bg-primary "
                >
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {item.title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
