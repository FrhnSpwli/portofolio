import 'tailwindcss/tailwind.css'
import Link from "next/link";


export default function Footer() {
    return (
        <div class="w-full bg-gray-700 flex items-center justify-between p-5">
            <div class="flex text-center justify-center">
            <p class="text-white">
            &copy; 2021 - All rights reserved by Sappe
            </p>
            </div>
            <div class="flex justify-between text-center gap-3 ">
                <Link href="/">
                <p class="text-white">Homepage</p>
                </Link>
                <Link href="/about">
                <p class="text-white">About</p>
                </Link>
                <Link href="/project">
                <p class="text-white">Project</p>
                </Link>
                <Link href="/contact">
                <p class="text-white">Reach Me</p>
                </Link>
            </div>
        </div>
    );
}