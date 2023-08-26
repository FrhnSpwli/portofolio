import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Project from "@/components/project";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Footer />
    </>
  );
}
