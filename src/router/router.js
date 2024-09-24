import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SideBar from "../components/common/SideBar";
import KanjiPage from "../pages/kanji/KanjiPage";
import Navbar from "../components/common/Navbar";
import KatakanaPage from "../pages/katakana/KatakanaPage";
import HiraganaPage from "../pages/hiragana/HiraganaPage";

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
        <Route index element={<Navigate to={"flashcard-kanji"} />} />
        <Route path={"flashcard-kanji"} element={<KanjiPage />} />
        <Route path={"flashcard-hiragana"} element={<HiraganaPage />} />
        <Route path={"flashcard-katakana"} element={<KatakanaPage />} />
        <Route path="*" element={<Navigate to={`../${"flashcard-kanji"}`} />} />
      </Routes>
    </div>
  );

  return <BrowserRouter>{routes()}</BrowserRouter>;
};

export default Router;
