"use client";

import React, { useState } from "react"; // Core React library and hook
import cn from "@/utils/cn"; // Utility function for class names
import { useAnimatedItemController } from "@/utils/animationHooks";
import Image from "next/image"; // Image component from Next.js
import { technologyData } from "@/data/data"; // Data import

import { Button } from "@/components/Button"; // UI components
import { Title } from "@/components/Title";

export default function Technology() {
  const {
    activeIndex,
    activeItem: activeTechnology,
    animationClass,
    handleButtonClick,
  } = useAnimatedItemController(0, technologyData, "animate-fade");

  return (
    <main className="mt-[88px] h-full w-full md:mt-[136px] xl:mt-[212px]">
      <div className="flex flex-col items-center justify-center gap-8 md:items-start md:gap-12  xl:grid xl:grid-cols-[auto_auto_1fr] xl:items-center xl:gap-y-6 xl:pl-40">
        <div className="col-span-3 px-6 md:px-10 xl:px-0">
          <Title number={"03"} text={"Space Launch 101"} />
        </div>
        <div
          className={cn(
            "relative -z-10 h-44 w-full shadow-md  md:h-80 xl:col-start-3 xl:flex xl:h-[527px] xl:w-[515px] xl:justify-self-end",
            animationClass,
          )}
        >
          <Image
            src={activeTechnology.images.portrait}
            alt={activeTechnology.name}
            fill
            priority
            sizes="100%"
            className="hidden w-full object-cover xl:block"
          />
          <Image
            src={activeTechnology.images.landscape}
            alt={activeTechnology.name}
            fill
            priority
            sizes="100%"
            className="w-full object-cover md:object-fill xl:hidden"
          />
        </div>
        <div className="flex gap-3 self-center md:gap-4 xl:col-start-1 xl:row-start-2 xl:flex-col xl:gap-8">
          {technologyData.map((tech, index) => (
            <Button
              key={tech.name}
              intent={"button"}
              index={index}
              data-variant={"button"}
              activeIndex={activeIndex}
              onClick={handleButtonClick}
            />
          ))}
        </div>
        <div className="mx-auto flex max-w-lg flex-col px-6 text-center md:gap-4 xl:col-start-2 xl:row-start-2 xl:px-0 xl:text-left">
          <p className="font-body text-sm uppercase tracking-[.15rem] text-indigo-200 md:text-base">
            The Terminology…
          </p>
          <h2 className="text-[24px] uppercase text-white md:text-[40px]/9 xl:text-3xl/[64px]">
            {activeTechnology.name}
          </h2>
          <p className="mt-3 text-[15px] leading-6 text-indigo-200 md:mt-0 md:text-base md:leading-8 xl:pr-8 xl:text-lg">
            {activeTechnology.description}
          </p>
        </div>
      </div>
    </main>
  );
}
