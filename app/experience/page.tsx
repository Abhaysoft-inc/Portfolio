import Link from "next/link";
import Image from "next/image";
import { ExperienceItem } from "@/components/ExperienceItem";

export default function ExperiencePage() {
    return (
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 space-y-24 w-full">
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Work Experience</h2>
                    <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">Back Home</Link>
                </div>

                <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                    <ExperienceItem
                      year="2026"
                      title="Software Engineering Intern – HITAI"
                      company="Remote, London, UK"
                      logoUrl="/logos/hitai.png"
                      logoAlt="HITAI"
                      descriptionItems={[
                        "Built a low-latency video streaming pipeline using Python, FastAPI, and WebRTC for real-time combat sports broadcasts.",
                        "Engineered infrastructure to ingest live boxing event streams, process video through ML/CV services, and deliver analyzed streams back to viewers with minimal latency.",
                        "Developed backend APIs and streaming services for reliable real-time video ingestion, processing, and distribution.",
                        "Optimized media delivery workflows and request handling to improve stream stability during live events."
                      ]}
                    />

                    <ExperienceItem
                      year="2026"
                      title="Full Stack Developer Intern – OGCollege"
                      company="Remote"
                      logoUrl="/logos/ogcollege.svg"
                      logoAlt="OGCollege"
                      descriptionItems={[
                        "Contributed to a production platform built with TypeScript, PostgreSQL, and Redis.",
                        "Merged 15+ pull requests across product features, backend services, and platform improvements.",
                        "Implemented feature paywalls and access-control mechanisms that contributed to 100% increase in revenue.",
                        "Collaborated on scalable backend systems and performance improvements for a growing user base."
                      ]}
                    />

                    <ExperienceItem
                      year="2026"
                      title="Backend Developer - Effulgence'26"
                      company="KNIT Sultanpur"
                      logoUrl="/logos/effulgence.png"
                      logoAlt="Effulgence"
                      descriptionItems={[
                        "Engineered backend infrastructure supporting 1000+ users with high availability and minimal downtime.",
                        "Architected RESTful APIs and optimized database workflows handling 5000+ registrations.",
                        "Implemented secure authentication and user management systems, reducing manual coordination by 70%.",
                        "Reduced API response time by 35% through query optimization and efficient database design.",
                        "Improved system reliability during peak traffic through efficient request handling and performance tuning."
                      ]}
                    />
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
                        <Image src="/achivements/rift.jpeg" alt="RIFT 2026 Hackathon" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                        <h3 className="font-bold text-sm md:text-base text-white z-20 relative">1st Place - RIFT 2026 Hackathon (500+ teams) - Built AI-based pharmacogenomic analyzer; led backend and architecture</h3>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
                        <Image src="/achivements/hackwithup.jpeg" alt="HackWithUP Hackathon" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                        <h3 className="font-bold text-sm md:text-base text-white z-20 relative">2nd Place - HackWithUP Hackathon (300+ teams) - AI-powered medical scribe for Indic languages</h3>
                    </div>
                    <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
                        <Image src="/achivements/nasa-sac.jpeg" alt="NASA Space Apps Challenge 2025" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
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