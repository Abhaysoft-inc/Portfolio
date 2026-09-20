import Link from "next/link";
import Image from "next/image";
import { ExperienceItem } from "@/components/ExperienceItem";
import { CalendarHeatmap, CONTRIBUTIONS } from "@/components/spectrumui/charts/calendar-heatmap";
import { getGithubContributions } from "@/lib/github-contributions";
import {
  FaArrowRight,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiWebrtc,
  SiFfmpeg,
  SiDocker,
  SiGo,
  SiGit,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiFastapi,
  SiPython,
  SiOpenai,
} from "react-icons/si";

export default async function Home() {
  const githubContributions = (await getGithubContributions()) ?? CONTRIBUTIONS;

  return (
    <div className="min-h-screen bg-[#0d0f10] text-zinc-300 font-sans selection:bg-red-500/30 w-full overflow-x-hidden pt-32 pb-24">

      <main className="max-w-3xl mx-auto px-6 space-y-24">

        {/* Hero Section */}
        <section id="about" className="space-y-8 animate-fade-in">
          <div className="w-full h-48 md:h-64 bg-zinc-800 rounded-2xl overflow-hidden relative border border-white/5">
            <Image
              src="/hero.gif"
              alt="Abhay's portfolio hero"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Hey, I&apos;m <span className="text-red-500">Abhay</span>
            </h1>
            <p className="text-sm font-medium text-emerald-500 flex flex-wrap gap-2 items-center">
              Software Engineer • Backend &amp; AI Developer • Full Stack Developer
            </p>
            <p className="text-zinc-400 leading-relaxed max-w-2xl text-[17px]">
              I build <strong className="text-zinc-200">backend systems</strong>, <strong className="text-zinc-200">AI-powered products</strong>, and <strong className="text-zinc-200">full-stack applications</strong>. I work across APIs, data pipelines, AI, and real-time systems, and enjoy reverse engineering and breaking things apart to understand how they work.
            </p>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-5">
                <a href="https://github.com/Abhaysoft-inc" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-xl"><FaGithub /></a>
                <a href="https://twitter.com/abhayofc" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-xl"><FaTwitter /></a>
                <a href="mailto:abhay.24305@knit.ac.in" className="text-zinc-500 hover:text-white transition-colors text-xl">
                  <FaEnvelope />
                </a>
                <a href="https://linkedin.com/in/abhayvis" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-xl"><FaLinkedin /></a>
              </div>
              <Link href="/about" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
                More <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* GitHub Activity */}
        <section id="github" className="space-y-3">
          <CalendarHeatmap data={githubContributions} hue="#10b981" label="contributions in 2026" compact />
        </section>

        {/* Work Experience */}
        <section id="experience" className="space-y-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">Work Experience</h2>

          <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
            <ExperienceItem
              year="May 2026 – Present"
              title="SDE Intern – OGCollege"
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
              year="May 2026 – July 2026"
              title="Software Engineering Intern – HITAI"
              company="Remote, London, UK"
              logoUrl="/logos/hitai.png"
              logoAlt="HITAI"
              descriptionItems={[
                "Developed a Python-based dashboard to manage clients and monitor live video streams processed through ML/CV models.",
                "Built interfaces for viewing real-time model outputs and analyzed video streams, enabling clients to monitor ongoing live events.",
                "Integrated streaming status and model-generated results into a centralized dashboard for real-time monitoring and operations."
              ]}
            />

            <ExperienceItem
              year="Jan 2026 – March 2026"
              title="Backend Developer - Effulgence'26"
              company="KNIT Sultanpur"
              logoUrl="/logos/effulgence.png"
              logoAlt="Effulgence"
              logoClassName="invert"
              descriptionItems={[
                "Engineered backend infrastructure supporting 1000+ users with high availability and minimal downtime.",
                "Architected RESTful APIs and optimized database workflows handling 5000+ registrations.",
                "Implemented secure authentication and user management systems, reducing manual coordination by 70%.",
                "Reduced API response time by 35% through query optimization and efficient database design.",
                "Improved system reliability during peak traffic through efficient request handling and performance tuning."
              ]}
            />
          </div>
          <div className="flex justify-end pt-2">
            <Link href="/experience" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
              View All <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project Card 1 */}
            <a href="https://github.com/Abhaysoft-inc/streamxt" target="_blank" rel="noopener noreferrer" className="bg-[#1c2024] rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full group overflow-hidden">
              <div className="relative w-full h-48 bg-zinc-800 border-b border-white/5 shrink-0 overflow-hidden">
                <Image src="/projects/streamxt.jpg" alt="StreamXT Project" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">StreamXT</h3>
                  <FaExternalLinkAlt className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-zinc-400 text-sm flex-grow mb-6 leading-relaxed">
                  Low-latency streaming platform enabling real-time broadcasting with sub-second delay using WebRTC, Next.js, and FFmpeg.
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <SiNextdotjs className="w-5 h-5 text-zinc-400" />
                  <SiWebrtc className="w-5 h-5 text-emerald-400" />
                  <SiFfmpeg className="w-5 h-5 text-green-500" />
                  <SiDocker className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </a>

            {/* Project Card 2: Curalynx */}
            <div className="bg-[#1c2024] rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full group overflow-hidden">
              <a href="https://curalynx.me" target="_blank" rel="noopener noreferrer" className="relative w-full h-48 bg-zinc-800 border-b border-white/5 shrink-0 overflow-hidden block">
                <Image src="/projects/curalynx.png" alt="Curalynx Project" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </a>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <a href="https://curalynx.me" target="_blank" rel="noopener noreferrer">
                      <h3 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Curalynx</h3>
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/ishaancreates/CuralynX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://curalynx.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm flex-grow mb-6 leading-relaxed">
                  AI-powered clinical documentation platform that converts doctor-patient conversations into structured medical notes. Led backend development using FastAPI, Whisper/Faster-Whisper, speaker diarization, and RAG.
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <SiPython className="w-5 h-5 text-blue-400" title="Python" />
                  <SiFastapi className="w-5 h-5 text-emerald-400" title="FastAPI" />
                  <SiOpenai className="w-5 h-5 text-zinc-200" title="Whisper & AI" />
                  <SiPostgresql className="w-5 h-5 text-blue-300" title="PostgreSQL" />
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <a href="https://github.com/Abhaysoft-inc/githall" target="_blank" rel="noopener noreferrer" className="bg-[#1c2024] rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full group overflow-hidden">
              <div className="relative w-full h-48 bg-zinc-800 border-b border-white/5 shrink-0 overflow-hidden">
                <Image src="/placeholder.svg" alt="Project Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Githall</h3>
                  <FaExternalLinkAlt className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-zinc-400 text-sm flex-grow mb-6 leading-relaxed">
                  Self-hosted Git server in Go and Next.js supporting 100+ repositories over HTTP. Handled raw Git HTTP protocols.
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <SiGo className="w-5 h-5 text-blue-400" />
                  <SiNextdotjs className="w-5 h-5 text-zinc-400" />
                  <SiGit className="w-5 h-5 text-orange-500" />
                </div>
              </div>
            </a>

            {/* Project Card 3 */}
            <a href="https://github.com/Abhaysoft-inc/thatlytics" target="_blank" rel="noopener noreferrer" className="bg-[#1c2024] rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full group overflow-hidden">
              <div className="relative w-full h-48 bg-zinc-800 border-b border-white/5 shrink-0 overflow-hidden">
                <Image src="/placeholder.svg" alt="Project Placeholder" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Thatlytics</h3>
                  <FaExternalLinkAlt className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-zinc-400 text-sm flex-grow mb-6 leading-relaxed">
                  Analytics platform processing 10k+ events/day with real-time dashboards utilizing Prisma and PostgreSQL.
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <SiTypescript className="w-5 h-5 text-blue-400" />
                  <SiNextdotjs className="w-5 h-5 text-zinc-400" />
                  <SiPrisma className="w-5 h-5 text-emerald-500" />
                  <SiPostgresql className="w-5 h-5 text-blue-300" />
                </div>
              </div>
            </a>
          </div>

          <div className="flex justify-end pt-2">
            <Link href="/projects" className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group">
              View All <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="space-y-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">Achievements</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
              <Image src="/achivements/rift-winner.jpeg" alt="RIFT Hackathon 2026" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <h3 className="font-bold text-lg md:text-xl text-white z-20 relative">Winner @ RIFT Hackathon 2026</h3>
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
              <Image src="/achivements/hackwithup.jpeg" alt="HackWithUP" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <h3 className="font-bold text-lg md:text-xl text-white z-20 relative">Runner Up @ HackWithUP</h3>
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
              <Image src="/achivements/nasa-sac.jpeg" alt="NASA Space Apps" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <h3 className="font-bold text-lg md:text-xl text-white z-20 relative">3rd Place @ NASA Space Apps</h3>
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <h3 className="font-bold text-lg md:text-xl text-white z-20 relative">Security Vulnerabilities Identified @ python.org & Cambridge</h3>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
