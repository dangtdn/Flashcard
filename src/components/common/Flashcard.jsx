import React from "react";

import { Card, CardContent, CardFooter } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function Flashcard({ data }) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {data?.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="group perspective w-64 h-64 [perspective:1000px]">
                <Card className="relative h-full w-full rounded-xl shadow-black transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absoblute inset-0 h-full">
                    <img
                      className="h-full w-full rounded-xl object-cover"
                      src={item.srcImg}
                      alt="img-kanji"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-2xl font-[700]">
                      {item.chineseCharacters}
                    </p>
                    <p className="text-xl  font-[400]">
                      {item.vietnamCharacters}
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
  );
}

export default Flashcard;
