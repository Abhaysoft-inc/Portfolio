"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBookOpen, FaBriefcase, FaFolder, FaHome, FaMoon, FaUser } from "react-icons/fa";

export default function Navbar() {
    const pathname = usePathname();

    // Highlight active link simple check
    const isActive = (path: string) => pathname === path ? "text-white bg-white/10" : "text-zinc-400 hover:text-white";

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[90vw]">
            <div className="flex justify-center items-center gap-4 md:gap-6 px-4 md:px-6 py-3 bg-[#1c2024]/80 backdrop-blur-md rounded-full border border-white/5 shadow-lg text-xs md:text-sm font-medium">
                <Link href="/" className={`flex items-center gap-2 p-1.5 rounded-lg shrink-0 transition-colors ${pathname === "/" ? "bg-[#252a30] text-emerald-400" : "text-zinc-400 hover:text-emerald-400"}`}>
                    <FaHome />
                </Link>
                <Link href="/about" className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors shrink-0 ${isActive("/about")}`}>
                    <FaUser /> <span className="hidden sm:inline">About</span>
                </Link>
                <Link href="/experience" className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors shrink-0 ${isActive("/experience")}`}>
                    <FaBriefcase /> <span className="hidden sm:inline">Experience</span>
                </Link>
                <Link href="/projects" className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors shrink-0 ${isActive("/projects")}`}>
                    <FaFolder /> <span className="hidden sm:inline">Projects</span>
                </Link>
                <Link href="/blogs" className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors shrink-0 ${isActive("/blogs")}`}>
                    <FaBookOpen /> <span className="hidden sm:inline">Blogs</span>
                </Link>
                <button className="p-1 hover:text-white transition-colors ml-1 md:ml-2 shrink-0 text-zinc-400"><FaMoon /></button>
            </div>
        </nav>
    );
}
