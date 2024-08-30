import React from "react";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  return (
    <div className="p-4 border-b border-slate-600 h-full flex items-center bg-white shadow-sm">
      <MobileSideBar />
    </div>
  );
};

export default Navbar;
