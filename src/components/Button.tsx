import React, { ButtonHTMLAttributes } from "react"; // Core React library and types
import cn from "@/utils/cn"; // Utility function for class names
import { VariantProps, cva } from "class-variance-authority"; // Third-party library

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    VariantProps<typeof buttonVariant> {
  index?: number;
  activeIndex: number;
  onClick: (index?: number) => void;
  text?: string;
}

export function Button({
  index,
  activeIndex,
  onClick,
  intent,
  text,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className={cn(
        buttonVariant({ intent, className }),
        index === activeIndex
          ? "data-[variant='button']:border-0 data-[variant='tabs']:border-b-2 data-[variant='tabs']:border-white data-[variant='button']:bg-white data-[variant='slider']:bg-white data-[variant='tabs']:text-white"
          : "data-[variant='button']:text-white ",
      )}
      {...props}
    >
      {text}
      {intent === "button" && index !== undefined ? index + 1 : null}
    </button>
  );
}

const buttonVariant = cva(["transition-all"], {
  variants: {
    intent: {
      button: [
        "rounded-full",
        "h-10",
        "w-10",
        "border",
        "border-gray-500",
        "hover:border-white",
        "md:h-16",
        "md:w-16",
        "md:text-xl",
      ],
      slider: [
        "rounded-full",
        "h-[10px]",
        "w-[10px]",
        "bg-gray-700",
        "hover:bg-gray-500",
        "xl:h-[15px]",
        "xl:w-[15px]",
      ],
      tabs: [
        "font-body",
        "pb-1",
        "tracking-[.15rem]",
        "text-sm",
        "md:text-base",
        "uppercase",
        "text-gray-500",
        "hover:text-white/40",
      ],
    },
  },
});
