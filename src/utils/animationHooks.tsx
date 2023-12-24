import { useState } from "react";

export function useAnimatedItemController(
  initialIndex: number, // - `initialIndex`: The initial index of the active item.
  data: any[], // - `data`: The array of items to be displayed.
  animationClassDefault: string, // - `animationClassDefault`: The default animation class to be applied to the active item.
) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const activeItem = data[activeIndex]; // Keep activeItem in sync with activeIndex
  const [animationClass, setAnimationClass] = useState("");

  // Function to handle button clicks for item switching with animation
  const handleButtonClick = (index?: number) => {
    // Ensure a valid index is provided before proceeding
    if (index !== undefined) {
      // 1. Set animation class to initiate the animation
      setAnimationClass(animationClassDefault);
      // 2. Update the active item index to reflect the clicked item
      setActiveIndex(index);
      // 3. Use setTimeout to clear the animation class after a delay, ensuring visual completion
      setTimeout(() => {
        setAnimationClass("");
      }, 500); // Delay of 500 milliseconds for animation duration
    }
  };

  return { activeIndex, activeItem, animationClass, handleButtonClick };
}
