import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Card } from "../../components/ui/card";
import { hiragana } from "../../assets/list-hiragana";

const HiraganaPage = () => {
  const [cards, setCards] = useState(hiragana);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Hoán đổi vị trí
    }
    return array;
  };

  const handleClickRandom = () => {
    const shuffledArray = shuffleArray(hiragana);
    setCards([...shuffledArray]);
  };

  return (
    <main className="md:pl-56 h-full md:pt-0 pt-[80px]">
      {/* Main content area with padding for top and left */}
      <div className="p-6">
        <p className="text-3xl font-bold uppercase">Flashcard Hiragana</p>
        <div className="h-full flex justify-center items-center p-6">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {cards?.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="group perspective w-64 h-64 [perspective:1000px]">
                      <Card className="relative h-full w-full rounded-xl shadow-black transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absoblute inset-0 h-full flex items-center justify-center">
                        <p className="text-8xl font-[700]">{item.character}</p>
                        </div>
                        <div className="gap-6 flex flex-col items-center justify-center absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                          <p className="text-6xl font-bold">
                            {item.romanji}
                          </p>
                          <p className="text-xl font-[500]">
                            <span className="text-2xl font-bold">{item.example}</span>
                            <br /> <span className="text-xl font-semibold">{item.meaning}</span>
                          </p>
                        </div>
                      </Card>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="h-full flex justify-start items-center gap-3 p-6">
          <Button onClick={handleClickRandom}>Random</Button>
        </div>
      </div>
    </main>
  );
};

export default HiraganaPage;
