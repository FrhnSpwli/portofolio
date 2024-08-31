"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Typed from "typed.js";

export default function Hero() {
  useEffect(() => {
    const options = {
      strings: [
        "Front-End Developer</i>",
        "Product Manager",
        "Back-End Developer",
        "Full-Stack Developer",
      ],
      typeSpeed: 80,
      backDelay: 1000,
      loop: true,
      backSpeed: 100,
    };

    const typed = new Typed(".element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div class="flex flex-col lg:flex-row h-full justify-between">
      <div class="lg:w-1/2">
        <img
          src="/assets/static/hero/sappe1.svg"
          alt="Sappe"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="flex flex-col justify-center items-center lg:items-start gap-10 w-full lg:w-1/2 p-12">
        <div class="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
          <p class="text-3xl font-bold">Hello There👋</p>
          <p class="text-7xl font-bold">Andi Farhan Sappewali</p>
          <p class="text-5xl font-bold">
            <span class="element text-red-600"></span>
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <p class="text-3xl font-bold">Let's Connect</p>
          <div class="flex flex-col lg:flex-row gap-5">
            <Link href="/portofolio">
              <p class="bg-red-600 hover:bg-red-700 text-white text-center text-lg font-bold py-3 px-6 rounded-lg w-40">
                Portfolio
              </p>
            </Link>
            <Link href="/contact">
              <p class="bg-red-600 hover:bg-red-700 text-white text-center text-lg font-bold py-3 px-6 rounded-lg w-40">
                Contact Me
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
