"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-beige-50/95 backdrop-blur-md shadow-sm py-2"
                : "bg-transparent py-3"
                }`}
        >
            <div className="section-container flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="group flex items-center">
                    <Image
                        src="/tm-logo.png"
                        alt="Talent Mucho"
                        width={100}
                        height={30}
                        className="h-14 w-auto object-contain"
                        priority
                    />
                </a>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a
                        href="#services"
                        className="text-sm text-espresso-800 hover:text-clay-500 transition-colors"
                    >
                        Services
                    </a>
                    <a
                        href="#process"
                        className="text-sm text-espresso-800 hover:text-clay-500 transition-colors"
                    >
                        Process
                    </a>
                    <a
                        href="#why-us"
                        className="text-sm text-espresso-800 hover:text-clay-500 transition-colors"
                    >
                        Why Us
                    </a>
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className="btn-primary text-sm py-3 px-6"
                >
                    Book a Call
                </a>
            </div>
        </header>
    );
}
