"use client";

import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
    const [visitors, setVisitors] = useState<number | null>(null);

    useEffect(() => {
        fetch("/api/visitors")
            .then((response) => response.json())
            .then((data: { count?: number }) => {
                if (typeof data.count === "number") setVisitors(data.count);
            })
            .catch(() => undefined);
    }, []);

    return (
        <footer className="mx-auto w-full max-w-3xl px-6 pb-12 pt-20 text-sm text-zinc-500">
            <div className="space-y-16">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-3">
                        <p className="text-lg text-zinc-300"># let&apos;s build something</p>
                        <p className="text-sm text-zinc-600">backend systems, full-stack products, and technical experiments</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="https://github.com/Abhaysoft-inc" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex size-9 items-center justify-center rounded-lg bg-zinc-200 text-zinc-900 transition-colors hover:bg-emerald-400"><FaGithub /></a>
                        <a href="https://linkedin.com/in/abhayvis" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex size-9 items-center justify-center rounded-lg bg-zinc-200 text-zinc-900 transition-colors hover:bg-emerald-400"><FaLinkedin /></a>
                        <a href="https://twitter.com/abhayofc" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="flex size-9 items-center justify-center rounded-lg bg-zinc-200 text-zinc-900 transition-colors hover:bg-emerald-400"><FaTwitter /></a>
                        <a href="mailto:abhay.24305@knit.ac.in" aria-label="Email" className="flex size-9 items-center justify-center rounded-lg bg-zinc-200 text-zinc-900 transition-colors hover:bg-emerald-400"><FaEnvelope /></a>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-white/5 pt-6 text-xs md:flex-row md:items-end md:justify-between">
                    <div className="space-y-1">
                        <p>Designed &amp; developed by <span className="font-semibold text-zinc-300">Abhay Vishwakarma</span></p>
                        <p>© 2026 All rights reserved.</p>
                    </div>
                    <div className="text-left md:text-right">
                        <p>Visitors <span className="font-semibold text-zinc-300">#{visitors?.toLocaleString() ?? "—"}</span></p>
                        <p className="font-semibold text-zinc-300">Open to interesting problems</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
