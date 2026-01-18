import Section from "./Section";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogSection() {
    const posts = [
        {
            title: "The Art of Remote Team Building: Beyond Video Calls",
            excerpt:
                "Discover proven strategies for creating genuine connections and fostering collaboration in distributed teams.",
            category: "Remote Work",
            date: "Jan 15, 2026",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
        },
        {
            title: "What Top Candidates Look for in 2026",
            excerpt:
                "Understanding the evolving priorities of global talent can help you attract and retain the best.",
            category: "Hiring Insights",
            date: "Jan 10, 2026",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
        },
        {
            title: "Cultural Alignment: The Hidden Factor in Hiring Success",
            excerpt:
                "Why skills alone aren't enough and how to identify candidates who truly fit your team.",
            category: "Culture",
            date: "Jan 5, 2026",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
        },
    ];

    return (
        <Section id="blog">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div className="mb-6 md:mb-0">
                        <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                            Insights & Resources
                        </p>
                        <h2>From our journal</h2>
                    </div>
                    <a
                        href="/blog"
                        className="inline-flex items-center gap-2 text-clay-500 hover:text-clay-600 font-medium transition-colors group"
                    >
                        View all articles
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="card group cursor-pointer hover:bg-beige-100/80 p-0 overflow-hidden"
                        >
                            {/* Cover Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block px-3 py-1 bg-beige-50/90 backdrop-blur-sm text-clay-500 text-xs font-medium rounded-full uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title */}
                                <h3 className="text-xl mb-3 group-hover:text-clay-500 transition-colors duration-300">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-taupe-400 leading-relaxed text-sm mb-6">
                                    {post.excerpt}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center gap-4 text-xs text-taupe-400 pt-4 border-t border-beige-200">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </Section>
    );
}
