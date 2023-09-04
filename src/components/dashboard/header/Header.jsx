import React from "react";
import { Admin, Logo, Search } from "./content";

function Header() {
  return (
    <header className="flex items-center justify-between gap-5 bg-[#fbfbfb] border-b px-2 py-5 sm:px-8">
      <Logo />
      <Search />
      <Admin />
    </header>
  );
}

export default Header;
