interface TitleProps {
  number: string;
  text: string;
}

export function Title({ number, text }: TitleProps) {
  return (
    <h6 className="font-body uppercase tracking-[.15rem] text-white md:text-[20px] md:tracking-[.2rem] xl:text-xl xl:tracking-[.3rem]">
      <span className="mr-4 font-body font-bold  text-white/50 opacity-25">
        {number}
      </span>
      {text}
    </h6>
  );
}
