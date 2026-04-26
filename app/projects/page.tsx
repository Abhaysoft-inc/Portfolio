import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 space-y-24 w-full">
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Projects</h2>
                    <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">Back Home</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Project Card 1 */}
                    <div className="bg-[#1c2024] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full group">
                        <div className="flex items-start justify-between mb-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">StreamXT</h3>
                                <span className="text-xs text-zinc-500">2026 • Demo • Repo</span>
                            </div>
                            <FaExternalLinkAlt className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                        </div>
                        <ul className="text-zinc-400 text-sm flex-grow mb-4 leading-relaxed list-disc list-outside pl-4 space-y-2">
                            <li>Coded low-latency streaming platform enabling real-time broadcasting with sub-second delay (less than 1s) using WebRTC.</li>
                            <li>Streamlined media pipeline reducing CPU/GPU utilization by 30% and improving stream stability during high-load sessions.</li>
                            <li>Implemented parallel local recording using MediaRecorder API with FFmpeg processing.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {"Next.js, WebRTC, FFmpeg, Docker".split(", ").map((tag) => (
                                <span key={tag} className="px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="bg-[#1c2024] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full group">
                        <div className="flex items-start justify-between mb-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Githall</h3>
                                <span className="text-xs text-zinc-500">2026 • Repo • Article</span>
                            </div>
                            <FaExternalLinkAlt className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                        </div>
                        <ul className="text-zinc-400 text-sm flex-grow mb-4 leading-relaxed list-disc list-outside pl-4 space-y-2">
                            <li>Built a self-hosted Git server supporting 100+ repositories over HTTP.</li>
                            <li>Integrated git-http-backend with a custom Go server to support clone, push, and pull operations.</li>
                            <li>Automated repository provisioning using go-git, reducing setup time by 60%.</li>
                            <li>Created REST APIs for repository creation and management using Gin framework.</li>
                            <li>Documented the architecture and implementation in a technical article.</li>
                            <li>Handled concurrent Git operations for 10+ active users with efficient request routing and response streaming.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {"Go, Next.js, Git, REST APIs, Gin".split(", ").map((tag) => (
                                <span key={tag} className="px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project Card 3 */}
                    <div className="bg-[#1c2024] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full group">
                        <div className="flex items-start justify-between mb-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-emerald-400 transition-colors">Thatlytics</h3>
                                <span className="text-xs text-zinc-500">2025 • Repo</span>
                            </div>
                            <FaExternalLinkAlt className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                        </div>
                        <ul className="text-zinc-400 text-sm flex-grow mb-4 leading-relaxed list-disc list-outside pl-4 space-y-2">
                            <li>Created an analytics platform processing 10k+ events/day to track user interactions.</li>
                            <li>Developed real-time dashboards improving data visibility and analysis efficiency by 40%.</li>
                            <li>Optimized scalable backend architecture using Prisma and PostgreSQL for high-volume data processing.</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {"TypeScript, Next.js, Prisma, PostgreSQL".split(", ").map((tag) => (
                                <span key={tag} className="px-2.5 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}