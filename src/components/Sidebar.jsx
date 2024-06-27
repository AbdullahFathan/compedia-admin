import React from "react";
import sidebarItem from "../constants/sidebar";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className=" z-40 w-64  h-min mt-8 left-0 hidden md:flex  bg-neutural-white border border-border rounded-xl"
      aria-label="Sidebar"
    >
      <div className="h-full ml-3 pb-4 overflow-y-auto bg-neutural-white">
        <p className=" mt-3  mb-6 text-xl text-textBlack font-semibold">
          Admin Compedia
        </p>
        <ul className="space-y-2 font-medium">
          {sidebarItem.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className="flex items-center font-semibold py-2 px-2 text-gray-900 hover:text-white hover:bg-primary"
              >
                <span className="flex-1  whitespace-nowrap">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
