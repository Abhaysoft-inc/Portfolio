import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function ExperiencePage() {
    return (
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 space-y-24 w-full">
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Work Experience</h2>
                    <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">Back Home</Link>
                </div>

                <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                    {/* Experience Item */}
                    <div className="relative flex items-start group py-4">
                        <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#111315] text-white shadow z-10 shrink-0">
                            <div className="w-5 h-5 rounded-full border-[3px] border-emerald-500"></div>
                        </div>
                        <div className="w-full pl-16 flex justify-between items-start gap-6 border-b border-white/5 pb-6 hover:border-white/10 transition-colors">
                            <div className="flex flex-col space-y-1">
                                <span className="text-xs text-zinc-500 font-medium">2026</span>
                                <h3 className="text-lg font-bold text-zinc-200">Backend Developer - Effulgence'26</h3>
                                <span className="text-sm text-zinc-400">KNIT Sultanpur</span>
                                <ul className="text-xs text-zinc-500 mt-2 list-disc list-outside pl-4 space-y-1">
                                    <li>Engineered backend infrastructure supporting 1000+ users with high availability and minimal downtime.</li>
                                    <li>Architected RESTful APIs and optimized database workflows handling 5000+ registrations.</li>
                                    <li>Implemented secure authentication and user management systems, reducing manual coordination by 70%.</li>
                                    <li>Reduced API response time by 35% through query optimization and efficient database design.</li>
                                    <li>Improved system reliability during peak traffic through efficient request handling and performance tuning.</li>
                                </ul>
                            </div>
                            <div className="px-4 pt-1">
                                <FaChevronDown className="text-zinc-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">Education</h2>
                <div className="bg-[#1c2024] rounded-2xl p-5 border border-white/5">
                    <div className="flex flex-col space-y-1">
                        <span className="text-xs text-zinc-500 font-medium">2024 - 2028</span>
                        <h3 className="text-lg font-bold text-zinc-200">KNIT Sultanpur</h3>
                        <span className="text-sm text-zinc-400">Bachelor of Technology in Electrical Engineering</span>
                        <span className="text-xs text-zinc-500">Minor in AI ML</span>
                    </div>
                </div>
            </section>

            {/* Achievements copied from original structure for completion content */}
            <section className="space-y-8">
                <h2 className="text-2xl font-bold text-white tracking-tight">Achievements</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                        <h3 className="font-bold text-sm md:text-base text-white z-20 relative">1st Place - RIFT 2026 Hackathon (500+ teams) - Built AI-based pharmacogenomic analyzer; led backend and architecture</h3>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                        <h3 className="font-bold text-sm md:text-base text-white z-20 relative">2nd Place - HackWithUP Hackathon (300+ teams) - AI-powered medical scribe for Indic languages</h3>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                        <h3 className="font-bold text-sm md:text-base text-white z-20 relative">3rd Place - NASA Space Apps Challenge 2025 (30+ teams)</h3>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                        <h3 className="font-bold text-sm md:text-base text-white z-20 relative">Identified critical security vulnerabilities including subdomain takeover in python.org and SQL injection in Cambridge systems</h3>
                    </div>
                </div>
            </section>
        </main>
    );
}