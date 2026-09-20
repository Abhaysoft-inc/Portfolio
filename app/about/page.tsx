import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaAws, FaDocker, FaEnvelope, FaGithub, FaGitAlt, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiSolidity, SiTypescript, SiWebrtc } from "react-icons/si";
import type { IconType } from "react-icons";

export const metadata: Metadata = {
    title: "About | Abhay Vishwakarma – Software Engineer & Backend Developer",
    description: "Learn more about Abhay Vishwakarma, a Software Engineer and Backend Developer specializing in scalable backend systems, AI products, RESTful APIs, and real-time architectures. B.Tech at KNIT Sultanpur.",
    keywords: [
        "Abhay Vishwakarma",
        "Abhaysoft",
        "Software Engineer",
        "Backend Developer",
        "AI Developer",
        "KNIT Sultanpur",
        "FastAPI",
        "Next.js",
        "TypeScript",
        "Python",
        "WebRTC",
        "PostgreSQL",
        "Docker",
        "Curalynx",
        "StreamXT"
    ],
    authors: [{ name: "Abhay Vishwakarma", url: "https://github.com/Abhaysoft-inc" }],
    creator: "Abhay Vishwakarma",
    openGraph: {
        title: "About | Abhay Vishwakarma – Software Engineer & Backend Developer",
        description: "Software Engineer and Backend Developer building scalable systems, AI products, APIs, and practical applications.",
        url: "/about",
        siteName: "Abhay Vishwakarma Portfolio",
        images: [
            {
                url: "/about-me.jpeg",
                width: 576,
                height: 1024,
                alt: "Abhay Vishwakarma - Software Engineer",
            },
        ],
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "About | Abhay Vishwakarma – Software Engineer & Backend Developer",
        description: "Software Engineer and Backend Developer building scalable systems, AI products, APIs, and practical applications.",
        images: ["/about-me.jpeg"],
        creator: "@abhayofc",
    },
    alternates: {
        canonical: "/about",
    },
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
        "@type": "Person",
        name: "Abhay Vishwakarma",
        alternateName: ["Abhaysoft", "Abhay"],
        url: "https://github.com/Abhaysoft-inc",
        image: "/about-me.jpeg",
        jobTitle: "Software Engineer",
        description: "Software engineer building backend systems, AI products, APIs, and practical applications.",
        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Kamla Nehru Institute of Technology, Sultanpur",
            alternateName: "KNIT Sultanpur",
        },
        knowsAbout: [
            "Backend Development",
            "Artificial Intelligence",
            "Machine Learning",
            "FastAPI",
            "Next.js",
            "TypeScript",
            "Python",
            "PostgreSQL",
            "WebRTC",
            "Docker",
            "REST APIs",
        ],
        sameAs: [
            "https://github.com/Abhaysoft-inc",
            "https://linkedin.com/in/abhayvis",
            "https://twitter.com/abhayofc",
        ],
    },
};

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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />
            <div className="mx-auto max-w-3xl space-y-16">
                <header className="space-y-5">
                    <div className="flex items-center justify-between">
                        <nav aria-label="Breadcrumb">
                            <p className="text-sm font-medium text-emerald-500">About Me</p>
                        </nav>
                        <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
                            Back Home
                        </Link>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Abhay <span className="text-red-500">Vishwakarma</span>
                    </h1>
                    <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
                        Software engineer building backend systems, AI products, APIs, and practical applications.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-3 pt-2 text-xs text-zinc-500">
                        <a href="tel:+918948041722" className="flex items-center gap-2 transition-colors hover:text-white" aria-label="Call +91 8948041722">
                            <FaPhone className="text-emerald-500" aria-hidden="true" /> +91 8948041722
                        </a>
                        <a href="mailto:abhay.24305@knit.ac.in" className="flex items-center gap-2 transition-colors hover:text-white" aria-label="Send email to abhay.24305@knit.ac.in">
                            <FaEnvelope className="text-emerald-500" aria-hidden="true" /> abhay.24305@knit.ac.in
                        </a>
                        <a href="https://github.com/Abhaysoft-inc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white" aria-label="Abhay's GitHub profile">
                            <FaGithub className="text-emerald-500" aria-hidden="true" /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/abhayvis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white" aria-label="Abhay's LinkedIn profile">
                            <FaLinkedin className="text-emerald-500" aria-hidden="true" /> LinkedIn
                        </a>
                    </div>
                </header>

                <section className="grid gap-12 border-t border-white/5 pt-10 md:grid-cols-[1.3fr_0.9fr]" aria-labelledby="about-bio-heading">
                    <div className="space-y-5">
                        <h2 id="about-bio-heading" className="text-2xl font-bold tracking-tight text-white">A little about me</h2>
                        <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
                            <p>I enjoy building backend systems, REST APIs, data workflows, and real-time applications. I care about clear interfaces, efficient queries, and software that stays dependable as it grows.</p>
                            <p>My recent projects include Curalynx, an AI-powered clinical documentation platform; StreamXT, a low-latency WebRTC streaming platform; Githall, a self-hosted Git server; and Thatlytics, an analytics platform for real-time dashboards.</p>
                            <p>Outside of engineering, I enjoy hackathons, building communities, reverse engineering, and learning how things work.</p>
                        </div>
                    </div>
                    <div className="space-y-6 md:border-l md:border-white/10 md:pl-6">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-800 shadow-xl group">
                            <Image
                                src="/about-me.jpeg"
                                alt="Abhay Vishwakarma working on backend and AI systems at a hackathon"
                                title="Abhay Vishwakarma"
                                fill
                                sizes="(max-width: 768px) 100vw, 320px"
                                className="object-cover object-[center_35%] group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        </div>

                        <div className="h-fit space-y-3 pt-2 border-t border-white/5 md:border-t-0">
                            <h2 className="text-xs font-medium uppercase tracking-wider text-zinc-500">Education</h2>
                            <h3 className="font-bold text-zinc-200">KNIT Sultanpur</h3>
                            <p className="text-sm text-zinc-400">B.Tech in Electrical Engineering</p>
                            <p className="text-xs text-emerald-500">Minor in AI &amp; ML · 2024 - 2028</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-6 border-t border-white/5 pt-10" aria-labelledby="tech-skills-heading">
                    <div>
                        <p className="text-sm font-medium text-emerald-500">What I work with</p>
                        <h2 id="tech-skills-heading" className="mt-2 text-2xl font-bold tracking-tight text-white">Technical skills</h2>
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
