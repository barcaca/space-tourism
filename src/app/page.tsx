import Link from "next/link"; // Third-party component from Next.js

export default function Home() {
  return (
    <main className="mt-28 flex flex-col items-center gap-20 px-6 md:mt-[202px] md:gap-40 xl:mx-auto xl:mt-96 xl:flex-row  xl:justify-between xl:px-40">
      <div className="flex flex-col items-center gap-4 md:max-w-md md:gap-6 xl:items-start">
        <p className="font-body uppercase tracking-[.15em] text-indigo-200 md:text-[20px] md:tracking-[.2em] xl:text-xl">
          So, you want to travel to
        </p>
        <h1 className="text-[80px] uppercase text-white md:text-5xl md:leading-[1.15]">
          Space
        </h1>
        <p className="px-1 text-center text-[15px] text-indigo-200 md:text-base xl:text-left xl:text-lg">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <Link
        href={"/Destination"}
        className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white font-heading text-[20px] uppercase transition-all hover:ring-[4rem] hover:ring-white/10 md:h-60 md:w-60 md:text-2xl"
      >
        Explore
      </Link>
    </main>
  );
}
