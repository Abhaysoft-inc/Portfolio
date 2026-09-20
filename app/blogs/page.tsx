import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const posts = [
    {
        title: "Create Your Own GitHub — Coz Why Not?",
        description: "A practical walkthrough of building a lightweight Git server in Go with go-git and git-http-backend.",
        date: "Jan 9, 2026",
        readTime: "7 min read",
        tags: ["Golang", "Git"],
        href: "https://abhayvis.medium.com/create-your-own-github-coz-why-not-e80f8e80d2af",
    },
    {
        title: "How I hacked RD Sharma’s Publisher Website?",
        description: "A responsible disclosure story about finding and reporting an SQL injection in a publisher’s admin panel.",
        date: "Oct 3, 2024",
        readTime: "1 min read",
        tags: ["Bug Bounty", "SQL Injection"],
        href: "https://abhayvis.medium.com/how-i-hacked-rd-sharmas-publisher-website-7a76b3cb12ae",
    },
    {
        title: "Methodology of Subdomain Takeover for Beginners",
        description: "An introduction to identifying vulnerable hosting configurations and responsibly validating subdomain takeovers.",
        date: "Jul 9, 2022",
        readTime: "2 min read",
        tags: ["Bug Bounty", "Cybersecurity"],
        href: "https://abhayvis.medium.com/methodology-of-subdomain-takeover-for-beginners-759cd40e6aee",
    },
    {
        title: "How I Hacked My School’s Students Portal to get access to any student’s details?",
        description: "A security write-up about an authorization flaw that allowed password changes across student accounts, which was reported and fixed.",
        date: "Apr 16, 2022",
        readTime: "2 min read",
        tags: ["Ethical Hacking", "Bug Bounty"],
        href: "https://abhayvis.medium.com/how-i-hacked-my-schools-students-portal-to-get-access-to-any-student-s-details-d58f10cfe596",
    },
];

export default function BlogsPage() {
    return (
        <main className="min-h-screen w-full !bg-[#0d0f10] px-6 pb-24 pt-32 text-zinc-300 selection:bg-red-500/30">
            <div className="mx-auto max-w-3xl space-y-24">
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Blogs</h2>
                    <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">Back Home</Link>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {posts.map((post) => (
                        <a
                            key={post.href}
                            href={post.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-full flex-col rounded-2xl border border-white/5 bg-[#1c2024] p-6 transition-colors hover:border-white/15"
                        >
                            <div className="mb-5 flex items-center justify-between text-xs text-zinc-500">
                                <span>{post.date} · {post.readTime}</span>
                                <FaArrowUpRightFromSquare className="text-zinc-600 transition-colors group-hover:text-emerald-400" />
                            </div>
                            <h3 className="text-lg font-bold leading-snug text-zinc-200 transition-colors group-hover:text-emerald-400">
                                {post.title}
                            </h3>
                            <p className="mt-4 flex-grow text-sm leading-relaxed text-zinc-400">{post.description}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs text-emerald-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </section>
            </div>
        </main>
    );
}