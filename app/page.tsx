import Link from "next/link";
import {
  FaArrowRight,
  FaChevronDown,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111315] text-zinc-300 font-sans selection:bg-red-500/30 w-full overflow-x-hidden pt-32 pb-24">

      <main className="max-w-3xl mx-auto px-6 space-y-24">

        {/* Hero Section */}
        <section id="about" className="space-y-8 animate-fade-in">
          {/* Cover image placeholder */}
          <div className="w-full h-48 md:h-64 bg-zinc-800 rounded-2xl overflow-hidden relative border border-white/5 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-700 opacity-50"></div>
            <span className="text-zinc-500 z-10 font-bold">Cover Image</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Hey, I'm <span className="text-red-500">Abhay</span>
            </h1>
            <p className="text-sm font-medium text-emerald-500 flex flex-wrap gap-2 items-center">
              Engineer • Full Stack Developer • Tech Enthusiast
            </p>
            <p className="text-zinc-400 leading-relaxed max-w-2xl text-[17px]">
              I am a <strong className="text-zinc-200">software engineer</strong> who is passionate about scale and reliability. I love to build and reverse engineer everything I see. I love hackathons, building communities and arguing about tech.
            </p>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-5">
                <a href="https://github.com/Abhaysoft-inc" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-xl"><FaGithub /></a>
                <a href="https://twitter.com/_abhayvis" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-xl"><FaTwitter /></a>
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

        {/* Work Experience */}
        <section id="experience" className="space-y-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">Work Experience</h2>

          <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
            {/* Experience Item 1 */}
            <div className="relative flex items-center group py-4">
              <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#111315] text-white shadow z-10 shrink-0">
                <div className="w-5 h-5 rounded-full border-[3px] border-blue-500"></div>
              </div>
              <div className="w-full pl-16 flex justify-between items-center border-b border-white/5 pb-6 hover:border-white/10 transition-colors">
                <div className="flex flex-col space-y-1">
                  <span className="text-xs text-zinc-500 font-medium">2026</span>
                  <h3 className="text-lg font-bold text-zinc-200">Backend Developer - Effulgence'26</h3>
                  <span className="text-sm text-zinc-400">KNIT Sultanpur</span>
                </div>
                <div className="px-4">
                  <FaChevronDown className="text-zinc-500" />
                </div>
              </div>
            </div>


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
            <div className="bg-[#1c2024] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">StreamXT</h3>
                <FaExternalLinkAlt className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-zinc-400 text-sm flex-grow mb-6 leading-relaxed">
                Low-latency streaming platform enabling real-time broadcasting with sub-second delay using WebRTC, Next.js, and FFmpeg.
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-7 h-7 rounded-full bg-[#252a30] flex items-center justify-center text-[10px] font-bold">N</div>
                <div className="w-7 h-7 rounded-full bg-[#252a30] flex items-center justify-center text-[10px] font-bold text-blue-500">🐳</div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-[#1c2024] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Githall</h3>
                <FaExternalLinkAlt className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-zinc-400 text-sm flex-grow mb-6 leading-relaxed">
                Self-hosted Git server in Go and Next.js supporting 100+ repositories over HTTP. Handled raw Git HTTP protocols.
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-7 h-7 rounded-full bg-[#252a30] flex items-center justify-center text-[10px] font-bold text-blue-400">GO</div>
                <div className="w-7 h-7 rounded-full bg-[#252a30] flex items-center justify-center text-[10px] font-bold">N</div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-[#1c2024] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Thatlytics</h3>
                <FaExternalLinkAlt className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-zinc-400 text-sm flex-grow mb-6 leading-relaxed">
                Analytics platform processing 10k+ events/day with real-time dashboards utilizing Prisma and PostgreSQL.
              </p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="w-7 h-7 rounded-full bg-[#252a30] flex items-center justify-center text-[10px] font-bold text-blue-400">TS</div>
                <div className="w-7 h-7 rounded-full bg-[#252a30] flex items-center justify-center text-[10px] font-bold text-blue-300">Pg</div>
              </div>
            </div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <h3 className="font-bold text-lg md:text-xl text-white z-20 relative">Winner @ RIFT Hackathon 2026</h3>
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <h3 className="font-bold text-lg md:text-xl text-white z-20 relative">Runner Up @ HackWithUP</h3>
            </div>
            <div className="relative group overflow-hidden rounded-2xl aspect-[16/9] bg-zinc-800 flex items-end p-6 border border-white/5">
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
