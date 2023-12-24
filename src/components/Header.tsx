import { Navigation } from "./Navigation/Navigation";

export function Header() {
  return (
    <header className="fixed top-0 flex h-24 w-screen items-center p-6 md:pl-10 xl:top-10 xl:pl-14">
      <Navigation />
    </header>
  );
}
