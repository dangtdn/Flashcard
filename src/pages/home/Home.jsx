import React, { useState } from "react";
import Flashcard from "../../components/common/Flashcard";
import { kanji_N5 } from "../../assets/list-kanji-N5";
import { Button } from "../../components/ui/button";

const HomePage = () => {
  const [cards, setCards] = useState(kanji_N5);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi vị trí
    }
    return array;
  };

  const handleClickRandom = () => {
    const shuffledArray = shuffleArray(kanji_N5);
    setCards([...shuffledArray]);
  };

  return (
    <main className="md:pl-56 h-full md:pt-0 pt-[80px]">
      {/* Main content area with padding for top and left */}
      <div className="p-6">
        <p className="text-3xl font-bold uppercase">Flashcard Kanji N5</p>
        <div className="h-full flex justify-center items-center p-6">
          <Flashcard data={cards} />
        </div>
        <div className="h-full flex justify-start items-center gap-3 p-6">
          <Button onClick={handleClickRandom}>Random</Button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
