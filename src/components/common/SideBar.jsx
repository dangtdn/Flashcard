import React from "react";
import Logo from "./Logo";
import SideBarRoutes from "./SideBarRoutes";

const SideBar = () => {
  return (
    <div className="h-full border-r border-slate-600 flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 flex items-center">
        <Logo />
        <span className="text-3xl font-mono font-bold text-slate-500 pl-2">
          Quiz
        </span>
      </div>
      <div className="flex flex-col w-full">
        <SideBarRoutes />
      </div>
    </div>
  );
};

export default SideBar;
