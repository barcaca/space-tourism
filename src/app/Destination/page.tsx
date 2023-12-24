"use client";
import React, { useState } from "react"; // Core React library and hook
import cn from "@/utils/cn"; // Utility function for class names
import { useAnimatedItemController } from "@/utils/animationHooks";
import Image from "next/image"; // Image component from Next.js
import { destinationsData } from "@/data/data"; // Data import

import { Button } from "@/components/Button"; // UI components
import { Title } from "@/components/Title";

export default function Destination() {
  const {
    activeIndex,
    activeItem: activeDestination,
    animationClass,
    handleButtonClick,
  } = useAnimatedItemController(0, destinationsData, "animate-fade-left");

  return (
    <main className="mt-[88px] h-full w-full md:mt-[136px] xl:mt-[212px]">
      <div className="flex flex-col items-center justify-center md:items-start xl:grid xl:grid-cols-2 xl:grid-rows-[repeat(6,100px)] xl:pl-40 xl:pr-20">
        <div className="mb-8 px-6 md:mb-16 md:px-10 xl:px-0">
          <Title number={"01"} text={"Pick Your Destination"} />
        </div>
        <div
          className={cn(
            "relative -z-10 mx-auto mb-6 h-44 w-44 rounded-full shadow-md md:mb-10 md:h-72 md:w-72 xl:row-start-2 xl:mx-0 xl:mb-0 xl:h-[450px] xl:w-[450px]",
            animationClass,
          )}
        >
          <Image
            src={activeDestination.images.png}
            alt={activeDestination.name}
            fill
            sizes="100%"
            priority
            className=" rounded-full object-cover"
          />
        </div>
        <div className="flex h-9 gap-6 self-center md:gap-9">
          {destinationsData.map((tech, index) => (
            <Button
              key={tech.name}
              intent={"tabs"}
              index={index}
              data-variant={"tabs"}
              text={tech.name}
              activeIndex={activeIndex}
              onClick={handleButtonClick}
            />
          ))}
        </div>
        <div className="mx-auto flex max-w-lg flex-col px-6 text-center md:px-0 xl:row-span-2 xl:row-start-2 xl:mx-0 xl:text-left">
          <h3 className="text-3xl uppercase text-white md:text-[80px] xl:text-4xl">
            {activeDestination.name}
          </h3>
          <p className="text-[15px] leading-6 text-indigo-200 md:text-base md:leading-7 xl:max-w-sm xl:text-lg xl:leading-8">
            {activeDestination.description}
          </p>
        </div>
        <hr className="-z-10 mx-auto mt-8 h-px w-[80%] bg-white opacity-25 xl:col-start-2 xl:row-start-5 xl:mx-0 xl:mr-auto xl:w-[65%]" />
        <div className="mx-auto mt-8 flex flex-col gap-8 md:flex-row md:gap-12 xl:col-start-2 xl:row-start-6 xl:mx-0 xl:-mt-11 xl:gap-16">
          <div className="flex flex-col items-center gap-2 xl:items-start">
            <p className="font-body text-sm uppercase tracking-[.15rem] text-indigo-200">
              Avg. Distance
            </p>
            <h6 className="text-xl uppercase text-white">
              {activeDestination.distance}
            </h6>
          </div>
          <div className="flex flex-col items-center gap-2 xl:items-start">
            <p className="font-body text-sm uppercase tracking-[.15rem] text-indigo-200">
              Est. Travel Time
            </p>
            <h6 className="text-xl uppercase text-white">
              {activeDestination.travel}
            </h6>
          </div>
        </div>
      </div>
    </main>
  );
}
