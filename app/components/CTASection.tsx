import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

export default function CTASection() {
    const socialLinks = [
        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            href: "https://wa.me/34657752940",
        },
        {
            name: "Facebook",
            icon: FaFacebookF,
            href: "https://facebook.com/talentmucho",
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            href: "https://instagram.com/talentmucho",
        },
        {
            name: "TikTok",
            icon: FaTiktok,
            href: "https://tiktok.com/@talentmucho",
        },
        {
            name: "Threads",
            icon: SiThreads,
            href: "https://threads.net/@talentmucho",
        },
    ];

    return (
        <section id="contact" className="relative bg-charcoal-900 overflow-hidden">
            {/* Diagonal Cross Grid Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(45deg, transparent 49%, #524639 49%, #524639 51%, transparent 51%),
                        linear-gradient(-45deg, transparent 49%, #524639 49%, #524639 51%, transparent 51%)
                    `,
                    backgroundSize: "40px 40px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
                    maskImage:
                        "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
                }}
            />

            {/* CTA Content */}
            <div className="section-container relative z-10 text-center py-10 md:py-10">
                {/* Let's Connect Divider */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-taupe-500/50"></div>
                    <span className="text-taupe-400 text-sm tracking-[0.2em] uppercase">
                        Let&apos;s connect
                    </span>
                    <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-taupe-500/50"></div>
                </div>

                {/* Main Heading */}
                <h2 className="text-beige-50 text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                    Ready to build your global team?
                    <br />
                    <span className="text-beige-200/90">Let&apos;s talk today.</span>
                </h2>

                {/* Subtitle */}
                <p className="text-lg text-beige-200/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Join forward thinking companies already leveraging our platform to scale their operations with world class talent.
                </p>

                {/* CTA Button with Glow */}
                <div className="relative inline-block mb-12">
                    <a
                        href="https://calendly.com/talentmucho/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-beige-50 text-charcoal-900 font-medium text-base rounded-lg shadow-md transition-all duration-300 ease-out hover:bg-beige-100 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Get Started Now
                        <ArrowUpRight className="w-5 h-5" />
                    </a>

                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <div key={social.name} className="flex items-center gap-4">
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="text-beige-200/60 hover:text-beige-50 transition-colors duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                                {index < socialLinks.length - 1 && (
                                    <div className="h-4 w-px bg-beige-200/20"></div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Contact Email */}
                <a
                    href="mailto:hello@talentmucho.com"
                    className="text-beige-200/60 hover:text-beige-50 transition-colors duration-300 text-sm"
                >
                    hello@talentmucho.com
                </a>

                {/* Logo & Copyright */}
                <div className="mt-8 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Logo */}
                        <a href="#" className="flex items-center">
                            <Image
                                src="/tm-logo.png"
                                alt="Talent Mucho"
                                width={120}
                                height={40}
                                className="h-8 w-auto object-contain brightness-0 invert"
                            />
                        </a>


                        {/* Copyright */}
                        <p className="text-sm text-beige-200/40">
                            © {new Date().getFullYear()} Talent Mucho. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
