import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SideBar from "../components/common/SideBar";
import HomePage from "../pages/home/Home";
import Navbar from "../components/common/Navbar";

const Router = () => {
  const routes = () => (
    <div className="h-full">
      <div className="md:hidden h-[80px] md:pl-56 fixed inset-y-0 w-full">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <SideBar />
      </div>
      <Routes>
        <Route index element={<Navigate to={"flashcard"} />} />
        <Route path={"flashcard"} element={<HomePage />} />
        <Route path="*" element={<Navigate to={`../${"flashcard"}`} />} />
      </Routes>
    </div>
  );

  return <BrowserRouter>{routes()}</BrowserRouter>;
};

export default Router;
