import Header from "../../components/Header";
import CTASection from "../../components/CTASection"
import Image from "next/image";
import { Calendar, Clock, Tag, Share2, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
    blogPosts,
    getBlogPostById,
    getRelatedPosts,
    formatBlogContent,
} from "@/data/blog";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostById(slug);

    if (!post) {
        return {
            title: "Post Not Found | Talent Mucho Blog",
        };
    }

    return {
        title: `${post.title} | Talent Mucho Blog`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.id,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPostById(slug);

    if (!post) {
        notFound();
    }

    // Get related posts
    const relatedPosts = getRelatedPosts(slug, 2);

    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Article Header */}
                <section className="section-padding bg-beige-100 pb-0">
                    <div className="section-container">
                        <div className="max-w-3xl mx-auto">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-beige-200 text-clay-500 text-xs font-medium rounded-full uppercase tracking-wider mb-6">
                                <Tag className="w-3 h-3" />
                                {post.category}
                            </span>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                                {post.title}
                            </h1>

                            <p className="text-lg md:text-xl text-taupe-400 leading-relaxed mb-8">
                                {post.excerpt}
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-beige-300">
                                <div className="flex items-center gap-4 text-sm text-taupe-400">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-taupe-400">
                                        Share:
                                    </span>
                                    <button className="p-2 rounded-full bg-beige-200 text-espresso-700 hover:bg-beige-300 transition-colors">
                                        <Twitter className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 rounded-full bg-beige-200 text-espresso-700 hover:bg-beige-300 transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 rounded-full bg-beige-200 text-espresso-700 hover:bg-beige-300 transition-colors">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Image */}
                <section className="py-12 bg-beige-100">
                    <div className="section-container">
                        <div className="max-w-4xl mx-auto">
                            <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="section-padding bg-beige-50">
                    <div className="section-container">
                        <article className="max-w-3xl mx-auto prose prose-lg prose-beige">
                            <div
                                className="blog-content"
                                dangerouslySetInnerHTML={{
                                    __html: formatBlogContent(post.content),
                                }}
                            />
                        </article>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="section-padding bg-beige-100">
                        <div className="section-container">
                            <div className="max-w-5xl mx-auto">
                                <h2 className="text-2xl md:text-3xl text-center mb-12">
                                    Related Articles
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {relatedPosts.map((relatedPost) => (
                                        <article
                                            key={relatedPost.id}
                                            className="group"
                                        >
                                            <Link
                                                href={`/blog/${relatedPost.id}`}
                                                className="block"
                                            >
                                                <div className="card p-0 overflow-hidden hover:bg-beige-50">
                                                    <div className="relative h-48 overflow-hidden">
                                                        <Image
                                                            src={
                                                                relatedPost.image
                                                            }
                                                            alt={
                                                                relatedPost.title
                                                            }
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                        <div className="absolute top-4 left-4">
                                                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-beige-50/90 backdrop-blur-sm text-clay-500 text-xs font-medium rounded-full uppercase tracking-wider">
                                                                <Tag className="w-3 h-3" />
                                                                {
                                                                    relatedPost.category
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="p-6">
                                                        <h3 className="text-xl mb-3 group-hover:text-clay-500 transition-colors">
                                                            {relatedPost.title}
                                                        </h3>
                                                        <p className="text-taupe-400 text-sm">
                                                            {relatedPost.excerpt}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <CTASection />
            </main>
        </>
    );
}
