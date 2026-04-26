import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function AboutPage() {
    return (
        <main className="max-w-2xl mx-auto px-6 pt-32 pb-24 space-y-12 w-full text-zinc-300">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-white tracking-tight">Abhay Vishwakarma</h1>
                <p className="text-sm text-emerald-500 font-medium">
                    Backend Developer • B.Tech EE (Minor in AI ML)
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-zinc-400">
                    <span className="flex items-center gap-2">
                        <FaPhone className="text-emerald-400" />
                        +91 8948041722
                    </span>
                    <a
                        href="mailto:abhay.24305@knit.ac.in"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FaEnvelope className="text-emerald-400" />
                        abhay.24305@knit.ac.in
                    </a>
                    <a
                        href="https://linkedin.com/in/abhayvis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FaLinkedin className="text-emerald-400" />
                        linkedin.com/in/abhayvis
                    </a>
                    <a
                        href="https://github.com/Abhaysoft-inc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <FaGithub className="text-emerald-400" />
                        github.com/Abhaysoft-inc
                    </a>
                </div>

                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-zinc-800">
                    <Image
                        src="/profilepc.jpeg"
                        alt="Profile Picture"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        priority
                    />
                </div>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">About</h2>
                <p className="text-sm leading-relaxed text-zinc-400">
                    Backend developer focused on building scalable systems, REST APIs, and reliable data workflows. I
                    engineered backend infrastructure supporting 1000+ users, optimized registration flows handling
                    5000+ signups, and improved response times by 35% through query tuning and database design.
                </p>
                <p className="text-sm leading-relaxed text-zinc-400">
                    Recent work includes StreamXT (real-time WebRTC streaming), Githall (self-hosted Git server), and
                    Thatlytics (analytics platform processing 10k+ events per day).
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">Education</h2>
                <div className="bg-[#1c2024] rounded-2xl p-5 border border-white/5 space-y-1">
                    <span className="text-xs text-zinc-500 font-medium">2024 - 2028</span>
                    <h3 className="text-lg font-bold text-zinc-200">KNIT Sultanpur</h3>
                    <p className="text-sm text-zinc-400">Bachelor of Technology in Electrical Engineering</p>
                    <p className="text-xs text-zinc-500">Minor in AI ML</p>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-bold text-white">Technical Skills</h2>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-sm font-bold text-white">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {["TypeScript", "JavaScript", "Solidity", "C++"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-md"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-bold text-white">Frameworks & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Next.js",
                                "React.js",
                                "Node.js",
                                "WebRTC",
                                "REST APIs",
                                "Tailwind CSS",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-md"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-bold text-white">Databases</h3>
                        <div className="flex flex-wrap gap-2">
                            {["PostgreSQL", "MongoDB", "Prisma ORM"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-md"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-bold text-white">Developer Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Git",
                                "Docker",
                                "Postman",
                                "Google Cloud Platform",
                                "AWS",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-md"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-white">Contact</h2>
                <p className="text-sm leading-relaxed text-zinc-400">
                    For collaborations or opportunities, reach out at{" "}
                    <a
                        href="mailto:abhay.24305@knit.ac.in"
                        className="text-emerald-500 hover:underline"
                    >
                        abhay.24305@knit.ac.in
                    </a>
                    .
                </p>
            </section>
        </main>
    );
}