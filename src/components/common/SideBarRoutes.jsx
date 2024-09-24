import React from "react";
import SideBarItem from "./SideBarItem";

const routes = [
  {
    icon: '一',
    label: "Kanji",
    href: "flashcard-kanji",
  },
  {
    icon: 'あ',
    label: "Hiragana",
    href: "flashcard-hiragana",
  },
  {
    icon: 'ア',
    label: "Katakana",
    href: "flashcard-katakana",
  },
];

const SideBarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map(({ label, icon, href }) => (
        <SideBarItem key={href} label={label} icon={icon} href={href} />
      ))}
    </div>
  );
};

export default SideBarRoutes;
