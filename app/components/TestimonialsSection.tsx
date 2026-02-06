"use client";

import Section from "./Section";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Talent Mucho transformed how we build our team. Their candidates aren't just skilled, they truly understand our culture and values.",
            author: "Sarah Chen",
            role: "CEO",
            company: "Nexus Innovations",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
        },
        {
            quote: "The level of care and attention they put into understanding our needs was remarkable. We found our perfect senior developer in just two weeks.",
            author: "Michael Torres",
            role: "CTO",
            company: "Streamline Tech",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        },
        {
            quote: "Working with Talent Mucho feels like having an extension of our own HR team. They've placed 12 team members with us so far.",
            author: "Emily Watson",
            role: "Head of Operations",
            company: "GrowthPath Co.",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        },
    ];

    return (
        <Section id="testimonials" variant="alt">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-taupe-400 text-sm uppercase tracking-[0.2em] mb-4">
                        What Our Clients Say
                    </p>
                    <h2 className="mb-6">Trusted by growing teams</h2>
                    <p className="editorial-subheading">
                        Hear from the companies we've had the privilege to partner with
                        on their journey to building exceptional teams.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="card group flex flex-col justify-between hover:bg-beige-100/80"
                        >
                            {/* Quote Icon */}
                            <div className="mb-6">
                                <div className="w-10 h-10 bg-clay-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-clay-500 transition-colors duration-300">
                                    <Quote className="w-5 h-5 text-clay-500 group-hover:text-beige-50 transition-colors duration-300" />
                                </div>
                                <p className="text-espresso-800 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            {/* Author Info with Avatar */}
                            <div className="pt-4 border-t border-beige-200 flex items-center gap-3">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-beige-200"
                                />
                                <div>
                                    <p className="font-medium text-charcoal-900">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm text-taupe-400">
                                        {testimonial.role}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
