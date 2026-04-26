import Link from "next/link";

export default function BlogsPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 pt-32 pb-24 space-y-24 w-full">
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Blogs</h2>
                    <Link href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">Back Home</Link>
                </div>

                <div className="space-y-4 text-zinc-400">
                    <p>No blog posts published yet. Stay tuned!</p>
                </div>
            </section>
        </main>
    );
}