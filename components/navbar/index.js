import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div class="sticky top-0 z-10 w-full bg-white flex flex-col lg:flex-row items-center justify-between p-5">
      <div class="mb-4 lg:mb-0 lg:mr-10">
        <img src="/assets/static/logo/logo.svg" alt="Logo" />
      </div>
      <div class={`flex flex-col lg:flex-row items-center lg:items-stretch lg:gap-3 ${showMenu ? "block" : "hidden lg:flex"}`}>
        <Link href="#experience">
          <p class="text-gray-500 font-bold px-4 py-1 rounded-md transition hover:bg-white hover:text-black lg:hover:bg-white lg:hover:text-black">
            Experience
          </p>
        </Link>
        <Link href="/achievement">
          <p class="text-gray-500 font-bold px-4 py-1 rounded-md transition hover:bg-white hover:text-black lg:hover:bg-white lg:hover:text-black">
            Achievement
          </p>
        </Link>
        <Link href="/journal">
          <p class="text-gray-500 font-bold px-4 py-1 rounded-md transition hover:bg-white hover:text-black lg:hover:bg-white lg:hover:text-black">
            Journal
          </p>
        </Link>
        <Link href="/portofolio">
          <p class="text-gray-500 font-bold px-4 py-1 rounded-md transition hover:bg-white hover:text-black lg:hover:bg-white lg:hover:text-black">
            Portfolio
          </p>
        </Link>
      </div>
      {/* add hamburger button */}
      <div class="flex lg:hidden">
        <button class="mobile-menu-button" onClick={toggleMenu}>
          <svg
            class="w-6 h-6 text-gray-500 hover:text-red-600"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
