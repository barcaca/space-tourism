"use client";
import React, { useState } from "react"; // Core React library and hook
import cn from "@/utils/cn"; // Utility function for class names
import { useAnimatedItemController } from "@/utils/animationHooks";
import Image from "next/image"; // Image component from Next.js
import { crewData } from "@/data/data"; // Data import

import { Button } from "@/components/Button"; // UI components
import { Title } from "@/components/Title";

export default function Crew() {
  const {
    activeIndex,
    activeItem: activeCrew,
    animationClass,
    handleButtonClick,
  } = useAnimatedItemController(0, crewData, "animate-fade-left");

  return (
    <main className="mt-[88px] h-full w-full md:mt-[136px] xl:mt-[212px]">
      <div className="flex grid-cols-1 flex-col items-center justify-center md:grid xl:grid-cols-2 xl:grid-rows-[repeat(6,100px)] xl:pl-40 xl:pr-20">
        <div className="mb-8 px-6 md:mb-16 md:px-10 xl:px-0">
          <Title number={"02"} text={"Meet Your Crew"} />
        </div>
        <div
          className={cn(
            "relative -z-10 mx-auto h-60 w-80 md:row-start-4 md:h-[470px] md:w-[540px] xl:col-start-2 xl:row-span-6 xl:row-start-1 xl:h-[580px] xl:w-[615px]",
            animationClass,
          )}
        >
          <Image
            src={activeCrew.images.png}
            alt={activeCrew.name}
            fill
            sizes="100%"
            priority
            className="object-contain"
          />
        </div>
        <hr className="-z-10 mx-auto mb-8 h-px w-[80%] bg-white opacity-25 md:row-start-5 md:mb-0 xl:col-start-2 xl:row-start-7 xl:-mt-5 xl:w-[90%]" />

        <div className="mb-8 flex gap-4 self-center md:row-start-3 md:my-10 md:justify-center md:gap-9 xl:row-start-6 xl:-mt-6 xl:justify-start">
          {crewData.map((tech, index) => (
            <Button
              key={tech.name}
              intent={"slider"}
              index={index}
              data-variant={"slider"}
              activeIndex={activeIndex}
              onClick={handleButtonClick}
            />
          ))}
        </div>
        <div className="mx-auto flex max-w-lg flex-col px-6 text-center md:gap-4 xl:col-start-1 xl:row-start-3 xl:mx-0 xl:mr-auto xl:max-w-full xl:px-0 xl:text-left">
          <h6 className="uppercase text-white/50 md:text-[24px] xl:text-2xl/9 ">
            {activeCrew.role}
          </h6>
          <h2 className="text-[24px] uppercase text-white md:text-[40px]/[46px] xl:text-3xl/[64px]">
            {activeCrew.name}
          </h2>
          <p className="mt-3 text-[15px] leading-6 text-indigo-200 md:mt-0 md:text-base md:leading-8 xl:pr-8">
            {activeCrew.bio}
          </p>
        </div>
      </div>
    </main>
  );
}
