import React from "react";

import { Card, CardContent, CardFooter } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function Flashcard({ data, hidden }) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="shadow-black">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={item.srcImg} alt="img-kanji" />
                </CardContent>
                <CardFooter
                  className={`flex flex-col justify-center items-center ${
                    hidden && "opacity-0"
                  }`}
                >
                  <p className="text-2xl font-[700]">
                    {item.chineseCharacters}
                  </p>
                  <p className="text-xl  font-[400]">
                    {item.vietnamCharacters}
                  </p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Flashcard;
