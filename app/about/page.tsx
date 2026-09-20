import { FaAws, FaDocker, FaEnvelope, FaGithub, FaGitAlt, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiSolidity, SiTypescript, SiWebrtc } from "react-icons/si";
import type { IconType } from "react-icons";

const skillGroups: { title: string; skills: [string, IconType][] }[] = [
    {
        title: "Languages",
        skills: [
            ["TypeScript", SiTypescript],
            ["JavaScript", SiJavascript],
            ["Solidity", SiSolidity],
            ["C++", SiCplusplus],
        ],
    },
    {
        title: "Frameworks",
        skills: [
            ["Next.js", SiNextdotjs],
            ["React.js", SiReact],
            ["Node.js", SiNodedotjs],
            ["WebRTC", SiWebrtc],
            ["REST APIs", FaGitAlt],
        ],
    },
    {
        title: "Data & Tools",
        skills: [
            ["PostgreSQL", SiPostgresql],
            ["MongoDB", SiMongodb],
            ["Prisma", SiPrisma],
            ["Git", FaGitAlt],
            ["Docker", FaDocker],
            ["AWS", FaAws],
        ],
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen w-full bg-[#0d0f10] px-6 pb-24 pt-32 text-zinc-300">
            <div className="mx-auto max-w-3xl space-y-16">
                <header className="space-y-5">
                    <p className="text-sm font-medium text-emerald-500">About</p>
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Abhay <span className="text-red-500">Vishwakarma</span>
                    </h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
                        Software engineer building backend systems, AI products, APIs, and practical applications.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2 text-xs text-zinc-500">
                        <span className="flex items-center gap-2"><FaPhone className="text-emerald-500" /> +91 8948041722</span>
                        <a href="mailto:abhay.24305@knit.ac.in" className="flex items-center gap-2 transition-colors hover:text-white"><FaEnvelope className="text-emerald-500" /> abhay.24305@knit.ac.in</a>
                        <a href="https://github.com/Abhaysoft-inc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white"><FaGithub className="text-emerald-500" /> GitHub</a>
                        <a href="https://linkedin.com/in/abhayvis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white"><FaLinkedin className="text-emerald-500" /> LinkedIn</a>
                    </div>
                </header>

                <section className="grid gap-12 border-t border-white/5 pt-10 md:grid-cols-[1.4fr_0.8fr]">
                    <div className="space-y-5">
                        <h2 className="text-2xl font-bold tracking-tight text-white">A little about me</h2>
                        <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
                            <p>I enjoy building backend systems, REST APIs, data workflows, and real-time applications. I care about clear interfaces, efficient queries, and software that stays dependable as it grows.</p>
                            <p>My recent projects include Curalynx, an AI-powered clinical documentation platform; StreamXT, a low-latency WebRTC streaming platform; Githall, a self-hosted Git server; and Thatlytics, an analytics platform for real-time dashboards.</p>
                            <p>Outside of engineering, I enjoy hackathons, building communities, reverse engineering, and learning how things work.</p>
                        </div>
                    </div>
                    <div className="h-fit space-y-3 border-l border-white/10 pl-6">
                        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Education</p>
                        <h3 className="font-bold text-zinc-200">KNIT Sultanpur</h3>
                        <p className="text-sm text-zinc-400">B.Tech in Electrical Engineering</p>
                        <p className="text-xs text-emerald-500">Minor in AI &amp; ML · 2024 - 2028</p>
                    </div>
                </section>

                <section className="space-y-6 border-t border-white/5 pt-10">
                    <div>
                        <p className="text-sm font-medium text-emerald-500">What I work with</p>
                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Technical skills</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {skillGroups.map((group) => (
                            <div key={group.title} className="space-y-3">
                                <h3 className="text-sm font-bold text-zinc-200">{group.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map(([skill, Icon]) => (
                                        <span key={skill} className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1 text-xs text-zinc-400">
                                            <Icon className="text-sm text-emerald-500" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
