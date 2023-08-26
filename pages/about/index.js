import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function About() {
  return (
    <div>
    <Navbar />
      <h1>About</h1>
      <Link href="/">
        <p>Home</p>
      </Link>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
  );
}
